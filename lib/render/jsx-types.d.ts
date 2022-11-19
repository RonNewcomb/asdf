declare namespace JSX {
  interface MostElements {
    style?: string;
    class?: string;
    onClick?: (event: MouseEvent) => any;
    onClickCapture?: (event: MouseEvent) => any;
    onKeyDown?: (event: KeyboardEvent) => any;
    onKeyDownCapture?: (event: KeyboardEvent) => any;
    onChange?: (event: ValuedEvent) => any;
    onChangeCapture?: (event: ValuedEvent) => any;
  }
  interface ButtonTypes {
    type: "button" | "submit";
  }
  interface InputTypes {
    type?: "text" | "email" | "number";
    value?: any;
  }
  interface ValuedEvent extends Event {
    currentTarget: EventTarget & { value: any };
    target: EventTarget & { value: any };
  }

  // interface AnyChildren {
  //   children: any;
  // }
  interface IntrinsicElements /*extends HTMLElementTagNameMap, AnyChildren*/ {
    div: MostElements;
    span: MostElements;
    button: MostElements & ButtonTypes;
    br: {};
    form: MostElements;
    input: MostElements & InputTypes;
  }
}
