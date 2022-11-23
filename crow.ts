// $ node crow

import fs from "fs";
import path from "path";
import { ASTTree, Common, IName, IParameter, IStatement, IType, KINDS } from "./IAST.js";

const outputBaseDir = "./cypress/";
const topFolder = "./ast/";

function isJsx(statement: IStatement): boolean {
  if (statement && statement.body && statement.body.statements) {
    const last = statement.body.statements[statement.body.statements.length - 1];
    if (last.kind == KINDS.returnExpression && last.expression.kind == KINDS.jsxExpression) return true;
    return last.kind === KINDS.returnExpression2 && last.expression.kind === KINDS.jsxExpression2;
  } else if (
    statement &&
    statement.declarationList &&
    statement.declarationList.declarations &&
    statement.declarationList.declarations.length === 1
  ) {
    const last = statement.declarationList.declarations[0];
    return last.initializer.kind === KINDS.jsxExpression;
  }
  return false;
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

function processFile(filename: string) {
  console.log(filename);
  try {
    let astString = "";
    try {
      astString = fs.readFileSync(filename, "utf-8");
    } catch (e) {
      console.log(e);
      return;
    }
    const ast = JSON.parse(astString) as ASTTree;

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

    const FileUnderTest = `../${ast.fileName.replace(".tsx", ".js").replace(".ts", ".js")}`;
    const allExports = (defaultExport ? [defaultExport] : []).concat(exports);
    const allConcreteExports = allExports.filter(e => !e.isTypeOnly && ![KINDS.interfaceDeclaration].includes(e.kind));
    const allConcreteJsxExports = allConcreteExports.filter(isJsx);

    if (allConcreteJsxExports.length === 0 && allConcreteExports.length > 0)
      return console.log(allConcreteExports.length, "exports, none are jsx components\n\r");

    const getName = (statement: IStatement): string =>
      statement.name ? statement.name.escapedText : statement.declarationList!.declarations![0].name!.escapedText;

    // for each exported item,
    // pick "reasonable" inputs for it,
    // for each onXxxx handler,
    // for each async operation,
    // test "render with <inputs> [after <async op>] [on <handlername> <inputs>] [after <async op>]"

    console.log("-> " + outputFilename);
    console.log();

    ///////////////////////////
    const output = `
//import type { IStatement } from "../IAST.js";
${defaultExport ? `import ${defaultExport.name!.escapedText} from '${FileUnderTest}'` : ""}
${exports && exports.length > 0 ? `import { ${exports.map(getName)} } from '${FileUnderTest}'` : ""}

${allConcreteJsxExports
  .map(ex => {
    const nameUnderTest = getName(ex);
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


/*const ast: IStatement[] = ${/*JSON.stringify(statements.map(slim), undefined, 3)*/ []};*/
`;
    ///////////////////////////

    fs.writeFileSync(outputFilename, output);
  } catch (e) {
    console.log(e);
  }
}

function processFolder(folder: string) {
  //console.log(folder);
  const folderAndFileNames = fs.readdirSync(folder, { withFileTypes: true }) || [];
  for (const dirEntry of folderAndFileNames) {
    if (dirEntry.isDirectory()) processFolder(path.join(folder, dirEntry.name));
    else processFile(path.join(folder, dirEntry.name));
  }
}

processFolder(topFolder);

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
    case KINDS.interfaceGeneric: // 178
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
