import { jsx } from "../asdf.js";
import Under from "./Under.js";

export default function AppStart(this: any) {
  console.log("app-start this", this);
  //const [z, setZ] = useState(65);
  return (
    <span>
      <span>yee </span>
      <Under x={5} />
    </span>
  );
}
