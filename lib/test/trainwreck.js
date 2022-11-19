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
function attach(parent, childs) {
    childs.forEach(child => child && parent.appendChild(child));
    return parent;
}
document.body.appendChild(div("test-output"));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload)
    import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));
async function diff(nestedThing1, nestedThing2, testFn, id, container) {
    attach(container.appendChild(div("", "flex")), [
        pre(JSON.stringify(nestedThing1, undefined, 2)),
        pre(JSON.stringify(nestedThing2, undefined, 2)),
        testFn && pre(testFn.toString()),
    ]);
    return null;
}
function iframe(id) {
    const el = document.createElement("iframe");
    if (id)
        el.setAttribute("name", id);
    if (id)
        el.setAttribute("title", id);
    return el;
}
export async function test(fn) {
    const id = new Date().getTime().toString();
    const testarea = div();
    const frame = iframe(id);
    const userplayground = div(id);
    document.getElementById("test-output").appendChild(testarea).appendChild(frame).appendChild(userplayground);
    const shortDiff = (nestedThing1, nestedThing2) => diff(nestedThing1, nestedThing2, fn, id, testarea);
    return fn({ diff: shortDiff, id, playground: userplayground });
}
export function orThrow(message) {
    throw Error(message);
}
