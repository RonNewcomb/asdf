export function jsx(nameOrFn, props, ...children) {
    if (typeof nameOrFn === "function")
        return nameOrFn(props);
    const element = document.createElement(nameOrFn);
    for (const key in props) {
        if (key.startsWith("on"))
            element.addEventListener(key, props[key]);
        else
            element.setAttribute(key, props[key]);
    }
    if (children)
        children.forEach(c => element.append(c));
    return element;
}
const testc = () => jsx("div", null);
const registry = {};
const bindPrivatesToCompfnToElement = (oldElement) => (oldElement.instance.jsonToHtmlFn = registry[oldElement.tagName].bind(oldElement.instance));
export function refresh(oldElement) {
    if (!registry[oldElement.tagName]) {
        console.log("registering", oldElement.tagName);
        oldElement.setAttribute("data-status", "loading");
        registry[oldElement.tagName] = () => oldElement;
        import(`./components/${oldElement.tagName}.js`).catch(console.error).then(module => {
            if (module?.default)
                registry[oldElement.tagName] = module.default;
            else
                oldElement.setAttribute("data-status", "module or module.default not found for " + oldElement.tagName);
            bindPrivatesToCompfnToElement(oldElement);
            refresh(oldElement);
        });
    }
    if (!oldElement.instance) {
        console.log("binding new instance to element and what registered to", oldElement.tagName);
        oldElement.instance = { props: {}, privates: [], privatesIndex: 0, jsonToHtmlFn: null };
        bindPrivatesToCompfnToElement(oldElement);
    }
    const instance = oldElement.instance;
    instance.privatesIndex = 0;
    const newElementWithChildren = instance.jsonToHtmlFn(instance.props);
    newElementWithChildren.instance = instance;
    oldElement.replaceWith(newElementWithChildren);
}
export function useState(init) {
    const instance = this;
    if (!instance)
        throw Error("useState has no instance");
    const whichSlot = instance.privatesIndex++;
    if (instance.privates.length - 1 < whichSlot)
        instance.privates[whichSlot] = init;
    const gettor = instance.privates[whichSlot];
    const settor = (x) => (instance.privates[whichSlot] = x);
    return [gettor, settor];
}
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
    Array.from(appRoots).forEach(refresh);
else
    console.error("#app-start not found");
