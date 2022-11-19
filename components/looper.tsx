import { IState, jsx } from "../lib/render/framework.js";
import Fancify from "./fancify.js";

export default function (props: unknown, { useState }: IState) {
  const [val, setVal] = useState("lkj");

  const arr = [5, 6, 8];
  return (
    <div class="looper" onClick={e => setVal("foo")}>
      {arr.map(each => (
        <Fancify x={each}>Fancier {val} </Fancify>
      ))}
    </div>
  );
}
