import { jsx } from "../asdf.js";

export default function Under({ x }: { x: number }) {
  //console.log("Under.this = ", this);
  //const [z, setz] = useState(17);

  const handler = () => console.log("clicked");

  return (
    <div onClick={handler}>
      number x={x}
      {/* and z={z} */}
    </div>
  );
}
