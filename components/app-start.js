import { jsx } from "../asdf.js";
import Under from "./Under.js";
export default function () {
    console.log("app-start this", this);
    return (jsx("span", null,
        jsx("span", null, "yee"),
        jsx(Under, { x: 5 })));
}
