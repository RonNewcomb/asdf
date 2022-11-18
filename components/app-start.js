import { jsx, render } from "../asdf.js";
import Under from "./Under.js";
export default function AppStart(props, state) {
    console.log("app-start state", state);
    state.as = "x";
    //const [z, setZ] = useState(65);
    return (jsx("span", null,
        jsx("span", null, "yee "),
        jsx(Under, { x: 5 })));
}
render("app-start", AppStart);
