interface DiffReport {}

// elements ////////

function styling(el: HTMLElement, [key, value]: [key: string, value: any]) {
  el.style[key as any] = value;
}

function div(id?: string, display?: string, style?: Record<string, any>) {
  const el = document.createElement("div");
  if (id) el.setAttribute("id", id);
  if (display) el.style.display = display;
  if (style) Object.entries(style).forEach(entry => styling(el, entry));
  return el;
}

function pre(innerText?: string, style?: Record<string, any>) {
  const el = document.createElement("pre");
  el.style.padding = "16";
  if (innerText) el.innerText = innerText;
  if (style) Object.entries(style).forEach(entry => styling(el, entry));
  return el;
}

function iframe(id: string, style?: Record<string, any>) {
  const el = document.createElement("iframe");
  el.setAttribute("width", "99%");
  if (id) el.setAttribute("name", id);
  if (id) el.setAttribute("title", id);
  if (style) Object.entries(style).forEach(entry => styling(el, entry));
  return el;
}

// helpers /////////

function attach(parent: Element, childs: (Element | undefined)[]): Element {
  childs.forEach(child => child && parent.appendChild(child));
  return parent;
}

// tools /////////

export function orThrow(message: string) {
  throw Error(message);
}

function formatXml(xml: string, tab: string = "   "): string {
  const formatted: string[] = [];
  let indent = "";
  xml.split(/>\s*</).forEach(node => {
    if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
    formatted.push(indent + "<" + node + ">\r\n");
    if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab; // increase indent
  });
  const bigString = formatted.join("");
  return bigString.substring(1, bigString.length - 3);
}

async function diff<T>(nestedThing1: T, nestedThing2: T, testFn: Function, id: string, container: HTMLDivElement): Promise<DiffReport | null> {
  attach(container.appendChild(div("", "flex")), [
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

document.body.appendChild(div("test-output"));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload) import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));

// entry ////////

export interface TestCase {
  (pkg: { diff: ShortDiff; id: string; playground: HTMLDivElement }): void;
}

export interface TestCaseSettings {
  useIframe?: boolean;
  test: (this: TestCaseSettings | void, fn: TestCase) => Promise<any>;
}

const globalTestCaseSettings: TestCaseSettings = {
  test,
  useIframe: false,
};

export async function test(this: TestCaseSettings | void, fn: TestCase): Promise<any> {
  const id = new Date().getTime().toString();
  const testarea = div();
  document.getElementById("test-output")!.appendChild(testarea);
  testarea.appendChild(document.createElement("hr"));
  const playgroundWrapper = div(undefined, undefined, { border: "2px inset", padding: "5px" });
  const userplayground = div(id);
  if ((this || globalTestCaseSettings).useIframe) {
    const frame = iframe(id);
    testarea.appendChild(frame);
    frame.contentWindow!.document.body.appendChild(userplayground);
  } else testarea.appendChild(playgroundWrapper).appendChild(userplayground);

  const shortDiff: ShortDiff = <T,>(nestedThing1: T, nestedThing2: T) => diff(nestedThing1, nestedThing2, fn, id, testarea);

  try {
    return fn({ diff: shortDiff, id, playground: userplayground });
  } catch (e: any) {
    testarea.appendChild(pre(e, { "background-color": "brown" }));
  }
}
