// interfaces ///////

export interface IState {
  privates: any[];
  privatesIndex: number;
  childStates: IState[];
  render: () => void;
  useState: <T>(init: T) => [T, (newValue: T) => void];
}

interface JsxElement extends Element {
  state?: IState;
}

const newState = (): IState => ({
  privates: [],
  privatesIndex: 0,
  childStates: [],
  render: rerender,
  useState: function <T>(this: IState, init: T) {
    return use(this, init);
  },
});

// jsx ///////

export type IProps = Record<string, any> | null;
export type CompFn = (props?: IProps, state?: IState) => JsxTree;
export type JxsTagname = string | CompFn;
const JsxSymbol = Symbol("JSX");
export type JsxTree = [symbol, JxsTagname, IProps, any[]];
export const isJsxTree = (tuple: any[]) => tuple && tuple[0] === JsxSymbol;
const testjsx = () => <div></div>;

// ordered ////

export const jsx = (nameOrFn: JxsTagname, props: IProps, ...children: any[]): JsxTree => [JsxSymbol, nameOrFn, props, children];

export function expandTuplesRecursively(tree: JsxTree, childIndex: number, parentState: IState): JsxTree {
  if (!tree || tree[0] !== JsxSymbol) return tree;
  const [id, nameOrFn, props, children] = tree;
  if (typeof nameOrFn === "function") {
    if (!parentState) throw Error("parentState missing");
    if (!parentState!.childStates[childIndex]) parentState!.childStates[childIndex] = newState();
    const state: IState = parentState!.childStates[childIndex];
    state.privatesIndex = 0;
    const tuple = nameOrFn(props, state);
    return expandTuplesRecursively(tuple, 0, state);
  }
  const adults = Array.isArray(children)
    ? children.map((c, i) => expandTuplesRecursively(c, i, parentState))
    : expandTuplesRecursively(children, 0, parentState);
  return [JsxSymbol, nameOrFn, props, adults];
}

export function tupleToElement([id, nameOrFn, props, children]: JsxTree): JsxElement {
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

const globalState: IState = newState();
let globalRerender = () => {};
let timer = 0;

export function rerender(this: IState): void {
  if (!timer) timer = setTimeout(globalRerender);
}

export function render(elementId: string, componentFn: CompFn): void {
  const oldElement = document.getElementById(elementId) as JsxElement;
  if (!oldElement) return console.error(elementId, "not found in document");
  renderInner(oldElement, componentFn);
}

function renderInner(oldElement: JsxElement, componentFn: CompFn): void {
  globalState.privatesIndex = 0;
  const tuple = componentFn(null, globalState);
  const topTuple: JsxTree = expandTuplesRecursively(tuple, 0, globalState);
  console.log({ topTuple }); //////
  const newElement = tupleToElement(topTuple);
  newElement.state = oldElement.state;
  oldElement.replaceWith(newElement);
  timer = 0;
  globalRerender = () => renderInner(newElement, componentFn);
}

// hooks ////

export function use<T>(state: IState, init: T): [T, (newVal: T) => void] {
  const i = state.privatesIndex++;
  if (state.privates.length - 1 < i) state.privates[i] = init;
  const gettor = state.privates[i];
  const settor = (newValue: T) => {
    state.privates[i] = newValue;
    state.render();
  };
  return [gettor, settor];
}
