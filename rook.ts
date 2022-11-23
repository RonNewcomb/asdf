// $ node rook src/components/app-start.tsx  src

import fs from "fs";
import path from "path";
import ts from "typescript"; // grab the global one
import type { ASTTree } from "./IAST.js";

const baseFolder = path.resolve();
const outputBaseDir = path.resolve("./ast/");
const alreadyDone: string[] = [];
const firstFile = path.resolve(process.argv[2]);
const topFolder = path.resolve(process.argv[3] || path.dirname(firstFile));
console.log({ topFolder, firstFile, outputBaseDir, baseFolder });

if (!fs.existsSync(firstFile)) throw Error("Pass the top-most .tsx file onto the command line");
if (!fs.existsSync(outputBaseDir)) fs.mkdirSync(outputBaseDir, { recursive: true });

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (_key: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return "[Circular]"; // JSON.stringify cannot deal with circular references
      seen.add(value);
    }
    return value;
  };
};

function pathIsIn(parent: string, dir: string) {
  const relative = path.relative(parent, dir);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

const slimseen = new WeakSet();
function slim(obj: any): any {
  if (Array.isArray(obj)) return obj.map(slim);
  if (typeof obj !== "object") return obj;
  if (obj === null) return null;
  if (slimseen.has(obj)) return "[Circular]";
  slimseen.add(obj);
  const retval: any = {};
  for (const key in obj)
    if (!["pos", "end", "flags", "modifierFlagsCache", "transformFlags"].includes(key)) {
      //if (key === "kind") retval.___ =   KindLabel[obj[key] ];
      retval[key] = slim(obj[key]);
    }
  return retval;
}

let count = 0;

////////
function hunt(filename: string) {
  // find filename and extension -- typescript is required
  filename = fs.existsSync(filename) ? filename : fs.existsSync(filename + ".tsx") ? filename + ".tsx" : filename + ".ts";
  console.log(filename);

  // read and parse
  const input = fs.readFileSync(filename, "utf-8");
  const outputObj = ts.createSourceFile(filename, input, ts.ScriptTarget.Latest) as unknown as ASTTree;

  // list the imports, find dependencies within working folder
  const inports = outputObj.statements.filter(each => each.moduleSpecifier);
  const dependencies = inports
    .map(each => each.moduleSpecifier!.text)
    .map(filename => {
      // imports are relative to the path of "filename", not relative to this script
      if (filename[0] === "/") return path.resolve(filename);
      if (filename[0] === ".") return path.resolve(filename);
      if (path.resolve(filename).startsWith(topFolder)) return path.resolve("./" + filename);
      return filename;
    });
  const outsideDependencies = dependencies.filter(dir => !pathIsIn(topFolder, dir) || ![".", "/"].includes(dir[0]));
  //  //console.log(inports);
  //console.log("  dependencies:", dependencies);
  //console.log("  outsideDependencies: ", outsideDependencies, "(ignored)");
  const newDependencies = dependencies.filter(filename => !alreadyDone.includes(filename) && !outsideDependencies.includes(filename));
  if (newDependencies.length) console.log(newDependencies);

  // output intermediate parsing to ast folder
  const output = JSON.stringify(slim(outputObj), getCircularReplacer(), 2);
  //console.log(output);

  alreadyDone.push(filename);
  count++;

  const outputFilename =
    outputBaseDir + filename.replace(baseFolder, "").replace(".js", ".json").replace(".tsx", ".json").replace(".ts", ".json"); // .js to .json // .tsx to .json
  fs.mkdirSync(path.dirname(outputFilename), { recursive: true });

  console.log("-> " + outputFilename);
  console.log("");

  fs.writeFileSync(outputFilename, output);

  newDependencies.forEach(hunt); // recurse into imports
}

hunt(firstFile);

console.log(count, "files processed");
console.log("node crow ");
