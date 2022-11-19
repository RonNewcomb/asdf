import { jsx } from "../lib/render/framework.js";
import Fancify from "./fancify.js";
export default function (props, { useState }) {
    const [val, setVal] = useState("lkj");
    const arr = [5, 6, 8];
    return (jsx("div", { class: "looper", onClick: e => setVal("foo") }, arr.map(each => (jsx(Fancify, { x: each },
        "Fancier ",
        val,
        " ")))));
}
