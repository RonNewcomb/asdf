import { jsx } from "../asdf.js";
export default function Under({ x }, state) {
    console.log("Under.state = ", state);
    const [counter, setCounter] = state.useState(17);
    const handler = () => {
        console.log("clicked", counter);
        setCounter(counter + 1);
    };
    return (jsx("div", { onClick: handler },
        "number x=",
        x,
        "and state.counter=",
        counter));
}
