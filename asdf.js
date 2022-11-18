// interfaces ///////
const newState = () => ({
    privates: [],
    privatesIndex: 0,
    childStates: [],
    render: rerender,
    useState: function (init) {
        return use(this, init);
    },
});
const JsxSymbol = Symbol("JSX");
export const isJsxTree = (tuple) => tuple && tuple[0] === JsxSymbol;
const testjsx = () => jsx("div", null);
// ordered ////
export const jsx = (nameOrFn, props, ...children) => [JsxSymbol, nameOrFn, props, children];
export function expandTuplesRecursively(tree, childIndex, parentState) {
    if (!tree || tree[0] !== JsxSymbol)
        return tree;
    const [id, nameOrFn, props, children] = tree;
    if (typeof nameOrFn === "function") {
        if (!parentState)
            throw Error("parentState missing");
        if (!parentState.childStates[childIndex])
            parentState.childStates[childIndex] = newState();
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
const globalState = newState();
let globalRerender = () => { };
let timer = 0;
export function rerender() {
    if (!timer)
        timer = setTimeout(globalRerender);
}
export function render(elementId, componentFn) {
    const oldElement = document.getElementById(elementId);
    if (!oldElement)
        return console.error(elementId, "not found in document");
    renderInner(oldElement, componentFn);
}
function renderInner(oldElement, componentFn) {
    globalState.privatesIndex = 0;
    const tuple = componentFn(null, globalState);
    const topTuple = expandTuplesRecursively(tuple, 0, globalState);
    console.log({ topTuple }); //////
    const newElement = tupleToElement(topTuple);
    newElement.state = oldElement.state;
    oldElement.replaceWith(newElement);
    timer = 0;
    globalRerender = () => renderInner(newElement, componentFn);
}
// hooks ////
export function use(state, init) {
    const i = state.privatesIndex++;
    if (state.privates.length - 1 < i)
        state.privates[i] = init;
    const gettor = state.privates[i];
    const settor = (newValue) => {
        state.privates[i] = newValue;
        state.render();
    };
    return [gettor, settor];
}
