import { IState, jsx } from "../lib/render/framework.js";

export default function ({ x, children }: { x: any; children?: any }, { useState }: IState) {
  const [f, setf] = useState("large");

  if (!children) {
    console.warn("Fancify needs children");
    return <div></div>;
  } else console.log("good");

  const toggle = () => setf(f === "large" ? "small" : "large");

  return (
    <div style={`font-size: ${f}`} onClick={toggle}>
      {children} {x}
    </div>
  );
}
