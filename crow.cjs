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
    default: 88,
    export: 93,
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
        const defaultExportUnderTest = defaultExport?.name?.escapedText;
        const namesToTest = (defaultExport ? [defaultExport.name.escapedText] : []).concat(exports.map(ex => ex.name.escapedText));
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

${namesToTest
            .map(exportingName => `
describe('${exportingName}', () => {

    ${`
    it('renders', () => {
        cy.mount(<${exportingName}>Click me!</${exportingName}>)
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
// modifiers.kind=93 export
// modifiers.kind=88 default
