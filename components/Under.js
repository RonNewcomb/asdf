import { jsx } from "../asdf.js";
export default function Under({ x }) {
    //console.log("Under.this = ", this);
    //const [z, setz] = useState(17);
    const handler = () => console.log("clicked");
    return (jsx("div", { onClick: handler },
        "number x=",
        x));
}
