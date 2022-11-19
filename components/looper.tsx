import { jsx } from "../framework.js";
import Fancify from "./fancify.js";

export default function () {
  const arr = [5, 6, 8];
  return (
    <div class="looper">
      {arr.map(each => (
        <Fancify x={each}>Fancier </Fancify>
      ))}
    </div>
  );
}
