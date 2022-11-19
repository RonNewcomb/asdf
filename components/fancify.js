import { jsx } from "../framework.js";
export default function ({ x, children }, { useState }) {
    const [f, setf] = useState("large");
    const toggle = () => setf(f === "large" ? "small" : "large");
    return (jsx("div", { style: `font-size: ${f}`, onClick: toggle },
        children,
        " ",
        x));
}
