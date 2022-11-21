import { jsx } from "../lib/render/framework.js";
export default function ({ x, children }, { useState }) {
    const [f, setf] = useState("large");
    if (!children) {
        console.warn("Fancify needs children");
        return jsx("div", null);
    }
    else
        console.log("good");
    const toggle = () => setf(f === "large" ? "small" : "large");
    return (jsx("div", { style: `font-size: ${f}`, onClick: toggle },
        children,
        " ",
        x));
}
