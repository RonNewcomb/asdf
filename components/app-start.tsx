import { IState, jsx, renderJsx } from "../lib/render/framework.js";
import BigForm from "./big-form.js";
import Looper from "./looper.js";
import Under from "./Under.js";

export default function AppStart(props: { seed: string; children?: any }, state: IState & { as: string }) {
  console.log("app-start state", state);
  console.log("app-start props ", props);
  state.as = "appstart.state.as!";
  const [z, setZ] = state.useState(65);

  const pressed = () => setZ(z + 5);

  return (
    <div class="app-start">
      <span>yee </span>
      <Under aNumericInput={5} />
      <button type="button" onClick={pressed} onKeyDown={pressed}>
        z is {z}
      </button>
      <Looper />
      <BigForm />
      <div>{props.children}</div>
    </div>
  );
}

//renderFn("app-start", AppStart, { seed: "seeded value" });
renderJsx(
  "app-start",
  <AppStart seed={"seed value"}>
    <div>
      inner<div>asdfdsf</div>l;kj?
    </div>
  </AppStart>
);
