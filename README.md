# Typescript, JSX, and Hooks

I like the idea of a web component being a function that transforms JSON into HTML, click handlers and all, but like most everyone else I don't like how complicated and _heavy_ front-end development has become.

What's the minimal work to get a UI framework with typescript, jsx, and closures-as-components going?

In tsconfig.json, setting `jsx: "react", jsxFactory: "jsx"` turns on jsx/tsx and transforms it to a call to function `jsx(nameOrFn: string | CompFn, props: IProps, ...children: any[])` which we provide and can do whatever with.

Typescript has a newer jsx config options which auto-inserts an `import {jsx} from "your/config/value"` but that is either a bareword import or it's a `./etc/` relative path that's not fixed up per different folder levels.

Bare-word imports like `import $ from 'jquery'` cannot seem to be affected at all, unless you were to drop ES modules entirely and then create/solve the `require()`-is-synchronous issue. (Or go weird with AMD/UMD/SystemJS I suppose.)

Imports also need the `.js` extension added everywhere, which the tsconfig.json option `moduleResolution: "node16"` is supposed to help with. You could insert `.` as a mimetype of application/javascript but it's inelegant, especially as typescript/node are moving towards using the extension to be ESM compliant.

NodeJS is not used in this project, and since this project can't use bareword imports, meaning the web browser will refuse them, the project can't import npm packages anyway.

Typescript has a path-mapping option but it doesn't affect the emitted output in any way. It affects IDE errors.

### To use

Run `tsc` from a DOS prompt. (Powershell won't work.) It's probably installed locally. Needs to be version 4.1 at the very least, but 4.9 is more likely.

If not, `npm i typescript --global`

Point IIS to this folder and http://localhost/asdf/test.html

### To-do

State that persists between renders for each closure is weirdly difficult.

The hooks defined in here don't work and maybe can't work, since I thought late-bound `this` was a thing.

innerHTML as a prop isn't supported.

Unlike uif and 2if we don't code up loading html 5 custom tags. The component rendering is purely just functions.
