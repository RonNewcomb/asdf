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
const JsxSymbol = Symbol("JSX");
export type JsxTree = [typeof JsxSymbol, string | CompFn, IProps, any[], JsxElement?];
export const jsx = (nameOrFn: string | CompFn, props: IProps, ...children: any[]): JsxTree => [JsxSymbol, nameOrFn, props, children, undefined];
export const isJsxTree = (tuple: any[]) => tuple[0] === JsxSymbol;
const testjsx = () => <div></div>;

export function tupleToElement([id, nameOrFn, props, children, oldElement]: JsxTree): JsxElement {
  if (typeof nameOrFn === "function") throw Error("tuples weren't fully expanded");
  const element = document.createElement(nameOrFn);
  for (const key in props) {
    if (key.startsWith("on")) element.addEventListener(key.slice(2).toLowerCase(), props[key]);
    else element.setAttribute(key, props[key]);
  }
  if (children) children.forEach(c => element.append(isJsxTree(c) ? tupleToElement(c) : c));
  return element;
}

// framework /////

export function expandTuplesRecursively([id, nameOrFn, props, children, oldElement]: JsxTree): JsxTree {
  if (typeof nameOrFn === "function") {
    const propsToJsxtree = nameOrFn;
    const state: IState = oldElement?.state || { privates: [], privatesIndex: 0 };
    state.privatesIndex = 0;
    const tuple = propsToJsxtree.call(state, props);
    return tuple;
  }
  const childs = children ? children.map(c => (isJsxTree(c) ? expandTuplesRecursively(c) : c)) : children;
  return [JsxSymbol, nameOrFn, props, childs, oldElement];
}

export function render(elementId: string, componentFn: CompFn): void {
  const oldElement = document.getElementById(elementId) as JsxElement;
  if (!oldElement) return console.error(elementId, "not found in document");
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
