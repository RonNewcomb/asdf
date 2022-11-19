interface DiffReport {}

// elements ////////

function div(id?: string, display?: string) {
  const div = document.createElement("div");
  if (id) div.setAttribute("id", id);
  if (display) div.style.display = display;
  return div;
}

function pre(innerText?: string) {
  const el = document.createElement("pre");
  el.style.margin = "16";
  if (innerText) el.innerText = innerText;
  return el;
}

function iframe(id: string) {
  const el = document.createElement("iframe");
  if (id) el.setAttribute("name", id);
  if (id) el.setAttribute("title", id);
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
  let formatted = "";
  let indent = "";
  xml.split(/>\s*</).forEach(function (node) {
    if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
    formatted += indent + "<" + node + ">\r\n";
    if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab; // increase indent
  });
  return formatted.substring(1, formatted.length - 3);
}

async function diff<T>(
  nestedThing1: T,
  nestedThing2: T,
  testFn: Function,
  id: string,
  container: HTMLDivElement
): Promise<DiffReport | null> {
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

export async function test(fn: (pkg: { diff: ShortDiff; id: string; playground: HTMLDivElement }) => void): Promise<any> {
  const id = new Date().getTime().toString();
  const testarea = div();
  const frame = iframe(id);
  const userplayground = div(id);
  document.getElementById("test-output")!.appendChild(testarea).appendChild(frame).appendChild(userplayground);
  const shortDiff: ShortDiff = <T,>(nestedThing1: T, nestedThing2: T) => diff(nestedThing1, nestedThing2, fn, id, testarea);
  return fn({ diff: shortDiff, id, playground: userplayground });
}
