"use strict";
// $ node crow.cjs
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const outputBaseDir = "./cypress/";
const topFolder = "./ast/components/";
const KINDS = {
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
    jsxElement1: 283,
    whitespace: 11,
    typeUnion: 261,
    typeIntersection: 190,
    adhocInterface: 184,
    any: 131,
    unknown: 157,
    functionBody: 238,
    plainText: 11,
    initializer: 291,
    property: 288,
    jsxAttribute: 289,
    jsxElement2: 284,
    jsxArgument: 281,
    returnExpression: 250,
    jsxExpression: 214,
    destructuredObject: 203,
};
function isJsx(statement) {
    if (!statement || !statement.body)
        return false;
    const last = statement.body.statements[statement.body.statements.length - 1];
    return last.kind == KINDS.returnExpression && last.expression.kind == KINDS.jsxExpression;
}
let formatPropsChildren = null;
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
        const defaultExport = ast.statements.find(x => x.modifiers?.find(m => m.kind === KINDS.default));
        if (defaultExport && !defaultExport.name)
            defaultExport.name = {
                escapedText: path_1.default
                    .basename(filename)
                    .split(".")[0]
                    .toUpperCase()
                    .replace(/[^A-Z]/g, ""),
            };
        const exports = ast.statements.filter(x => x.modifiers?.find(m => m.kind === KINDS.export)).filter(mod => mod !== defaultExport);
        // console.log({ defaultExport, exports })
        // console.log(ast.statements.map(s => s.modifiers?.kind))
        const outputFilename = outputBaseDir + filename.replace(".json", ".tsx");
        fs_1.default.mkdirSync(path_1.default.dirname(outputFilename), { recursive: true });
        console.log("-> " + outputFilename);
        console.log();
        const FileUnderTest = `../${ast.fileName.replace(".tsx", ".js")}`;
        const allExports = (defaultExport ? [defaultExport] : []).concat(exports);
        const allConcreteExports = allExports.filter(e => e.kind !== KINDS.interfaceDeclaration);
        const allConcreteJsxExports = allConcreteExports.filter(isJsx);
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

${allConcreteJsxExports
            .map(ex => {
            formatPropsChildren = "";
            const propsObj = reasonableInput(ex.parameters?.[0]);
            const props = formatPropsForJsx(propsObj);
            return `
describe('${ex.name.escapedText}', () => {

    ${`
    it('renders', () => {
        cy.mount(
          <${ex.name.escapedText} ${props}>
            ${formatPropsChildren ? formatPropsChildren[1] : ""}
          </${ex.name.escapedText}>)
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
        fs_1.default.writeFileSync(outputFilename, output);
    }
}
stampout(topFolder);
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
            return "{" + x.types.map(sample).join(" ") + "}";
        case KINDS.typeIntersection: //190, // x & y // look for .types array on this .type
            return "{" + x.types.map(sample).join(" ") + "}";
        case KINDS.array: // 185, // look for elementType
            return "[" + sample(x.elementType) + "]";
        case KINDS.adhocInterface:
            return reasonableInputs(x.members); // ? look for .members on this .type
        default:
            throw new Error("unknown kind for input type " + x.kind + ": " + JSON.stringify(x));
    }
}
