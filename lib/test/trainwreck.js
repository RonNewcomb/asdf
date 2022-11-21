// elements ////////
const styling = (el, [key, value]) => (el.style[key] = value);
function elment(tag, props, style) {
    const el = document.createElement(tag);
    if (style)
        Object.entries(style).forEach(entry => styling(el, entry));
    if (props)
        Object.entries(props).forEach(([key, val]) => (["innerText", "innerHTML"].includes(key) ? (el[key] = val) : el.setAttribute(key, val)));
    return el;
}
const div = (props, style) => elment("div", props, style);
const iframe = (name, style) => elment("iframe", { name, title: name, width: "99%" }, style);
const pre = (innerText, style) => elment("pre", { innerText }, Object.assign({}, style, { padding: "16" }));
function attach(parent, childs) {
    childs.forEach(child => child && parent.appendChild(child));
    return parent;
}
// helpers /////////
function formatXml(xml, tab = "   ") {
    const formatted = [];
    let indent = "";
    xml.split(/>\s*</).forEach(node => {
        if (node.match(/^\/\w/))
            indent = indent.substring(tab.length); // decrease indent by one 'tab'
        formatted.push(indent, "<", node, ">\r\n");
        if (node.match(/^<?\w[^>]*[^\/]$/))
            indent += tab; // increase indent
    });
    const bigString = formatted.join("");
    return bigString.substring(1, bigString.length - 3);
}
// tools /////////
export function orThrow(message) {
    throw Error(message);
}
async function diff(nestedThing1, nestedThing2, testFn, id, container) {
    attach(container.appendChild(div({}, { display: "flex" })), [
        pre(typeof nestedThing1 === "string" ? formatXml(nestedThing1) : JSON.stringify(nestedThing1, undefined, 2)),
        pre(typeof nestedThing2 === "string" ? formatXml(nestedThing2) : JSON.stringify(nestedThing2, undefined, 2)),
        testFn && pre(testFn.toString()),
    ]);
    return null;
}
// init ////////
const css = `
body {
  color: white;
  background-color: #00051c;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.scripttag {
  color: gray;
}
a {
  color: yellowgreen;
}
a:hover {
  color: yellow;
}
.dont {
  text-decoration: line-through;
}
.testarea {
  border: 1px solid white; 
  border-radius: 10px; 
  margin: 5px; 
  padding: 5px; 
  margin-bottom: 3em; 
  background-color: darkblue 
}
`;
document.body.appendChild(document.createElement("style")).innerHTML = css;
document.body.appendChild(div({ id: "test-output" }));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload)
    import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));
export const globalTestCaseSettings = {
    test,
    useIframe: false,
};
export async function test(name, fn) {
    const settings = this || globalTestCaseSettings;
    const id = new Date().getTime().toString();
    const testarea = document.getElementById("test-output").appendChild(div({ class: "testarea" }));
    const headline = testarea.appendChild(div({ innerText: name }));
    const wrapper = settings.useIframe
        ? testarea.appendChild(iframe(id)).contentWindow.document.body
        : testarea.appendChild(div({}, { border: "2px inset", padding: "5px" }));
    const userplayground = wrapper.appendChild(div({ id }));
    try {
        let retval = fn({
            diff: (nestedThing1, nestedThing2) => diff(nestedThing1, nestedThing2, fn, id, testarea),
            id,
            playground: userplayground,
            name,
            orThrow: (msg = "failed to render") => orThrow(`${name}: ${msg}`),
        });
        if (retval instanceof Promise)
            retval = await retval;
        return retval;
    }
    catch (e) {
        headline.insertAdjacentElement("afterend", pre(e, { backgroundColor: "brown" }));
    }
}
