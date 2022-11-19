// interfaces ///////
const JsxSymbol = Symbol("JSX");
export const isJsxTree = (tuple) => tuple && tuple[0] === JsxSymbol;
const testjsx = () => jsx("div", null);
export const jsx = (nameOrFn, props, ...children) => [JsxSymbol, nameOrFn, props, children];
// ordered ////
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
export function expandTuplesRecursively(tree, childIndex, parentState) {
    var _a;
    if (!Array.isArray(tree) || tree.length === 0)
        return tree;
    let [id, nameOrFn, props, children] = tree;
    if (id !== JsxSymbol)
        return [JsxSymbol, "array-items", null, tree.map((c, i) => expandTuplesRecursively(c, i, parentState))]; // array of components from a .map
    if (typeof nameOrFn !== "function")
        return [id, nameOrFn, props, children.map((c, i) => expandTuplesRecursively(c, i, parentState))]; // then a <div> or <span>
    (_a = parentState.childStates)[childIndex] || (_a[childIndex] = newState());
    const state = parentState.childStates[childIndex];
    state.privatesIndex = 0;
    props ? (props.children = children) : (props = { children });
    const tuple = nameOrFn.call(state, props, state);
    return expandTuplesRecursively(tuple, 0, state);
}
export function tupleToElement([id, nameOrFn, props, children]) {
    if (id !== JsxSymbol)
        throw Error("non-tuple array passed to elementalize");
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
        children.forEach(c => {
            if (isJsxTree(c))
                element.append(tupleToElement(c));
            else
                element.append(c);
        });
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
function renderInner(oldElement, topTuple) {
    const rootTuple = expandTuplesRecursively(topTuple, 0, globalState);
    console.log({ rootTuple });
    const newElement = tupleToElement(rootTuple);
    newElement.state = oldElement.state;
    oldElement.replaceWith(newElement);
    timer = 0;
    globalRerender = () => renderInner(newElement, topTuple);
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
// entry point //////////
export function renderJsx(elementId, jsx) {
    const oldElement = document.getElementById(elementId);
    if (!oldElement)
        return console.error(elementId, "not found in document");
    renderInner(oldElement, jsx);
}
export const renderFn = (elementId, componentFn, props) => renderJsx(elementId, [JsxSymbol, componentFn, props, []]);
