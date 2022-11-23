"use strict";
// $ node rook src/components/app-start.tsx  src
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typescript_1 = __importDefault(require("typescript")); // grab the global one
const outputBaseDir = path_1.default.resolve("./ast/");
const alreadyDone = [];
const firstFile = path_1.default.resolve(process.argv[2]);
const topFolder = path_1.default.resolve(process.argv[3] || path_1.default.dirname(firstFile));
console.log({ topFolder, firstFile, outputBaseDir });
if (!fs_1.default.existsSync(firstFile))
    throw Error("Pass the top-most .tsx file onto the command line");
if (!fs_1.default.existsSync(outputBaseDir))
    fs_1.default.mkdirSync(outputBaseDir, { recursive: true });
const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (_key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value))
                return "[Circular]"; // JSON.stringify cannot deal with circular references
            seen.add(value);
        }
        return value;
    };
};
function pathIsIn(parent, dir) {
    const relative = path_1.default.relative(parent, dir);
    return relative && !relative.startsWith("..") && !path_1.default.isAbsolute(relative);
}
////////
function hunt(filename) {
    console.log(filename);
    filename = fs_1.default.existsSync(filename) ? filename : fs_1.default.existsSync(filename + ".tsx") ? filename + ".tsx" : filename + ".ts";
    const input = fs_1.default.readFileSync(filename, "utf-8");
    //console.log( input )
    const output1 = typescript_1.default.createSourceFile(filename, input, typescript_1.default.ScriptTarget.Latest);
    //console.log({ output1 });
    // imports are relative to the path of "filename", not relative to rook
    const inports = output1.statements.filter(each => each.moduleSpecifier);
    const dependencies = inports
        .map(each => each.moduleSpecifier.text)
        .map(filename => {
        if (filename[0] === "/")
            return path_1.default.resolve(filename);
        if (filename[0] === ".")
            return path_1.default.resolve(filename);
        if (path_1.default.resolve(filename).startsWith(topFolder))
            return path_1.default.resolve("./" + filename);
        return filename;
    });
    const outsideDependencies = dependencies.filter(dir => !pathIsIn(topFolder, dir) || ![".", "/"].includes(dir[0]));
    //outsideDependencies.forEach(d => alreadyDone.push(d));
    //  console.log(inports);
    console.log("  dependencies:", dependencies);
    console.log("  outsideDependencies: ", outsideDependencies, "(ignored)");
    const newDependencies = dependencies.filter(filename => !alreadyDone.includes(filename) && !outsideDependencies.includes(filename));
    // .map(filename => {
    //   const ext = path.extname(filename);
    //   if (ext) filename.replace(ext, ".tsx");
    //   else filename += ".tsx";
    //   return filename;
    // });
    if (newDependencies.length)
        console.log(newDependencies);
    const output = JSON.stringify(output1, getCircularReplacer(), 2);
    //console.log(output);
    alreadyDone.push(filename);
    const outputFilename = outputBaseDir + filename.replace(".js", ".json").replace(".tsx", ".json").replace(".ts", ".json"); // .js to .json // .tsx to .json
    fs_1.default.mkdirSync(path_1.default.dirname(outputFilename), { recursive: true });
    console.log("-> " + outputFilename);
    console.log("");
    fs_1.default.writeFileSync(outputFilename, output);
    newDependencies.forEach(hunt); // recurse into imoprts
}
hunt(firstFile);
console.log("node crow " + outputBaseDir);