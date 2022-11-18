import { jsx, render } from "../asdf.js";
import Under from "./Under.js";
export default function AppStart() {
    console.log("app-start this", this);
    //const [z, setZ] = useState(65);
    return (jsx("span", null,
        jsx("span", null, "yee "),
        jsx(Under, { x: 5 })));
}
render("app-start", AppStart);
