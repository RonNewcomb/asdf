import { IState, jsx } from "../framework.js";

export default function ({ x, children }: { x: any; children?: any }, { useState }: IState) {
  const [f, setf] = useState("large");

  const toggle = () => setf(f === "large" ? "small" : "large");

  return (
    <div style={`font-size: ${f}`} onClick={toggle}>
      {children} {x}
    </div>
  );
}
