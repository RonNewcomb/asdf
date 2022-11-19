function div(id, display) {
    const div = document.createElement("div");
    if (id)
        div.setAttribute("id", id);
    if (display)
        div.style.display = display;
    return div;
}
function pre() {
    const el = document.createElement("pre");
    el.style.margin = "16";
    return el;
}
document.body.appendChild(div("test-output"));
const specFileToAutoload = new URL(location.href).search.slice(1);
if (specFileToAutoload)
    import("./" + specFileToAutoload).catch(e => document.body.insertAdjacentText("afterbegin", e));
export async function diff(nestedThing1, nestedThing2, testFn) {
    const container = document.getElementById("test-output");
    const outer = div("", "flex");
    const left = pre();
    const right = pre();
    left.innerText = JSON.stringify(nestedThing1, undefined, 2);
    right.innerText = JSON.stringify(nestedThing2, undefined, 2);
    outer.appendChild(left);
    outer.appendChild(right);
    if (testFn) {
        const code = pre();
        code.innerText = testFn.toString();
        outer.appendChild(code);
    }
    container?.appendChild(outer);
    return null;
}
export async function test(fn) {
    const shortDiff = (nestedThing1, nestedThing2) => diff(nestedThing1, nestedThing2, fn);
    return fn({ diff: shortDiff });
}
export function orThrow(message) {
    throw Error(message);
}
