"use strict";
// $ node crow.cjs
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const outputBaseDir = "./cypress/";
const alreadyDone = [];
const topFolder = "./ast/components/";
const modifiersKind = {
    string: 152,
    number: 148,
    boolean: 134,
    questionTokenMeaningOrUndefined: 57,
    object: 180,
    array: 185,
    default: 88,
    export: 93,
    endOfFileToken: 1,
    interfaceDeclaration: 261,
    function: 259,
    importStatement: 269,
    expressionOrFunctionCall: 241,
    jsxElement: 283,
    whitespace: 11,
    typeUnion: 261,
    typeIntersection: 190,
    adhocInterface: 184,
    any: 131,
    unknown: 157,
};
if (!fs_1.default.existsSync(outputBaseDir))
    fs_1.default.mkdirSync(outputBaseDir, { recursive: true });
function stampout(folder) {
    console.log(folder);
    const filenames = fs_1.default.readdirSync(folder) || [];
    for (const filename of filenames) {
        console.log(filename);
        const astString = fs_1.default.readFileSync(path_1.default.join(folder, filename), "utf-8");
        const ast = JSON.parse(astString);
        const statements = ast.statements.filter(s => !s.importClause);
        const defaultExport = ast.statements.find(x => x.modifiers?.find(m => m.kind === modifiersKind.default));
        if (defaultExport && !defaultExport.name)
            defaultExport.name = {
                escapedText: path_1.default
                    .basename(filename)
                    .split(".")[0]
                    .toUpperCase()
                    .replace(/[^A-Z]/g, ""),
            };
        const exports = ast.statements
            .filter(x => x.modifiers?.find(m => m.kind === modifiersKind.export))
            .filter(mod => mod !== defaultExport);
        // console.log({ defaultExport, exports })
        // console.log(ast.statements.map(s => s.modifiers?.kind))
        const outputFilename = outputBaseDir + filename.replace(".json", ".tsx");
        fs_1.default.mkdirSync(path_1.default.dirname(outputFilename), { recursive: true });
        console.log("-> " + outputFilename);
        console.log();
        const FileUnderTest = `../${ast.fileName.replace(".tsx", ".js")}`;
        const allExports = (defaultExport ? [defaultExport] : []).concat(exports);
        const allConcreteExports = allExports.filter(e => e.kind !== modifiersKind.interfaceDeclaration);
        const namesToTest = allExports.map(ex => ex.name.escapedText);
        console.log({ namesToTest });
        // for each exported item,
        // pick "reasonable" inputs for it,
        // for each onXxxx handler,
        // for each async operation,
        // test "render with <inputs> [after <async op>] [on <handlername> <inputs>] [after <async op>]"
        ///////////////////////////
        const output = `
${defaultExport ? `import ${defaultExport.name.escapedText} from '${FileUnderTest}'` : ""}
${exports && exports.length > 0 ? `import { ${exports.map(ex => ex.name.escapedText)} } from '${FileUnderTest}'` : ""}

${allConcreteExports
            .map(ex => `
describe('${ex.name.escapedText}', () => {

    ${`
    it('renders', () => {
        cy.mount(<${ex.name.escapedText} ${resonableInputs(ex.parameters)}>Click me!</${ex.name.escapedText}>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    `}

});
`)
            .join("")}

/*
${JSON.stringify(statements, undefined, 3)}
*/

`;
        ///////////////////////////
        fs_1.default.writeFileSync(outputFilename, output);
    }
}
stampout(topFolder);
///////
function resonableInputs(parameters) {
    if (!parameters)
        return "";
    const params = Array.isArray(parameters) ? parameters : [parameters];
    return params.map(reasonableInput).join(" ");
}
function reasonableInput(paramObj) {
    return paramObj.name.escapedText + "={" + sample(paramObj.type) + "}";
}
function sample(x) {
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
            return "{" + x.types.map(sample).join(" ") + "}";
        case modifiersKind.typeIntersection: //190, // x & y // look for .types array on this .type
            return "{" + x.types.map(sample).join(" ") + "}";
        case modifiersKind.array: // 185, // look for elementType
            return "[" + sample(x.elementType) + "]";
        // //interfaceDeclaration: 261, // .name .modifiers .members
        // //function: 259, // .name .modifiers .parameters .body
        // //importStatement: 269,
        // //expressionOrFunctionCall: 241, // .expression
        // case modifiersKind.jsxElement: 283,
        // case modifiersKind.typeUnion:261, // ?? look for .types on this .type
        case modifiersKind.adhocInterface:
            return resonableInputs(x.members); //?.map(member => "").join(" ") || ""; // ? look for .members on this .type
        default:
            throw new Error("unknown kind for input type " + x.kind + ": " + JSON.stringify(x));
    }
}
