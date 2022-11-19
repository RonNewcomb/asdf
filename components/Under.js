import { jsx } from "../asdf.js";
export default function Under({ x }, { useState }) {
    console.log("Under.state = ");
    const [counter, setCounter] = useState(17);
    const [y, sety] = useState(44);
    const handler = () => {
        console.log("clicked", counter);
        setCounter(counter + 1);
    };
    const h2 = (event) => {
        sety(y + 7);
        event.stopPropagation();
    };
    return (jsx("div", { onClick: handler },
        "number x=",
        x,
        jsx("br", null),
        "and state.counter=",
        counter,
        jsx("br", null),
        jsx("button", { onClick: h2 },
            "Y is ",
            y,
            " and also the other handler")));
}
