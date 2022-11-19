interface DiffReport {}

function div(id?: string, display?: string) {
  const div = document.createElement("div");
  if (id) div.setAttribute("id", id);
  if (display) div.style.display = display;
  return div;
}

function pre() {
  const el = document.createElement("pre");
  el.style.margin = "16";
  return el;
}

document.body.appendChild(div("test-output"));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload) import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));

export async function diff<T>(nestedThing1: T, nestedThing2: T, testFn: Function): Promise<DiffReport | null> {
  const container = document.getElementById("test-output")!;
  const outer = div("", "flex");
  const left = pre();
  const right = pre();
  left.innerText = JSON.stringify(nestedThing1, undefined, 2);
  right.innerText = JSON.stringify(nestedThing2, undefined, 2);
  outer.appendChild(left);
  outer.appendChild(right);
  if (testFn) {
    const code = pre();
    code.innerText = testFn.toString();
    outer.appendChild(code);
  }
  container?.appendChild(outer);
  return null;
}

interface ShortDiff {
  <T>(nestedThing1: T, nestedThing2: T): Promise<DiffReport | null>;
}

export async function test(fn: (pkg: { diff: ShortDiff }) => void): Promise<any> {
  const shortDiff: ShortDiff = <T,>(nestedThing1: T, nestedThing2: T) => diff(nestedThing1, nestedThing2, fn);
  return fn({ diff: shortDiff });
}

export function orThrow(message: string) {
  throw Error(message);
}
