import { jsx } from "../asdf.js";
export default function ({ x }) {
    console.log("Under.this = ", this);
    return (jsx("div", null,
        "number x=",
        x));
}
