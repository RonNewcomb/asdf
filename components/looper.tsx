import { jsx } from "../framework.js";

export default function () {
  const arr = [5, 6, 8];
  return (
    <div class="looper">
      {arr.map(each => (
        <span>{each}</span>
      ))}
    </div>
  );
}
