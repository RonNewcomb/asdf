// interfaces

export interface DiffReport {}

export interface ShortDiff {
  <T>(nestedThing1: T, nestedThing2: T): Promise<DiffReport | null>;
}

export interface InputsToTestCase {
  diff: ShortDiff;
  id: string;
  container: HTMLDivElement;
  name: string;
  fail: (msg?: string) => void;
}

export interface TestCaseFn {
  (pkg: InputsToTestCase): void | Promise<void>;
}

export interface TestCaseSettings {
  useIframe?: boolean;
  test: (this: TestCaseSettings | void, name: string, fn: TestCaseFn) => Promise<any>;
}

// elements ////////

function newEl(tag: string, props?: Record<string, any>, style?: Partial<CSSStyleDeclaration>): any {
  const el: any = document.createElement(tag);
  if (style) Object.entries(style).forEach(entry => styleEl(el, entry));
  if (props) Object.entries(props).forEach(([key, val]) => (["innerText", "innerHTML"].includes(key) ? (el[key] = val) : el.setAttribute(key, val)));
  return el;
}

const styleEl = (el: HTMLElement, [key, value]: [key: string, value: any]) => (el.style[key as any] = value);
const div = (props?: Record<string, any>, style?: Partial<CSSStyleDeclaration>): HTMLDivElement => newEl("div", props, style);
const iframe = (name: string, style?: Partial<CSSStyleDeclaration>): HTMLIFrameElement => newEl("iframe", { name, title: name, width: "99%" }, style);
const pre = (innerText?: string, style?: Partial<CSSStyleDeclaration>): HTMLPreElement =>
  newEl("pre", { innerText }, Object.assign({}, style, { padding: "16" }));

function attach(parent: Element, childs: (Element | undefined)[]): Element {
  childs.forEach(child => child && parent.appendChild(child));
  return parent;
}

// helpers /////////

function formatXml(xml: string, tab: string = "   "): string {
  const formatted: string[] = [];
  let indent = "";
  xml.split(/>\s*</).forEach(node => {
    if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
    formatted.push(indent, "<", node, ">\r\n");
    if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab; // increase indent
  });
  const bigString = formatted.join("");
  return bigString.substring(1, bigString.length - 3);
}

// tools /////////

export function fail(message: string) {
  throw Error(message);
}

async function diff<T>(nestedThing1: T, nestedThing2: T, testFn: Function, id: string, container: HTMLDivElement): Promise<DiffReport | null> {
  attach(container.appendChild(div({}, { display: "flex" })), [
    pre(typeof nestedThing1 === "string" ? formatXml(nestedThing1) : JSON.stringify(nestedThing1, undefined, 2)),
    pre(typeof nestedThing2 === "string" ? formatXml(nestedThing2) : JSON.stringify(nestedThing2, undefined, 2)),
    testFn && pre(testFn.toString()),
  ]);
  return null;
}

// init ////////

document.body.appendChild(div({ id: "test-output" }));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload) import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));
document.body.appendChild(document.createElement("style")).innerHTML = `
body {
  color: white;
  background-color: #00051c;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.scripttag {
  color: gray;
}
a {
  color: yellowgreen;
}
a:hover {
  color: yellow;
}
.dont {
  text-decoration: line-through;
}
.testarea {
  border: 1px solid white; 
  border-radius: 10px; 
  margin: 5px; 
  padding: 5px; 
  margin-bottom: 3em; 
  background-color: darkblue 
}
`;

// entry //////////

export const globalTestCaseSettings: TestCaseSettings = {
  test,
  useIframe: false,
};

export async function test(this: TestCaseSettings | void, name: string, fn: TestCaseFn): Promise<any> {
  const settings = this || globalTestCaseSettings;
  const id = new Date().getTime().toString();

  const testarea = document.getElementById("test-output")!.appendChild(div({ class: "testarea" }));
  const headline = testarea.appendChild(div({ innerText: name }));
  const wrapper = settings.useIframe
    ? testarea.appendChild(iframe(id)).contentWindow!.document.body
    : testarea.appendChild(div({}, { border: "2px inset", padding: "5px" }));
  const userplayground = wrapper.appendChild(div({ id }));

  try {
    let retval = fn({
      diff: <T>(nestedThing1: T, nestedThing2: T) => diff(nestedThing1, nestedThing2, fn, id, testarea),
      id,
      container: userplayground,
      name,
      fail: (msg: string = "failed to render") => fail(`${name}: ${msg}`),
    });
    if (retval instanceof Promise) retval = await retval;
    return retval;
  } catch (e: any) {
    headline.insertAdjacentElement("afterend", pre(e, { backgroundColor: "brown" }));
  }
}
