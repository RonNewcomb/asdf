import { IState, jsx } from "../asdf.js";

export default function Under({ x }: { x: number }, state: IState) {
  console.log("Under.state = ", state);
  const [counter, setCounter] = state.useState(17);

  const handler = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };

  return (
    <div onClick={handler}>
      number x={x}
      and state.counter={counter}
    </div>
  );
}
