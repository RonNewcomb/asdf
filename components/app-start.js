import { jsx, render } from "../framework.js";
import Looper from "./looper.js";
import Under from "./Under.js";
export default function AppStart(props, state) {
    console.log("app-start state", state);
    state.as = "appstart.state.as!";
    const [z, setZ] = state.useState(65);
    const pressed = () => setZ(z + 5);
    return (jsx("span", null,
        jsx("span", null, "yee "),
        jsx(Under, { x: 5 }),
        jsx("button", { onClick: pressed, onKeyDown: pressed },
            "z is ",
            z),
        jsx(Looper, null)));
}
render("app-start", AppStart);
