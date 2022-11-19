import { jsx } from "../framework.js";
export default function ({ x, children }) {
    return (jsx("div", { style: "font-size: large" },
        children,
        " ",
        x));
}
