// interfaces ///////

export interface IState {
  privates: any[];
  privatesIndex: number;
  childStates: IState[];
  render: (...ignored: any) => void;
  useState: <T>(init: T) => [T, (newValue: T) => void];
}

interface JsxElement extends Element {
  state?: IState;
}

// jsx ///////

export type IProps = Record<string, any> | null | undefined;
export type JxsTagname = string | ((props?: IProps, state?: IState) => JsxTree);
export const JsxSymbol = Symbol("JSX");
export type JsxTree = [symbol, JxsTagname, IProps, any[]];
export const isJsxTree = (tuple: any[]) => tuple && tuple[0] === JsxSymbol;
const testjsx = () => <div></div>;
export const jsx = (nameOrFn: JxsTagname, props: IProps, ...children: any[]): JsxTree => [JsxSymbol, nameOrFn, props, children];

// ordered ////

const newState = (): IState => {
  const state: IState = {
    privates: [],
    privatesIndex: 0,
    childStates: [],
    render: rerender,
    useState: null as any,
  };
  state.useState = useState.bind(state) as <T>(init: T) => [T, (newValue: T) => void];
  return state;
};

export function expandTuplesRecursively(tree: any, childIndex: number, parentState: IState): any {
  if (!Array.isArray(tree) || tree.length === 0) return tree;
  let [id, nameOrFn, props, children] = tree as JsxTree;
  if (id !== JsxSymbol) return [JsxSymbol, "array-items", null, tree.map((c, i) => expandTuplesRecursively(c, i, parentState))]; // array of components from a .map
  if (typeof nameOrFn !== "function") return [id, nameOrFn, props, children.map((c, i) => expandTuplesRecursively(c, i, parentState))]; // then a <div> or <span>
  parentState.childStates[childIndex] ||= newState();
  const state = parentState.childStates[childIndex];
  state.privatesIndex = 0;
  props ? (props.children = children) : (props = { children });
  const tuple = nameOrFn.call(state, props, state);
  return expandTuplesRecursively(tuple, 0, state);
}

export function tupleToElement([id, nameOrFn, props, children]: JsxTree): JsxElement {
  if (id !== JsxSymbol) throw Error("non-tuple array passed to elementalize");
  if (typeof nameOrFn === "function") throw Error("tuples weren't fully expanded");
  const element = document.createElement(nameOrFn);
  for (const key in props) {
    if (!key.startsWith("on")) element.setAttribute(key, props[key]);
    else element.addEventListener(key.slice(2).replace("Capture", "").toLowerCase(), props[key], key.endsWith("Capture"));
  }
  if (children)
    children.forEach(c => {
      if (isJsxTree(c)) element.append(tupleToElement(c));
      else element.append(c);
    });
  return element;
}

// framework /////

const globalState: IState = newState();
let globalRerender = () => {};
let timer = 0;

export function rerender(this: IState): void {
  if (!timer) timer = setTimeout(globalRerender);
}

function renderInner(oldElement: JsxElement, topTuple: JsxTree): [JsxElement, JsxTree] {
  const rootTuple: JsxTree = expandTuplesRecursively(topTuple, 0, globalState);
  console.log({ rootTuple });
  const newElement = tupleToElement(rootTuple);
  newElement.state = oldElement.state;
  oldElement.replaceWith(newElement);
  timer = 0;
  globalRerender = () => renderInner(newElement, topTuple);
  return [newElement, rootTuple];
}

// hooks ////

function useState<T>(this: IState, init: T): [T, (newVal: T) => void] {
  const i = this.privatesIndex++;
  if (this.privates.length - 1 < i) this.privates[i] = init;
  const gettor = this.privates[i];
  const settor = (newValue: T) => {
    this.privates[i] = newValue;
    this.render();
  };
  return [gettor, settor];
}

// entry point //////////

export function renderJsx(elementId: string, jsx: JsxTree): [JsxElement, JsxTree] | void {
  const oldElement = document.getElementById(elementId) as JsxElement;
  if (!oldElement) return console.error(elementId, "not found in document");
  return renderInner(oldElement, jsx);
}

export const renderFn = (elementId: string, componentFn: (props: any, state: IState & any) => JsxTree, props?: object) =>
  renderJsx(elementId, [JsxSymbol, componentFn, props, []]);
