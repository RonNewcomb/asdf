interface DiffReport {}

// elements ////////

const styling = (el: HTMLElement, [key, value]: [key: string, value: any]) => (el.style[key as any] = value);

function elment(tag: string, props?: Record<string, any>, style?: Partial<CSSStyleDeclaration>): any {
  const el: any = document.createElement(tag);
  if (style) Object.entries(style).forEach(entry => styling(el, entry));
  if (props) Object.entries(props).forEach(([key, val]) => (["innerText", "innerHTML"].includes(key) ? (el[key] = val) : el.setAttribute(key, val)));
  return el;
}

const div = (props?: Record<string, any>, style?: Partial<CSSStyleDeclaration>): HTMLDivElement => elment("div", props, style);
const iframe = (name: string, style?: Partial<CSSStyleDeclaration>): HTMLIFrameElement => elment("iframe", { name, title: name, width: "99%" }, style);
const pre = (innerText?: string, style?: Partial<CSSStyleDeclaration>): HTMLPreElement =>
  elment("pre", { innerText }, Object.assign({}, style, { padding: "16" }));

// helpers /////////

function attach(parent: Element, childs: (Element | undefined)[]): Element {
  childs.forEach(child => child && parent.appendChild(child));
  return parent;
}

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

export function orThrow(message: string) {
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

interface ShortDiff {
  <T>(nestedThing1: T, nestedThing2: T): Promise<DiffReport | null>;
}

// init ////////

const styleSheet = document.createElement("style");
styleSheet.innerText = ".testarea { border: 1px solid white; border-radius: 10px; margin: 5px; padding: 5px; margin-bottom: 3em; background-color: darkblue }";
document.body.appendChild(styleSheet);
document.body.appendChild(div({ id: "test-output" }));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload) import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));

// entry ////////

export interface InputsToTestCase {
  diff: ShortDiff;
  id: string;
  playground: HTMLDivElement;
  name: string;
  orThrow: (msg?: string) => void;
}

export interface TestCaseSettings {
  useIframe?: boolean;
  test: (this: TestCaseSettings | void, name: string, fn: (pkg: InputsToTestCase) => void) => Promise<any>;
}

export const globalTestCaseSettings: TestCaseSettings = {
  test,
  useIframe: false,
};

export async function test(this: TestCaseSettings | void, name: string, fn: (pkg: InputsToTestCase) => void): Promise<any> {
  const id = new Date().getTime().toString();
  const testarea = div({ class: "testarea" });
  testarea.appendChild(div({ innerText: name }));
  document.getElementById("test-output")!.appendChild(testarea);
  const playgroundWrapper = div(undefined, { border: "2px inset", padding: "5px" });
  const userplayground = div({ id });
  if ((this || globalTestCaseSettings).useIframe) {
    const frame = iframe(id);
    console.log("using", { frame });
    testarea.appendChild(frame);
    frame.contentWindow!.document.body.appendChild(userplayground);
  } else testarea.appendChild(playgroundWrapper).appendChild(userplayground);

  const shortDiff: ShortDiff = <T,>(nestedThing1: T, nestedThing2: T) => diff(nestedThing1, nestedThing2, fn, id, testarea);

  try {
    return fn({
      diff: shortDiff,
      id,
      playground: userplayground,
      name,
      orThrow: (msg: string = "failed to render") => orThrow(`${name}: ${msg}`),
    });
  } catch (e: any) {
    testarea.insertAdjacentElement("afterbegin", pre(e, { backgroundColor: "brown" }));
  }
}
