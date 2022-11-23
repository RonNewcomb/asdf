"use strict";
// $ node crow
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const IAST_js_1 = require("./IAST.js");
const outputBaseDir = "./cypress/";
const topFolder = "./ast/";
const projectFolder = path_1.default.resolve();
console.log({ outputBaseDir, topFolder, projectFolder });
function isJsx(statement) {
    if (statement && statement.body && statement.body.statements) {
        const last = statement.body.statements[statement.body.statements.length - 1];
        if (last.kind == IAST_js_1.KINDS.returnExpression && last.expression.kind == IAST_js_1.KINDS.jsxExpression)
            return true;
        return last.kind === IAST_js_1.KINDS.returnExpression2 && last.expression.kind === IAST_js_1.KINDS.jsxExpression2;
    }
    else if (statement &&
        statement.declarationList &&
        statement.declarationList.declarations &&
        statement.declarationList.declarations.length === 1) {
        const last = statement.declarationList.declarations[0];
        return last.initializer.kind === IAST_js_1.KINDS.jsxExpression;
    }
    return false;
}
if (!fs_1.default.existsSync(outputBaseDir))
    fs_1.default.mkdirSync(outputBaseDir, { recursive: true });
function slim(obj) {
    if (Array.isArray(obj))
        return obj.map(slim);
    if (typeof obj !== "object")
        return obj;
    const retval = {};
    for (const key in obj)
        if (!["pos", "end", "flags", "modifierFlagsCache", "transformFlags"].includes(key)) {
            //if (key === "kind") retval.___ =   KindLabel[obj[key] ];
            retval[key] = slim(obj[key]);
        }
    return retval;
}
function processFile(filename) {
    console.log(filename);
    try {
        let astString = "";
        try {
            astString = fs_1.default.readFileSync(filename, "utf-8");
        }
        catch (e) {
            console.log(e);
            return;
        }
        const ast = JSON.parse(astString);
        const defaultExport = ast.statements.find(x => x.modifiers?.find(m => m.kind === IAST_js_1.KINDS.default));
        if (defaultExport && !defaultExport.name)
            defaultExport.name = {
                escapedText: path_1.default
                    .basename(filename)
                    .split(".")[0]
                    .toUpperCase()
                    .replace(/[^A-Z]/g, ""),
            };
        const exports = ast.statements.filter(x => x.modifiers?.find(m => m.kind === IAST_js_1.KINDS.export)).filter(mod => mod !== defaultExport);
        // console.log({ defaultExport, exports })
        // console.log(ast.statements.map(s => s.modifiers?.kind))
        const outputFilename = outputBaseDir + filename.replace(".json", ".tsx");
        fs_1.default.mkdirSync(path_1.default.dirname(outputFilename), { recursive: true });
        const FileUnderTest = ast.fileName
            .replace(".tsx", ".js")
            .replace(".ts", ".js")
            .replace(projectFolder + "/", "");
        const allExports = (defaultExport ? [defaultExport] : []).concat(exports);
        const allConcreteExports = allExports.filter(e => !e.isTypeOnly && ![IAST_js_1.KINDS.interfaceDeclaration].includes(e.kind));
        const allConcreteJsxExports = allConcreteExports.filter(isJsx);
        if (allConcreteJsxExports.length === 0 && allConcreteExports.length > 0)
            return console.log(allConcreteExports.length, "exports but no jsx components\n\r");
        const getName = (statement) => statement.name ? statement.name.escapedText : statement.declarationList.declarations[0].name.escapedText;
        // for each exported item,
        // pick "reasonable" inputs for it,
        // for each onXxxx handler,
        // for each async operation,
        // test "render with <inputs> [after <async op>] [on <handlername> <inputs>] [after <async op>]"
        ///////////////////////////
        const output = `
${defaultExport ? `import ${defaultExport.name.escapedText} from '${FileUnderTest}'` : ""}
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
                if (!propsObj)
                    return "";
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
        fs_1.default.writeFileSync(outputFilename, output);
    }
    catch (e) {
        console.log(e);
    }
}
function processFolder(folder) {
    //console.log(folder);
    const folderAndFileNames = fs_1.default.readdirSync(folder, { withFileTypes: true }) || [];
    for (const dirEntry of folderAndFileNames) {
        if (dirEntry.isDirectory())
            processFolder(path_1.default.join(folder, dirEntry.name));
        else
            processFile(path_1.default.join(folder, dirEntry.name));
    }
}
processFolder(topFolder);
function stringifyOneJsxProp(kv) {
    const [parameterName, anyValue] = kv;
    return parameterName + "={" + anyValue + "} ";
}
function stringifyJsxProps(kvs) {
    return kvs.map(stringifyOneJsxProp).join();
}
// returns [props,children]; children is not among the props
function formatPropsForJsx(samples) {
    if (!samples)
        return ["", ""];
    const [parameterName, anyValue] = samples;
    if (typeof anyValue !== "object")
        return [parameterName + "={" + anyValue + "} ", ""];
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
function flattenPossiblities(paramObj) {
    return paramObj.args.map(a => [paramObj.name, a]);
}
// jsx-agnostic /////////
function reasonableInputSequence(paramObj) {
    if (!paramObj)
        return { name: "", args: [] };
    console.log("paramname", paramObj.name.escapedText, !paramObj.name.escapedText ? JSON.stringify(paramObj) : "");
    const inputSequence = generateSampleArguments(paramObj.type);
    return { name: paramObj.name.escapedText, args: inputSequence };
}
function generateSampleArguments(type) {
    switch (type.kind) {
        case IAST_js_1.KINDS.string:
            return ["'sample string'", "other sample string"];
        case IAST_js_1.KINDS.number:
            return [68, 534];
        case IAST_js_1.KINDS.boolean:
            return [true];
        case IAST_js_1.KINDS.questionTokenMeaningOrUndefined: // TODO this is basically a type-union
            return [undefined];
        case IAST_js_1.KINDS.object: //180, // look for typeName
            return [{ address: type.typeName?.escapedText, wasAnObject: true }];
        case IAST_js_1.KINDS.interfaceGeneric: // 178
            if (type.typeName?.escapedText !== "PropsWithChildren")
                return [{ address: type.typeName?.escapedText, isViolationOfInterface: true }];
            if (!type.typeArguments)
                return [{ propsWithChildren: "no typeArguments", children: generateSampleArguments({ kind: IAST_js_1.KINDS.any }) }];
            if (!type.typeArguments.members)
                return [{ propsWithChildren: "no typeArguments.members", children: generateSampleArguments({ kind: IAST_js_1.KINDS.any }) }];
            const props = type.typeArguments.members.map(generateSampleArguments);
            return [{ children: generateSampleArguments({ kind: IAST_js_1.KINDS.any }), fromPropsWithChildren: true, ...props }];
        case IAST_js_1.KINDS.adhocInterface:
            return [{ members: type.members, type: "adhocInterface" }]; // ? look for .members on this .type
        case IAST_js_1.KINDS.any:
            return ["any type", 42, true, undefined, null, [6, 12, 7, "random array"], { random: "object" }];
        case IAST_js_1.KINDS.unknown:
            return [];
        case IAST_js_1.KINDS.typeUnion: //261, // x | y // look for .types array on this .type
            if (!type.types)
                return ["type.types null"];
            return type.types.map(generateSampleArguments).flat();
        case IAST_js_1.KINDS.typeIntersection: //190, // x & y // look for .types array on this .type
            if (!type.types)
                return ["type.types null"];
            return type.types.map(generateSampleArguments).flat();
        case IAST_js_1.KINDS.array: // 185, // look for elementType
            return [generateSampleArguments(type.elementType)];
        default:
            throw new Error("unknown kind for input type " + type.kind + ": " + JSON.stringify(type));
    }
}
