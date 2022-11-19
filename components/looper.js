import { jsx } from "../framework.js";
export default function () {
    const arr = [5, 6, 8];
    return (jsx("div", { class: "looper" }, arr.map(each => (jsx("span", null, each)))));
}
