import AppStart from "./components/app-start.js";

// interfaces ///////

interface IState {
  privates: any[];
  privatesIndex: number;
}

interface JsxElement extends Element {
  state?: IState;
}

// jsx ///////

export type IProps = Record<string, any> | null;
export type CompFn = (props?: IProps) => JsxTree;
export type JsxTree = [string | CompFn, IProps, JsxTree[], JsxElement?];
export const jsx = (nameOrFn: string | CompFn, props: IProps, ...children: any[]): JsxTree => [nameOrFn, props, children, undefined];
const testjsx = () => <div></div>;

export function tupleToElement([nameOrFn, props, children, oldElement]: JsxTree): JsxElement {
  if (typeof nameOrFn === "function") throw Error("tuples weren't fully expanded");
  const element = document.createElement(nameOrFn);
  for (const key in props) {
    if (key.startsWith("on")) element.addEventListener(key, props[key]);
    else element.setAttribute(key, props[key]);
  }
  if (children) children.forEach(c => (!Array.isArray(c) ? element.append(c) : element.append(tupleToElement(c))));
  return element;
}

export function expandTuplesRecursively([nameOrFn, props, children, oldElement]: JsxTree): JsxTree {
  if (typeof nameOrFn === "function") {
    const propsToJsxtree = nameOrFn;
    const state: IState = oldElement?.state || { privates: [], privatesIndex: 0 };
    state.privatesIndex = 0;
    const tuple = propsToJsxtree.call(state, props);
    return tuple;
  }
  const childs = children ? children.map(c => (Array.isArray(c) ? expandTuplesRecursively(c) : c)) : children;
  return [nameOrFn, props, childs, oldElement];
}

// framework /////

export function render(elementId: string, componentFn: CompFn): void {
  const oldElement = document.getElementById(elementId) as JsxElement;
  if (!oldElement) return console.error(elementId, "not found in index.html");
  const props: IProps = null;
  const state: IState = oldElement?.state || { privates: [], privatesIndex: 0 };
  state.privatesIndex = 0;
  const tuple = componentFn.call(state, props);
  const topTuple: JsxTree = expandTuplesRecursively(tuple);
  console.log({ topTuple }); //////
  const newElement = tupleToElement(topTuple);
  newElement.state = oldElement.state;
  oldElement.replaceWith(newElement);
}

// hooks ////

export const useState = <T,>(init: T): [T, (newValue: T) => void] => {
  const instance = this! as IState;
  if (!instance) throw Error("useState has no instance");
  const whichSlot = instance.privatesIndex++;
  if (instance.privates.length - 1 < whichSlot) instance.privates[whichSlot] = init;
  const gettor = instance.privates[whichSlot];
  const settor = (x: T) => (instance.privates[whichSlot] = x); // this effects immediately, not schedules the set for next render?
  return [gettor, settor];
};

export const useRef = <T,>(init: T): { current: T } => {
  const instance = this! as IState;
  if (!instance) throw Error("useRef has no instance");
  const whichSlot = instance.privatesIndex++;
  if (instance.privates.length - 1 < whichSlot) instance.privates[whichSlot] = { current: init };
  return instance.privates[whichSlot];
};

// go ///

render("app-start", AppStart);
