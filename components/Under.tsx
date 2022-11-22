import { IState, jsx } from "../lib/render/framework.js";

export default function Under({ aNumericInput }: { aNumericInput: number }, { useState }: IState) {
  console.log("Under.state = ");
  const [counter, setCounter] = useState(17);
  const [y, sety] = useState(44);

  const handler = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };

  const h2 = (event: Event) => {
    sety(y + 7);
    event.stopPropagation();
  };

  return (
    <div onClick={handler}>
      number inputted = {aNumericInput}
      <br />
      and state.counter={counter}
      <br />
      <button type="button" onClick={h2}>
        Y is {y} and also the other handler
      </button>
    </div>
  );
}
