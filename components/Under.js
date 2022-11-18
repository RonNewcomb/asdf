import { jsx, use } from "../asdf.js";
// interface IStateInput<T> {
//   privates: any[];
//   privateIndex: number;
//   render: (i: number, val: T) => void;
// }
// interface IStateInputs extends IStateInput<any> {}
// function use<T>(state: IState, init: T): [T, (newVal: T) => void] {
//   const i = state.privatesIndex++;
//   if (state.privates.length - 1 < i) state.privates[i] = init;
//   const gettor = state.privates[i];
//   const settor = (val: T) => state.render(i, val);
//   return [gettor, settor];
// }
export default function Under({ x }, state) {
    console.log("Under.state = ", state);
    const [counter, setCounter] = use(state, 17);
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
