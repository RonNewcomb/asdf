// interfaces ///////
const newState = () => {
    const state = {
        privates: [],
        privatesIndex: 0,
        childStates: [],
        render: rerender,
        useState: null,
    };
    state.useState = useState.bind(state);
    return state;
};
const JsxSymbol = Symbol("JSX");
export const isJsxTree = (tuple) => tuple && tuple[0] === JsxSymbol;
const testjsx = () => jsx("div", null);
// ordered ////
export const jsx = (nameOrFn, props, ...children) => [JsxSymbol, nameOrFn, props, children];
export function expandTuplesRecursively(tree, childIndex, parentState) {
    var _a;
    if (!Array.isArray(tree))
        return tree;
    if (tree[0] !== JsxSymbol)
        return tree.map((c, i) => expandTuplesRecursively(c, i, parentState)); // array of components from a .map
    let [id, nameOrFn, props, children] = tree;
    if (typeof nameOrFn !== "function")
        return [id, nameOrFn, props, children.map((c, i) => expandTuplesRecursively(c, i, parentState))]; // then a <div> or <span>
    (_a = parentState.childStates)[childIndex] || (_a[childIndex] = newState());
    const state = parentState.childStates[childIndex];
    state.privatesIndex = 0;
    const tuple = nameOrFn.call(state, props, state);
    return expandTuplesRecursively(tuple, 0, state);
}
export function tupleToElement([id, nameOrFn, props, children]) {
    if (typeof nameOrFn === "function")
        throw Error("tuples weren't fully expanded");
    const element = document.createElement(nameOrFn);
    for (const key in props) {
        if (!key.startsWith("on"))
            element.setAttribute(key, props[key]);
        else
            element.addEventListener(key.slice(2).replace("Capture", "").toLowerCase(), props[key], key.endsWith("Capture"));
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
    const tuple = componentFn.call(globalState, null, globalState);
    const topTuple = expandTuplesRecursively(tuple, 0, globalState);
    console.log({ topTuple }); //////
    const newElement = tupleToElement(topTuple);
    newElement.state = oldElement.state;
    oldElement.replaceWith(newElement);
    timer = 0;
    globalRerender = () => renderInner(newElement, componentFn);
}
// hooks ////
function useState(init) {
    const i = this.privatesIndex++;
    if (this.privates.length - 1 < i)
        this.privates[i] = init;
    const gettor = this.privates[i];
    const settor = (newValue) => {
        this.privates[i] = newValue;
        this.render();
    };
    return [gettor, settor];
}
