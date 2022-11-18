// interfaces ///////
const JsxSymbol = Symbol("JSX");
export const isJsxTree = (tuple) => tuple && tuple[0] === JsxSymbol;
const testjsx = () => jsx("div", null);
// ordered ////
function rerender(i, val) {
    this.privates[i] = val;
    // and?
}
export const jsx = (nameOrFn, props, ...children) => [JsxSymbol, nameOrFn, props, children];
export function expandTuplesRecursively(tree, childIndex, parentState) {
    if (!tree || tree[0] !== JsxSymbol)
        return tree;
    const [id, nameOrFn, props, children] = tree;
    if (typeof nameOrFn === "function") {
        if (!parentState)
            throw Error("parentState missing");
        if (!parentState.childStates[childIndex]) {
            parentState.childStates[childIndex] = { privates: [], privatesIndex: 0, childStates: [], render: rerender };
        }
        const state = parentState.childStates[childIndex];
        state.privatesIndex = 0;
        const tuple = nameOrFn(props, state);
        return expandTuplesRecursively(tuple, 0, state);
    }
    const adults = Array.isArray(children)
        ? children.map((c, i) => expandTuplesRecursively(c, i, parentState))
        : expandTuplesRecursively(children, 0, parentState);
    return [JsxSymbol, nameOrFn, props, adults];
}
export function tupleToElement([id, nameOrFn, props, children]) {
    if (typeof nameOrFn === "function")
        throw Error("tuples weren't fully expanded");
    const element = document.createElement(nameOrFn);
    for (const key in props) {
        if (key.startsWith("on"))
            element.addEventListener(key.slice(2).toLowerCase(), props[key]);
        else
            element.setAttribute(key, props[key]);
    }
    if (children)
        children.forEach(c => element.append(isJsxTree(c) ? tupleToElement(c) : c));
    return element;
}
// framework /////
const globalState = { privates: [], privatesIndex: 0, childStates: [], render: rerender };
export function render(elementId, componentFn) {
    const oldElement = document.getElementById(elementId);
    if (!oldElement)
        return console.error(elementId, "not found in document");
    globalState.privatesIndex = 0;
    const tuple = componentFn(null, globalState);
    const topTuple = expandTuplesRecursively(tuple, 0, globalState);
    console.log({ topTuple }); //////
    const newElement = tupleToElement(topTuple);
    newElement.state = oldElement.state;
    oldElement.replaceWith(newElement);
}
// hooks ////
export function use(state, init) {
    const i = state.privatesIndex++;
    if (state.privates.length - 1 < i)
        state.privates[i] = init;
    const gettor = state.privates[i];
    const settor = (val) => state.render(i, val);
    return [gettor, settor];
}
export const useState = (init) => {
    const instance = this;
    if (!instance)
        throw Error("useState has no instance");
    const whichSlot = instance.privatesIndex++;
    if (instance.privates.length - 1 < whichSlot)
        instance.privates[whichSlot] = init;
    const gettor = instance.privates[whichSlot];
    const settor = (x) => (instance.privates[whichSlot] = x); // this effects immediately, not schedules the set for next render?
    return [gettor, settor];
};
export const useRef = (init) => {
    const instance = this;
    if (!instance)
        throw Error("useRef has no instance");
    const whichSlot = instance.privatesIndex++;
    if (instance.privates.length - 1 < whichSlot)
        instance.privates[whichSlot] = { current: init };
    return instance.privates[whichSlot];
};
