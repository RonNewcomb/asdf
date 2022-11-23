// $ node rook.cjs components/app-start.tsx

import fs from "fs";
import path from "path";
import ts from "typescript"; // grab the global one
import type { ASTTree } from "./IAST.cjs";

const outputBaseDir = "./ast/";
const alreadyDone: string[] = [];
const firstFile = process.argv[2];
const topFolder = path.dirname(firstFile);

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

function hunt(filename: string) {
  console.log(filename);
  const inputFilePath = path.dirname(filename);
  const input = fs.readFileSync(filename, "utf-8");
  //console.log( input )

  const output1 = ts.createSourceFile(filename, input, ts.ScriptTarget.Latest) as unknown as ASTTree;
  //console.log({ output1 });

  // imports are relative to the path of "filename", not relative to rook
  const inports = output1.statements.filter(each => each.moduleSpecifier);
  const dependencies = inports.map(each => each.moduleSpecifier!.text).map(filename => path.join(inputFilePath, filename));
  const outsideDependencies = dependencies.filter(dir => !pathIsIn(topFolder, dir) || ![".", "/"].includes(dir[0]));
  //outsideDependencies.forEach(d => alreadyDone.push(d));

  // console.log(inports);
  // console.log("  dependencies:", dependencies);
  // console.log("  outsideDependencies: ", outsideDependencies, "(ignored)");

  const newDependencies = dependencies.filter(filename => !alreadyDone.includes(filename) && !outsideDependencies.includes(filename));
  if (newDependencies.length) console.log(newDependencies);

  const output = JSON.stringify(output1, getCircularReplacer(), 2);
  //console.log(output);

  alreadyDone.push(filename);

  const outputFilename = outputBaseDir + filename.replace(".js", ".json").replace(".tsx", ".json").replace(".ts", ".json"); // .js to .json // .tsx to .json
  fs.mkdirSync(path.dirname(outputFilename), { recursive: true });

  console.log("-> " + outputFilename);
  console.log("");

  fs.writeFileSync(outputFilename, output);

  newDependencies.forEach(filename => hunt(filename.replace(".js", ".tsx"))); // recurse into imoprts
}

hunt(firstFile);

console.log("node crow.cjs " + outputBaseDir);
