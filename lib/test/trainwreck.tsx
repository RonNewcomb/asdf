interface DiffReport {}

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

function attach(parent: Element, childs: (Element | undefined)[]): Element {
  childs.forEach(child => child && parent.appendChild(child));
  return parent;
}

document.body.appendChild(div("test-output"));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload) import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));

async function diff<T>(
  nestedThing1: T,
  nestedThing2: T,
  testFn: Function,
  id: string,
  container: HTMLDivElement
): Promise<DiffReport | null> {
  attach(container.appendChild(div("", "flex")), [
    pre(JSON.stringify(nestedThing1, undefined, 2)),
    pre(JSON.stringify(nestedThing2, undefined, 2)),
    testFn && pre(testFn.toString()),
  ]);
  return null;
}

interface ShortDiff {
  <T>(nestedThing1: T, nestedThing2: T): Promise<DiffReport | null>;
}

function iframe(id: string) {
  const el = document.createElement("iframe");
  if (id) el.setAttribute("name", id);
  if (id) el.setAttribute("title", id);
  return el;
}

export async function test(fn: (pkg: { diff: ShortDiff; id: string; playground: HTMLDivElement }) => void): Promise<any> {
  const id = new Date().getTime().toString();
  const testarea = div();
  const frame = iframe(id);
  const userplayground = div(id);
  document.getElementById("test-output")!.appendChild(testarea).appendChild(frame).appendChild(userplayground);
  const shortDiff: ShortDiff = <T,>(nestedThing1: T, nestedThing2: T) => diff(nestedThing1, nestedThing2, fn, id, testarea);
  return fn({ diff: shortDiff, id, playground: userplayground });
}

export function orThrow(message: string) {
  throw Error(message);
}
