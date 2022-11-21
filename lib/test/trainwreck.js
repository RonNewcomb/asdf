// elements ////////
function styling(el, [key, value]) {
    el.style[key] = value;
}
function div(id, display, style) {
    const el = document.createElement("div");
    if (id)
        el.setAttribute("id", id);
    if (display)
        el.style.display = display;
    if (style)
        Object.entries(style).forEach(entry => styling(el, entry));
    return el;
}
function pre(innerText, style) {
    const el = document.createElement("pre");
    el.style.padding = "16";
    if (innerText)
        el.innerText = innerText;
    if (style)
        Object.entries(style).forEach(entry => styling(el, entry));
    return el;
}
function iframe(id, style) {
    const el = document.createElement("iframe");
    el.setAttribute("width", "99%");
    if (id)
        el.setAttribute("name", id);
    if (id)
        el.setAttribute("title", id);
    if (style)
        Object.entries(style).forEach(entry => styling(el, entry));
    return el;
}
// helpers /////////
function attach(parent, childs) {
    childs.forEach(child => child && parent.appendChild(child));
    return parent;
}
// tools /////////
export function orThrow(message) {
    throw Error(message);
}
function formatXml(xml, tab = "   ") {
    const formatted = [];
    let indent = "";
    xml.split(/>\s*</).forEach(node => {
        if (node.match(/^\/\w/))
            indent = indent.substring(tab.length); // decrease indent by one 'tab'
        formatted.push(indent + "<" + node + ">\r\n");
        if (node.match(/^<?\w[^>]*[^\/]$/))
            indent += tab; // increase indent
    });
    const bigString = formatted.join("");
    return bigString.substring(1, bigString.length - 3);
}
async function diff(nestedThing1, nestedThing2, testFn, id, container) {
    attach(container.appendChild(div("", "flex")), [
        pre(typeof nestedThing1 === "string" ? formatXml(nestedThing1) : JSON.stringify(nestedThing1, undefined, 2)),
        pre(typeof nestedThing2 === "string" ? formatXml(nestedThing2) : JSON.stringify(nestedThing2, undefined, 2)),
        testFn && pre(testFn.toString()),
    ]);
    return null;
}
// init ////////
document.body.appendChild(div("test-output"));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload)
    import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));
const globalTestCaseSettings = {
    test,
    useIframe: false,
};
export async function test(fn) {
    const id = new Date().getTime().toString();
    const testarea = div();
    document.getElementById("test-output").appendChild(testarea);
    testarea.appendChild(document.createElement("hr"));
    const playgroundWrapper = div(undefined, undefined, { border: "2px inset", padding: "5px" });
    const userplayground = div(id);
    if ((this || globalTestCaseSettings).useIframe) {
        const frame = iframe(id);
        testarea.appendChild(frame);
        frame.contentWindow.document.body.appendChild(userplayground);
    }
    else
        testarea.appendChild(playgroundWrapper).appendChild(userplayground);
    const shortDiff = (nestedThing1, nestedThing2) => diff(nestedThing1, nestedThing2, fn, id, testarea);
    try {
        return fn({ diff: shortDiff, id, playground: userplayground });
    }
    catch (e) {
        testarea.appendChild(pre(e, { "background-color": "brown" }));
    }
}
