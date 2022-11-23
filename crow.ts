// $ node crow

import fs from "fs";
import path from "path";
import { ASTTree, Common, IName, IParameter, IStatement, IType, KINDS } from "./IAST.js";

const outputBaseDir = "./cypress/";
const topFolder = "./ast/components/";

function isJsx(statement: IStatement): boolean {
  if (!statement || !statement.body || !statement.body.statements) return false;
  const last = statement.body.statements[statement.body.statements.length - 1];
  return last.kind == KINDS.returnExpression && last.expression.kind == KINDS.jsxExpression;
}

let formatPropsChildren: [string, any] | null | undefined | "" = null;

if (!fs.existsSync(outputBaseDir)) fs.mkdirSync(outputBaseDir, { recursive: true });

function slim(obj: any & Common): any {
  if (Array.isArray(obj)) return obj.map(slim);
  if (typeof obj !== "object") return obj;
  const retval: any = {};
  for (const key in obj)
    if (!["pos", "end", "flags", "modifierFlagsCache", "transformFlags"].includes(key)) {
      //if (key === "kind") retval.___ =   KindLabel[obj[key] ];
      retval[key] = slim(obj[key]);
    }
  return retval;
}

function stampout(folder: string) {
  console.log(folder);

  const filenames = fs.readdirSync(folder) || [];

  for (const filename of filenames) {
    console.log(filename);
    const astString = fs.readFileSync(path.join(folder, filename), "utf-8");
    const ast = JSON.parse(astString) as ASTTree;
    const statements = ast.statements.filter(s => !s.importClause);

    const defaultExport = ast.statements.find(x => x.modifiers?.find(m => m.kind === KINDS.default));
    if (defaultExport && !defaultExport.name)
      defaultExport.name = {
        escapedText: path
          .basename(filename)
          .split(".")[0]
          .toUpperCase()
          .replace(/[^A-Z]/g, ""),
      } as IName;
    const exports = ast.statements.filter(x => x.modifiers?.find(m => m.kind === KINDS.export)).filter(mod => mod !== defaultExport);
    // console.log({ defaultExport, exports })
    // console.log(ast.statements.map(s => s.modifiers?.kind))

    const outputFilename = outputBaseDir + filename.replace(".json", ".tsx");
    fs.mkdirSync(path.dirname(outputFilename), { recursive: true });

    console.log("-> " + outputFilename);
    console.log();

    const FileUnderTest = `../${ast.fileName.replace(".tsx", ".js")}`;
    const allExports = (defaultExport ? [defaultExport] : []).concat(exports);
    const allConcreteExports = allExports.filter(e => e.kind !== KINDS.interfaceDeclaration);
    const allConcreteJsxExports = allConcreteExports.filter(isJsx);
    const namesToTest = allExports.map(ex => ex.name!.escapedText);
    console.log({ namesToTest });

    // for each exported item,
    // pick "reasonable" inputs for it,
    // for each onXxxx handler,
    // for each async operation,
    // test "render with <inputs> [after <async op>] [on <handlername> <inputs>] [after <async op>]"

    ///////////////////////////
    const output = `
import type { IStatement } from "../IAST.js";
${defaultExport ? `import ${defaultExport.name!.escapedText} from '${FileUnderTest}'` : ""}
${exports && exports.length > 0 ? `import { ${exports.map(ex => ex.name!.escapedText)} } from '${FileUnderTest}'` : ""}

${allConcreteJsxExports
  .map(ex => {
    const nameUnderTest = ex.name!.escapedText;
    formatPropsChildren = "";
    const propsObj = reasonableInput(ex.parameters?.[0]);
    const props = formatPropsForJsx(propsObj);
    return `
describe('${nameUnderTest}', () => {

    ${`
    it('renders', () => {
        cy.mount(
          <${nameUnderTest} ${props}>${formatPropsChildren ? formatPropsChildren[1] : ""}</${nameUnderTest}>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    `}

});
`;
  })
  .join("")}


const ast: IStatement[] = ${JSON.stringify(statements.map(slim), undefined, 3)};
`;
    ///////////////////////////

    fs.writeFileSync(outputFilename, output);
  }
}

stampout(topFolder);

///////

function formatPropsForJsx(samples: null | [string, any][]): string {
  if (!samples) return "";
  const props = Array.isArray(samples[1]) ? samples[1] : [samples[1]];
  console.log("throwing away", samples[0], "keeping", JSON.stringify(props));
  formatPropsChildren = props.find(tuple => tuple[0] === "children");
  return props
    .filter(t => t !== formatPropsChildren)
    .map(tuple => tuple[0] + "={" + tuple[1] + "} ")
    .join("");
}

function reasonableInputs(parameters?: IParameter[]): [string, any][] {
  if (!parameters) return [];
  const params = Array.isArray(parameters) ? parameters : [parameters];
  return params.map(reasonableInput).filter(x => x !== null) as [string, any][];
}

function reasonableInput(paramObj?: IParameter): [string, any] | null {
  if (!paramObj) return null;
  const val = sample(paramObj.type);
  return val === null ? null : [paramObj.name.escapedText, sample(paramObj.type)];
}

function sample(x: IType): any {
  switch (x.kind) {
    case KINDS.string:
      return "'sample string'";
    case KINDS.number:
      return "6";
    case KINDS.boolean:
      return true;
    case KINDS.questionTokenMeaningOrUndefined:
      return undefined;
    case KINDS.object: //180, // look for typeName
      return "({ /* " + (x.typeName?.escapedText || "") + " */ })";
    case KINDS.any:
      return "{}";
    case KINDS.unknown:
      return null;
    case KINDS.typeUnion: //261, // x | y // look for .types array on this .type
      return "{" + x.types!.map(sample).join(" ") + "}";
    case KINDS.typeIntersection: //190, // x & y // look for .types array on this .type
      return "{" + x.types!.map(sample).join(" ") + "}";
    case KINDS.array: // 185, // look for elementType
      return "[" + sample(x.elementType!) + "]";
    case KINDS.adhocInterface:
      return reasonableInputs(x.members as IParameter[]); // ? look for .members on this .type
    default:
      throw new Error("unknown kind for input type " + x.kind + ": " + JSON.stringify(x));
  }
}
