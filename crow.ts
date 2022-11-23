// $ node crow

import fs from "fs";
import path from "path";
import { ASTTree, Common, IName, IParameter, IStatement, IType, KINDS } from "./IAST.js";

const outputBaseDir = "./cypress/";
const topFolder = "./ast/";
const projectFolder = path.resolve();
console.log({ outputBaseDir, topFolder, projectFolder });

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

    const FileUnderTest = ast.fileName
      .replace(".tsx", ".js")
      .replace(".ts", ".js")
      .replace(projectFolder + "/", "");
    const allExports = (defaultExport ? [defaultExport] : []).concat(exports);
    const allConcreteExports = allExports.filter(e => !e.isTypeOnly && ![KINDS.interfaceDeclaration].includes(e.kind));
    const allConcreteJsxExports = allConcreteExports.filter(isJsx);

    if (allConcreteJsxExports.length === 0 && allConcreteExports.length > 0)
      return console.log(allConcreteExports.length, "exports but no jsx components\n\r");

    const getName = (statement: IStatement): string =>
      statement.name ? statement.name.escapedText : statement.declarationList!.declarations![0].name!.escapedText;

    // for each exported item,
    // pick "reasonable" inputs for it,
    // for each onXxxx handler,
    // for each async operation,
    // test "render with <inputs> [after <async op>] [on <handlername> <inputs>] [after <async op>]"

    ///////////////////////////
    const output = `
${defaultExport ? `import ${defaultExport.name!.escapedText} from '${FileUnderTest}'` : ""}
${exports && exports.length > 0 ? `import { ${exports.map(getName)} } from '${FileUnderTest}'` : ""}

${allConcreteJsxExports
  .map(ex => {
    const nameUnderTest = getName(ex);
    const argsForOneParam = reasonableInputSequence(ex.parameters?.[0]);
    const sequenceOfProps = flattenPossiblities(argsForOneParam);
    console.log({ argsForOneParam: JSON.stringify(argsForOneParam), sequenceOfProps: JSON.stringify(sequenceOfProps) });
    return `
describe('${nameUnderTest}', () => {

  ${sequenceOfProps.map(propsObj => {
    if (!propsObj) return "";
    const [props, childs] = formatPropsForJsx(propsObj);
    return `
  it('renders', () => {
      cy.mount(<${nameUnderTest} ${props}>${childs}</${nameUnderTest}>)
      cy.get('button').should('contains.text', 'Click me!')
  });
    `;
  })} 

});`;
  })
  .join("")}
`;
    /////////////////////////// /*const ast: IStatement[] = ${/*JSON.stringify(statements.map(slim), undefined, 3)*/ []};*/

    console.log("-> " + outputFilename);
    console.log();
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

/////// sample inputs generator /////////////

type JsxPropsAndChildsStrings = [string, string];
type ParameterNameAndArgumentValue = [string, AnyArgument];
type AnyArgument = any;
type ParameterNameAndPossibleArguments = { name: string; args: AnyArgument[] };

function stringifyOneJsxProp(kv: ParameterNameAndArgumentValue): string {
  const [parameterName, anyValue] = kv;
  return parameterName + "={" + anyValue + "} ";
}

function stringifyJsxProps(kvs: ParameterNameAndArgumentValue[]): string {
  return kvs.map(stringifyOneJsxProp).join();
}

// returns [props,children]; children is not among the props
function formatPropsForJsx(samples: ParameterNameAndArgumentValue): JsxPropsAndChildsStrings {
  if (!samples) return ["", ""];
  const [parameterName, anyValue] = samples;
  if (typeof anyValue !== "object") return [parameterName + "={" + anyValue + "} ", ""];
  const props = Array.isArray(anyValue) ? anyValue : [anyValue];
  console.log("throwing away", samples[0], "keeping", JSON.stringify(props));
  const formatPropsChildren = props.find(tuple => tuple[0] === "children");
  return [
    props
      .filter(t => t !== formatPropsChildren)
      .map(tuple => tuple[0] + "={" + tuple[1] + "} ")
      .join(""),
    formatPropsChildren || "",
  ];
}

function flattenPossiblities(paramObj: ParameterNameAndPossibleArguments): ParameterNameAndArgumentValue[] {
  return paramObj.args.map(a => [paramObj.name, a]);
}

// jsx-agnostic /////////

function reasonableInputSequence(paramObj?: IParameter): ParameterNameAndPossibleArguments {
  if (!paramObj) return { name: "", args: [] };
  console.log("paramname", paramObj.name.escapedText, !paramObj.name.escapedText ? JSON.stringify(paramObj) : "");
  const inputSequence = generateSampleArguments(paramObj.type);
  return { name: paramObj.name.escapedText, args: inputSequence };
}

function generateSampleArguments(type: IType): AnyArgument[] {
  switch (type.kind) {
    case KINDS.string:
      return ["'sample string'", "other sample string"];
    case KINDS.number:
      return [68, 534];
    case KINDS.boolean:
      return [true];
    case KINDS.questionTokenMeaningOrUndefined: // TODO this is basically a type-union
      return [undefined];
    case KINDS.object: //180, // look for typeName
      return [{ address: type.typeName?.escapedText, wasAnObject: true }];
    case KINDS.interfaceGeneric: // 178
      if (type.typeName?.escapedText !== "PropsWithChildren")
        return [{ address: type.typeName?.escapedText, isViolationOfInterface: true }];
      if (!type.typeArguments) return [{ propsWithChildren: "no typeArguments", children: generateSampleArguments({ kind: KINDS.any }) }];
      if (!type.typeArguments.members)
        return [{ propsWithChildren: "no typeArguments.members", children: generateSampleArguments({ kind: KINDS.any }) }];
      const props = type.typeArguments.members.map(generateSampleArguments);
      return [{ children: generateSampleArguments({ kind: KINDS.any }), fromPropsWithChildren: true, ...props }];
    case KINDS.adhocInterface:
      return [{ members: type.members, type: "adhocInterface" }]; // ? look for .members on this .type
    case KINDS.any:
      return ["any type", 42, true, undefined, null, [6, 12, 7, "random array"], { random: "object" }];
    case KINDS.unknown:
      return [];
    case KINDS.typeUnion: //261, // x | y // look for .types array on this .type
      if (!type.types) return ["type.types null"];
      return type.types.map(generateSampleArguments).flat();
    case KINDS.typeIntersection: //190, // x & y // look for .types array on this .type
      if (!type.types) return ["type.types null"];
      return type.types.map(generateSampleArguments).flat();
    case KINDS.array: // 185, // look for elementType
      return [generateSampleArguments(type.elementType!)];
    default:
      throw new Error("unknown kind for input type " + type.kind + ": " + JSON.stringify(type));
  }
}
