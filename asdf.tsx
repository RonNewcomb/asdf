// interfaces ///////

interface CInstance {
  props: IProps;
  privates: any[];
  privatesIndex: number;
  jsonToHtmlFn: CompFn;
}

interface JsxElement extends Element {
  instance?: CInstance;
}

// jsx ///////

export type IProps = Record<string, any>;

export interface CompFn {
  (props?: IProps | null): Element;
}

let currentInstance: CInstance;

export function jsx(nameOrFn: string | CompFn, props: IProps | null, ...children: any[]): Element {
  if (typeof nameOrFn === "function") return nameOrFn.call(currentInstance, props);
  const element = document.createElement(nameOrFn);
  for (const key in props) {
    if (key.startsWith("on")) element.addEventListener(key, props[key]);
    else element.setAttribute(key, props[key]);
  }
  if (children) children.forEach(c => element.append(c)); // can't just forEach(element.append) for some reason
  return element;
}

const testc = () => <div></div>;
type JsxTuple = [string | CompFn, IProps, any[], Element];

// framework /////

const registry: Record<string, CompFn> = {};

// bind does NOT alter the original
const bindPrivatesToCompfnToElement = (oldElement: JsxElement) =>
  (oldElement.instance!.jsonToHtmlFn = registry[oldElement.tagName].bind(oldElement.instance));

export function refresh(oldElement: JsxElement): void {
  if (!registry[oldElement.tagName]) {
    console.log("registering", oldElement.tagName);
    oldElement.setAttribute("data-status", "loading");
    registry[oldElement.tagName] = () => oldElement;
    import(`./components/${oldElement.tagName}.js`).catch(console.error).then(module => {
      if (module?.default) registry[oldElement.tagName] = module.default;
      else oldElement.setAttribute("data-status", "module or module.default not found for " + oldElement.tagName);
      bindPrivatesToCompfnToElement(oldElement);
      refresh(oldElement);
    });
  }

  if (!oldElement.instance) {
    console.log("binding new instance to element and what registered to", oldElement.tagName);
    oldElement.instance = { props: {}, privates: [], privatesIndex: 0, jsonToHtmlFn: null as any };
    bindPrivatesToCompfnToElement(oldElement);
  }

  const instance = oldElement.instance;
  instance.privatesIndex = 0;
  const newElementWithChildren = instance.jsonToHtmlFn(instance.props) as JsxElement;
  newElementWithChildren.instance = instance;
  oldElement.replaceWith(newElementWithChildren);
}

// hooks ////

export function useState<T>(this: any, init: T): [T, (newValue: T) => void] {
  const instance = this! as CInstance;
  if (!instance) throw Error("useState has no instance");
  const whichSlot = instance.privatesIndex++;
  if (instance.privates.length - 1 < whichSlot) instance.privates[whichSlot] = init;
  const gettor = instance.privates[whichSlot];
  const settor = (x: T) => (instance.privates[whichSlot] = x); // this effects immediately, not schedules the set for next render?
  return [gettor, settor];
}

export const useRef = <T,>(init: T): { current: T } => {
  const instance = this! as CInstance;
  if (!instance) throw Error("useRef has no instance");
  const whichSlot = instance.privatesIndex++;
  if (instance.privates.length - 1 < whichSlot) instance.privates[whichSlot] = { current: init };
  return instance.privates[whichSlot];
};

// go ///

// const appRoot = document.getElementById("app-start");
// if (appRoot) refresh(appRoot);
const appRoots = document.getElementsByTagName("app-start");
if (appRoots.length) Array.from(appRoots).forEach(refresh);
else console.error("#app-start not found");
