// interfaces ///////
const JsxSymbol = Symbol("JSX");
export const jsx = (nameOrFn, props, ...children) => [JsxSymbol, nameOrFn, props, children, undefined];
export const isJsxTree = (tuple) => tuple[0] === JsxSymbol;
const testjsx = () => jsx("div", null);
export function tupleToElement([id, nameOrFn, props, children, oldElement]) {
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
export function expandTuplesRecursively([id, nameOrFn, props, children, oldElement]) {
    if (typeof nameOrFn === "function") {
        const propsToJsxtree = nameOrFn;
        const state = oldElement?.state || { privates: [], privatesIndex: 0 };
        state.privatesIndex = 0;
        const tuple = propsToJsxtree.call(state, props);
        return tuple;
    }
    const childs = children ? children.map(c => (isJsxTree(c) ? expandTuplesRecursively(c) : c)) : children;
    return [JsxSymbol, nameOrFn, props, childs, oldElement];
}
export function render(elementId, componentFn) {
    const oldElement = document.getElementById(elementId);
    if (!oldElement)
        return console.error(elementId, "not found in document");
    const props = null;
    const state = oldElement?.state || { privates: [], privatesIndex: 0 };
    state.privatesIndex = 0;
    const tuple = componentFn.call(state, props);
    const topTuple = expandTuplesRecursively(tuple);
    console.log({ topTuple }); //////
    const newElement = tupleToElement(topTuple);
    newElement.state = oldElement.state;
    oldElement.replaceWith(newElement);
}
// hooks ////
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
