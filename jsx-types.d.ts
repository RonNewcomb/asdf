declare namespace JSX {
  interface MostElements {
    style?: string;
    class?: string;
    onClick?: (event: MouseEvent) => any;
    onClickCapture?: (event: MouseEvent) => any;
    onKeyDown?: (event: KeyboardEvent) => any;
    onKeyDownCapture?: (event: KeyboardEvent) => any;
  }
  interface ButtonTypes {
    type: "button" | "submit";
  }

  interface IntrinsicElements {
    div: MostElements;
    span: MostElements;
    button: MostElements | ButtonTypes;
    br: {};
  }
}
