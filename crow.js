const fs = require("fs");
const path = require("path");

const outputBaseDir = "./cypress/";
const alreadyDone = []; // string[]
const topFolder = "./ast/components/";


const modifiersKind = {
    "default": 88,
    "export": 93,
}


if (!fs.existsSync(outputBaseDir)) fs.mkdirSync(outputBaseDir, { recursive: true });

function stampout(folder) {
    console.log(folder);

    const filenames = fs.readdirSync(folder) || [];

    for (const filename of filenames) {
        console.log(filename);
        const astString = fs.readFileSync(path.join(folder, filename), "utf-8");
        const ast = JSON.parse(astString);
        const statements = ast.statements.filter(s => !s.importClause);

        const defaultExport = ast.statements.find(x => x.modifiers?.find(m => m.kind === modifiersKind.default));
        if (defaultExport && !defaultExport.name) defaultExport.name = { escapedText: path.basename(filename).split('.')[0].toUpperCase().replace(/[^A-Z]/g, '') };
        const exports = ast.statements.filter(x => x.modifiers?.find(m => m.kind === modifiersKind.export)).filter(mod => mod !== defaultExport);
        // console.log({ defaultExport, exports })
        // console.log(ast.statements.map(s => s.modifiers?.kind))

        const namesToTest = (defaultExport ? [defaultExport.name.escapedText] : []).concat(exports.map(ex => ex.name.escapedText));
        console.log({ namesToTest })

        const outputFilename = outputBaseDir + filename.replace(".json", ".tsx");
        fs.mkdirSync(path.dirname(outputFilename), { recursive: true });

        console.log("-> " + outputFilename);
        console.log();

        const output = `
${defaultExport ? `import ${defaultExport.name.escapedText} from '../${ast.fileName.replace('.tsx', '.js')}'` : ''}
${exports && exports.length > 0 ? `import { ${exports.map(ex => ex.name.escapedText)} } from '../${ast.fileName.replace('.tsx', '.js')}'` : ""}

${namesToTest.map(exportingName => `
describe('${exportingName}', () => {

    ${`
    it('uses custom text for the button label', () => {
        cy.mount(<${exportingName}>Click me!</${exportingName}>)
        cy.get('button').should('contains.text', 'Click me!')
    });
    `}

});
`).join('')}

/*
${JSON.stringify(statements, undefined, 3)}
*/

`;
        fs.writeFileSync(outputFilename, output);

    }
}

stampout(topFolder);

// modifiers.kind=93 export
// modifiers.kind=88 default