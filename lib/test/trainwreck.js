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
// helpers /////////
function attach(parent, childs) {
    childs.forEach(child => child && parent.appendChild(child));
    return parent;
}
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
const styleSheet = document.createElement("style");
styleSheet.innerText = ".testarea { border: 1px solid white; border-radius: 10px; margin: 5px; padding: 5px; margin-bottom: 3em; background-color: darkblue }";
document.body.appendChild(styleSheet);
document.body.appendChild(div({ id: "test-output" }));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload)
    import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));
export const globalTestCaseSettings = {
    test,
    useIframe: false,
};
export async function test(name, fn) {
    const id = new Date().getTime().toString();
    const testarea = div({ class: "testarea" });
    testarea.appendChild(div({ innerText: name }));
    document.getElementById("test-output").appendChild(testarea);
    const playgroundWrapper = div(undefined, { border: "2px inset", padding: "5px" });
    const userplayground = div({ id });
    if ((this || globalTestCaseSettings).useIframe) {
        const frame = iframe(id);
        console.log("using", { frame });
        testarea.appendChild(frame);
        frame.contentWindow.document.body.appendChild(userplayground);
    }
    else
        testarea.appendChild(playgroundWrapper).appendChild(userplayground);
    const shortDiff = (nestedThing1, nestedThing2) => diff(nestedThing1, nestedThing2, fn, id, testarea);
    try {
        return fn({
            diff: shortDiff,
            id,
            playground: userplayground,
            name,
            orThrow: (msg = "failed to render") => orThrow(`${name}: ${msg}`),
        });
    }
    catch (e) {
        testarea.insertAdjacentElement("afterbegin", pre(e, { backgroundColor: "brown" }));
    }
}
