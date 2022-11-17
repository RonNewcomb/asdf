import AppStart from "./components/app-start.js";
const testc = () => jsx("div", null);
export function jsx(nameOrFn, props, ...children) {
    return [nameOrFn, props, children, undefined];
}
export function tupleToElement([nameOrFn, props, children, oldElement]) {
    if (typeof nameOrFn === "function") {
        const propsToJsxtree = nameOrFn;
        const newElement = oldElementToNewElement(propsToJsxtree, props, oldElement);
        return newElement;
    }
    const element = document.createElement(nameOrFn);
    for (const key in props) {
        if (key.startsWith("on"))
            element.addEventListener(key, props[key]);
        else
            element.setAttribute(key, props[key]);
    }
    if (children)
        children.forEach(c => (!Array.isArray(c) ? element.append(c) : element.append(tupleToElement(c))));
    return element;
}
function oldElementToNewElement(propsToJsxtree, props, oldElement) {
    const instance = oldElement?.instance || { privates: [], privatesIndex: 0, propsToJsxtree: propsToJsxtree };
    instance.privatesIndex = 0;
    const tuple = propsToJsxtree.call(instance, props);
    const newElement = tupleToElement(tuple);
    newElement.instance = instance;
    return newElement;
}
export function toplevel(oldElement, propsToJsxtree) {
    const newElement = oldElementToNewElement(propsToJsxtree, null, oldElement);
    oldElement.replaceWith(newElement);
}
export const useState = (init) => {
    const instance = this;
    if (!instance)
        throw Error("useState has no instance");
    const whichSlot = instance.privatesIndex++;
    if (instance.privates.length - 1 < whichSlot)
        instance.privates[whichSlot] = init;
    const gettor = instance.privates[whichSlot];
    const settor = (x) => (instance.privates[whichSlot] = x);
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
const appRoots = document.getElementsByTagName("app-start");
if (appRoots.length)
    Array.from(appRoots).forEach(el => toplevel(el, AppStart));
else
    console.error("<app-start /> not found in index.html");
