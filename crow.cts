// $ node crow.cjs

import fs from "fs";
import path from "path";
import type { ASTTree, IName, IParameter, IStatement, IType } from "./IAST.cjs";

const outputBaseDir = "./cypress/";
const topFolder = "./ast/components/";

const KINDS = {
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
  jsxElement1: 283,
  whitespace: 11,
  typeUnion: 261, // x | y // look for .types array on this .type
  typeIntersection: 190, // x & y // look for .types array on this .type
  adhocInterface: 184, // ? look for .members on this .type
  any: 131,
  unknown: 157,
  functionBody: 238, //?
  plainText: 11,
  initializer: 291,
  property: 288,
  jsxAttribute: 289,
  jsxElement2: 284,
  jsxArgument: 281,
  returnExpression: 250, // expression...
  jsxExpression: 214,
  destructuredObject: 203,
};

function isJsx(statement: IStatement): boolean {
  if (!statement || !statement.body) return false;
  const last = statement.body.statements[statement.body.statements.length - 1];
  return last.kind == KINDS.returnExpression && last.expression.kind == KINDS.jsxExpression;
}
let formatPropsChildren: [string, any] | null | undefined | "" = null;

if (!fs.existsSync(outputBaseDir)) fs.mkdirSync(outputBaseDir, { recursive: true });

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
${defaultExport ? `import ${defaultExport.name!.escapedText} from '${FileUnderTest}'` : ""}
${exports && exports.length > 0 ? `import { ${exports.map(ex => ex.name!.escapedText)} } from '${FileUnderTest}'` : ""}

${allConcreteJsxExports
  .map(ex => {
    formatPropsChildren = "";
    const propsObj = reasonableInput(ex.parameters?.[0]);
    const props = formatPropsForJsx(propsObj);
    return `
describe('${ex.name!.escapedText}', () => {

    ${`
    it('renders', () => {
        cy.mount(
          <${ex.name!.escapedText} ${props}>
            ${formatPropsChildren ? formatPropsChildren[1] : ""}
          </${ex.name!.escapedText}>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    `}

});
`;
  })
  .join("")}

/*
${JSON.stringify(statements, undefined, 3)}
*/`;
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
