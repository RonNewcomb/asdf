import AppStart from "./components/app-start.js";

// interfaces ///////

interface CInstance {
  privates: any[];
  privatesIndex: number;
  propsToJsxtree: CompFn;
}

interface JsxElement extends Element {
  instance?: CInstance;
}

// jsx ///////

const testc = () => <div></div>;

export type IProps = Record<string, any> | null;
export type CompFn = (props?: IProps) => JsxTree;
export type JsxTree = [string | CompFn, IProps, JsxTree[], JsxElement?];

export function jsx(nameOrFn: string | CompFn, props: IProps, ...children: any[]): JsxTree {
  return [nameOrFn, props, children, undefined];
}

export function tupleToElement([nameOrFn, props, children, oldElement]: JsxTree): JsxElement {
  // recursive case
  if (typeof nameOrFn === "function") {
    const propsToJsxtree = nameOrFn;
    const newElement = oldElementToNewElement(propsToJsxtree, props, oldElement);
    return newElement;
  }

  // base case
  const element = document.createElement(nameOrFn);
  for (const key in props) {
    if (key.startsWith("on")) element.addEventListener(key, props[key]);
    else element.setAttribute(key, props[key]);
  }
  if (children) children.forEach(c => (!Array.isArray(c) ? element.append(c) : element.append(tupleToElement(c))));
  return element;
}

// framework /////

function oldElementToNewElement(propsToJsxtree: CompFn, props: IProps, oldElement?: JsxElement): JsxElement {
  const instance = oldElement?.instance || { privates: [], privatesIndex: 0, propsToJsxtree: propsToJsxtree };
  instance.privatesIndex = 0;
  const tuple = propsToJsxtree.call(instance, props);
  const newElement = tupleToElement(tuple);
  newElement.instance = instance;
  return newElement;
}

export function toplevel(oldElement: JsxElement, propsToJsxtree: CompFn): void {
  const newElement = oldElementToNewElement(propsToJsxtree, null, oldElement);
  oldElement.replaceWith(newElement);
}

// hooks ////

export const useState = <T,>(init: T): [T, (newValue: T) => void] => {
  const instance = this! as CInstance;
  if (!instance) throw Error("useState has no instance");
  const whichSlot = instance.privatesIndex++;
  if (instance.privates.length - 1 < whichSlot) instance.privates[whichSlot] = init;
  const gettor = instance.privates[whichSlot];
  const settor = (x: T) => (instance.privates[whichSlot] = x); // this effects immediately, not schedules the set for next render?
  return [gettor, settor];
};

export const useRef = <T,>(init: T): { current: T } => {
  const instance = this! as CInstance;
  if (!instance) throw Error("useRef has no instance");
  const whichSlot = instance.privatesIndex++;
  if (instance.privates.length - 1 < whichSlot) instance.privates[whichSlot] = { current: init };
  return instance.privates[whichSlot];
};

// go ///

// const appRoot = document.getElementById("app-start");
// if (appRoot) refresh(appRoot);
// else console.error("#app-start not found in index.html");
const appRoots = document.getElementsByTagName("app-start");
if (appRoots.length) Array.from(appRoots).forEach(el => toplevel(el, AppStart));
else console.error("<app-start /> not found in index.html");
