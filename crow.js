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
let formatPropsChildren = null;
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
        const FileUnderTest = `../${ast.fileName.replace(".tsx", ".js").replace(".ts", ".js")}`;
        const allExports = (defaultExport ? [defaultExport] : []).concat(exports);
        const allConcreteExports = allExports.filter(e => !e.isTypeOnly && ![IAST_js_1.KINDS.interfaceDeclaration].includes(e.kind));
        const allConcreteJsxExports = allConcreteExports.filter(isJsx);
        if (allConcreteJsxExports.length === 0 && allConcreteExports.length > 0)
            return console.log(allConcreteExports.length, "exports, none are jsx components\n\r");
        const getName = (statement) => statement.name ? statement.name.escapedText : statement.declarationList.declarations[0].name.escapedText;
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
${defaultExport ? `import ${defaultExport.name.escapedText} from '${FileUnderTest}'` : ""}
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


/*const ast: IStatement[] = ${ /*JSON.stringify(statements.map(slim), undefined, 3)*/[]};*/
`;
        ///////////////////////////
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
///////
function formatPropsForJsx(samples) {
    if (!samples)
        return "";
    const props = Array.isArray(samples[1]) ? samples[1] : [samples[1]];
    console.log("throwing away", samples[0], "keeping", JSON.stringify(props));
    formatPropsChildren = props.find(tuple => tuple[0] === "children");
    return props
        .filter(t => t !== formatPropsChildren)
        .map(tuple => tuple[0] + "={" + tuple[1] + "} ")
        .join("");
}
function reasonableInputs(parameters) {
    if (!parameters)
        return [];
    const params = Array.isArray(parameters) ? parameters : [parameters];
    return params.map(reasonableInput).filter(x => x !== null);
}
function reasonableInput(paramObj) {
    if (!paramObj)
        return null;
    const val = sample(paramObj.type);
    return val === null ? null : [paramObj.name.escapedText, sample(paramObj.type)];
}
function sample(x) {
    switch (x.kind) {
        case IAST_js_1.KINDS.string:
            return "'sample string'";
        case IAST_js_1.KINDS.number:
            return "6";
        case IAST_js_1.KINDS.boolean:
            return true;
        case IAST_js_1.KINDS.questionTokenMeaningOrUndefined:
            return undefined;
        case IAST_js_1.KINDS.object: //180, // look for typeName
        case IAST_js_1.KINDS.interfaceGeneric: // 178
            return "({ /* " + (x.typeName?.escapedText || "") + " */ })";
        case IAST_js_1.KINDS.any:
            return "{}";
        case IAST_js_1.KINDS.unknown:
            return null;
        case IAST_js_1.KINDS.typeUnion: //261, // x | y // look for .types array on this .type
            return "{" + x.types.map(sample).join(" ") + "}";
        case IAST_js_1.KINDS.typeIntersection: //190, // x & y // look for .types array on this .type
            return "{" + x.types.map(sample).join(" ") + "}";
        case IAST_js_1.KINDS.array: // 185, // look for elementType
            return "[" + sample(x.elementType) + "]";
        case IAST_js_1.KINDS.adhocInterface:
            return reasonableInputs(x.members); // ? look for .members on this .type
        default:
            throw new Error("unknown kind for input type " + x.kind + ": " + JSON.stringify(x));
    }
}
