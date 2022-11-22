// $ node crow.cjs

import fs from "fs";
import path from "path";
import type { ASTTree, IName, IParameter, IType } from "./IAST.cjs";

const outputBaseDir = "./cypress/";
const alreadyDone: string[] = [];
const topFolder = "./ast/components/";

const modifiersKind = {
  string: 152,
  number: 148,
  boolean: 134,
  questionTokenMeaningOrUndefined: 57,
  object: 180, // look for typeName
  array: 185, // look for elementType
  default: 88,
  export: 93,
  endOfFileToken: 1,
  interfaceDeclaration: 261, // .name .modifiers .members
  function: 259, // .name .modifiers .parameters .body
  importStatement: 269,
  expressionOrFunctionCall: 241, // .expression
  jsxElement: 283,
  whitespace: 11,
  typeUnion: 261, // x | y // look for .types array on this .type
  typeIntersection: 190, // x & y // look for .types array on this .type
  adhocInterface: 184, // ? look for .members on this .type
  any: 131,
  unknown: 157,
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
    const allExports = (defaultExport ? [defaultExport] : []).concat(exports);
    const allConcreteExports = allExports.filter(e => e.kind !== modifiersKind.interfaceDeclaration);
    const namesToTest = allExports.map(ex => ex.name!.escapedText);
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

${allConcreteExports
  .map(
    ex => `
describe('${ex.name!.escapedText}', () => {

    ${`
    it('renders', () => {
        cy.mount(<${ex.name!.escapedText} ${resonableInputs(ex.parameters)}>Click me!</${ex.name!.escapedText}>)
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

///////

function resonableInputs(parameters?: IParameter[]): string {
  if (!parameters) return "";
  const params = Array.isArray(parameters) ? parameters : [parameters];
  return params.map(reasonableInput).join(" ");
}

function reasonableInput(paramObj: IParameter): string {
  return paramObj.name.escapedText + "={" + sample(paramObj.type) + "}";
}

function sample(x: IType): string {
  switch (x.kind) {
    case modifiersKind.string:
      return "'string'";
    case modifiersKind.number:
      return "6";
    case modifiersKind.boolean:
      return "true";
    case modifiersKind.questionTokenMeaningOrUndefined:
      return "undefined";
    case modifiersKind.object: //180, // look for typeName
      return "({ /* " + (x.typeName?.escapedText || "") + " */ })";
    case modifiersKind.any:
    case modifiersKind.unknown:
      return '"anythings!"';
    case modifiersKind.typeUnion: //261, // x | y // look for .types array on this .type
      return "{" + x.types!.map(sample).join(" ") + "}";
    case modifiersKind.typeIntersection: //190, // x & y // look for .types array on this .type
      return "{" + x.types!.map(sample).join(" ") + "}";
    case modifiersKind.array: // 185, // look for elementType
      return "[" + sample(x.elementType!) + "]";
    // //interfaceDeclaration: 261, // .name .modifiers .members
    // //function: 259, // .name .modifiers .parameters .body
    // //importStatement: 269,
    // //expressionOrFunctionCall: 241, // .expression
    // case modifiersKind.jsxElement: 283,
    // case modifiersKind.typeUnion:261, // ?? look for .types on this .type
    case modifiersKind.adhocInterface:
      return resonableInputs(x.members as IParameter[]); //?.map(member => "").join(" ") || ""; // ? look for .members on this .type
    default:
      throw new Error("unknown kind for input type " + x.kind + ": " + JSON.stringify(x));
  }
}
