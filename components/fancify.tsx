import { jsx } from "../framework.js";

export default function ({ x, children }: { x: any; children?: any }) {
  return (
    <div style="font-size: large">
      {children} {x}
    </div>
  );
}
