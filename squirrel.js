const acorn = require("acorn");
const fs = require("fs");
const path = require("path");

const outputBaseDir = "./ast/";
const alreadyDone = []; // string[]

if (!fs.existsSync(outputBaseDir)) fs.mkdirSync(outputBaseDir, { recursive: true });

function hunt(filename) {
  console.log(filename);
  const inputFilePath = path.dirname(filename);

  const input = fs.readFileSync(filename, "utf-8");
  //console.log( input )

  const output1 = acorn.parse(input, { ecmaVersion: 2020, sourceType: "module" });

  // imports are relative to the path of "filename", not relative to squirrel.
  const inports = output1.body.filter(each => each.type === "ImportDeclaration");
  const dependencies = inports.map(each => each.source.value).map(filename => path.join(inputFilePath, filename));

  const newDependencies = dependencies.filter(filename => !alreadyDone.includes(filename));
  //  console.log(inports);
  console.log("  dependencies:", dependencies);
  console.log("  newDependencies: ", newDependencies);

  const output = JSON.stringify(output1, undefined, 2);
  //console.log(output);

  alreadyDone.push(filename);

  const outputFilename = outputBaseDir + filename + "on"; // .js to .json
  fs.mkdirSync(path.dirname(outputFilename), { recursive: true });

  console.log("-> " + outputFilename);
  console.log("");

  fs.writeFileSync(outputFilename, output);

  newDependencies.forEach(hunt);
}

hunt(process.argv[2]);

// COMMAND LINE
//   ~/asdf$ ./node_modules/acorn/bin/acorn  ./components/looper.js  --module  > looper.ast.json
// Since Acorn 8.0.0, options.ecmaVersion is required.
// Defaulting to 2020, but this will stop working in the future.
