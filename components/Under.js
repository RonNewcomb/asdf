import { jsx } from "../asdf.js";
export default function Under({ x }) {
    //console.log("Under.this = ", this);
    //const [z, setz] = useState(17);
    return (jsx("div", null,
        "number x=",
        x));
}
