// $ node crow.cjs

import fs from "fs";
import path from "path";
import type { ASTTree, IName } from "./IAST.cjs";

const outputBaseDir = "./cypress/";
const alreadyDone: string[] = [];
const topFolder = "./ast/components/";

const modifiersKind = {
  default: 88,
  export: 93,
};

if (!fs.existsSync(outputBaseDir)) fs.mkdirSync(outputBaseDir, { recursive: true });

function stampout(folder: string) {
  console.log(folder);

  const filenames = fs.readdirSync(folder) || [];

  for (const filename of filenames) {
    console.log(filename);
    const astString = fs.readFileSync(path.join(folder, filename), "utf-8");
    const ast = JSON.parse(astString) as ASTTree;
    const statements = ast.statements.filter(s => !s.importClause);

    const defaultExport = ast.statements.find(x => x.modifiers?.find(m => m.kind === modifiersKind.default));
    if (defaultExport && !defaultExport.name)
      defaultExport.name = {
        escapedText: path
          .basename(filename)
          .split(".")[0]
          .toUpperCase()
          .replace(/[^A-Z]/g, ""),
      } as IName;
    const exports = ast.statements
      .filter(x => x.modifiers?.find(m => m.kind === modifiersKind.export))
      .filter(mod => mod !== defaultExport);
    // console.log({ defaultExport, exports })
    // console.log(ast.statements.map(s => s.modifiers?.kind))

    const outputFilename = outputBaseDir + filename.replace(".json", ".tsx");
    fs.mkdirSync(path.dirname(outputFilename), { recursive: true });

    console.log("-> " + outputFilename);
    console.log();

    const FileUnderTest = `../${ast.fileName.replace(".tsx", ".js")}`;
    const defaultExportUnderTest = defaultExport?.name?.escapedText;
    const namesToTest = (defaultExport ? [defaultExport.name!.escapedText] : []).concat(exports.map(ex => ex.name!.escapedText));
    console.log({ namesToTest });

    // for each exported item,
    // pick "reasonable" inputs for it,
    // for each onXxxx handler,
    // for each async operation,
    // test "render with <inputs> [after <async op>] [on <handlername> <inputs>] [after <async op>]"

    ///////////////////////////
    const output = `
${defaultExport ? `import ${defaultExport.name!.escapedText} from '${FileUnderTest}'` : ""}
${exports && exports.length > 0 ? `import { ${exports.map(ex => ex.name!.escapedText)} } from '${FileUnderTest}'` : ""}

${namesToTest
  .map(
    exportingName => `
describe('${exportingName}', () => {

    ${`
    it('renders', () => {
        cy.mount(<${exportingName}>Click me!</${exportingName}>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    `}

});
`
  )
  .join("")}

/*
${JSON.stringify(statements, undefined, 3)}
*/

`;
    ///////////////////////////

    fs.writeFileSync(outputFilename, output);
  }
}

stampout(topFolder);

// modifiers.kind=93 export
// modifiers.kind=88 default
