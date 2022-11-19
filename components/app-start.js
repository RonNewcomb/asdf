import { jsx, renderJsx } from "../framework.js";
import BigForm from "./big-form.js";
import Looper from "./looper.js";
import Under from "./Under.js";
export default function AppStart(props, state) {
    console.log("app-start state", state);
    console.log("app-start props ", props);
    state.as = "appstart.state.as!";
    const [z, setZ] = state.useState(65);
    const pressed = () => setZ(z + 5);
    return (jsx("div", { class: "app-start" },
        jsx("span", null, "yee "),
        jsx(Under, { x: 5 }),
        jsx("button", { type: "button", onClick: pressed, onKeyDown: pressed },
            "z is ",
            z),
        jsx(Looper, null),
        jsx(BigForm, null),
        jsx("div", null, props.children)));
}
//renderFn("app-start", AppStart, { seed: "seeded value" });
renderJsx("app-start", jsx(AppStart, { seed: "seed value" },
    jsx("div", null,
        "inner",
        jsx("div", null, "asdfdsf"),
        "l;kj?")));
