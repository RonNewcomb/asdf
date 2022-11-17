import { jsx } from "../asdf.js";

export default function (this: any, { x }: { x: number }) {
  console.log("Under.this = ", this);
  //const [z, setz] = useState(17);
  return (
    <div>
      number x={x}
      {/* and z={z} */}
    </div>
  );
}
