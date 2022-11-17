import { jsx } from "../asdf.js";
import Under from "./Under.js";

export default function (this: any) {
  console.log("app-start this", this);
  //const [x, setX] = useState(65);
  return (
    <span>
      <span>yee</span>
      <Under x={5} />
    </span>
  );
}
