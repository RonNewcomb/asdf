import { jsx, render } from "../asdf.js";
import Under from "./Under.js";

export default function AppStart(props: unknown, state: any) {
  console.log("app-start state", state);
  state.as = "x";
  //const [z, setZ] = useState(65);
  return (
    <span>
      <span>yee </span>
      <Under x={5} />
    </span>
  );
}

render("app-start", AppStart);
