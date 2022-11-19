import { jsx, render } from "../asdf.js";
import Under from "./Under.js";

export default function AppStart(props: unknown, state: any) {
  console.log("app-start state", state);
  state.as = "appstart.state.as!";
  const [z, setZ] = state.useState(65);

  const pressed = () => setZ(z + 5);

  return (
    <span>
      <span>yee </span>
      <Under x={5} />
      <button onClick={pressed} onKeyDown={pressed}>
        z is {z}
      </button>
    </span>
  );
}

render("app-start", AppStart);
