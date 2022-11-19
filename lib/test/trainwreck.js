// elements ////////
function div(id, display) {
    const div = document.createElement("div");
    if (id)
        div.setAttribute("id", id);
    if (display)
        div.style.display = display;
    return div;
}
function pre(innerText) {
    const el = document.createElement("pre");
    el.style.margin = "16";
    if (innerText)
        el.innerText = innerText;
    return el;
}
function iframe(id) {
    const el = document.createElement("iframe");
    if (id)
        el.setAttribute("name", id);
    if (id)
        el.setAttribute("title", id);
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
    let formatted = "";
    let indent = "";
    xml.split(/>\s*</).forEach(function (node) {
        if (node.match(/^\/\w/))
            indent = indent.substring(tab.length); // decrease indent by one 'tab'
        formatted += indent + "<" + node + ">\r\n";
        if (node.match(/^<?\w[^>]*[^\/]$/))
            indent += tab; // increase indent
    });
    return formatted.substring(1, formatted.length - 3);
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
// entry ////////
export async function test(fn) {
    const id = new Date().getTime().toString();
    const testarea = div();
    const frame = iframe(id);
    const userplayground = div(id);
    document.getElementById("test-output").appendChild(testarea).appendChild(frame).appendChild(userplayground);
    const shortDiff = (nestedThing1, nestedThing2) => diff(nestedThing1, nestedThing2, fn, id, testarea);
    return fn({ diff: shortDiff, id, playground: userplayground });
}
