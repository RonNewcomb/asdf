import { jsx, JsxTree, renderJsx } from "../lib/render/framework.js";
import { orThrow, test } from "../lib/test/trainwreck.js";
import AppStart from "./app-start.js";

test(({ diff }) => {
  const result: JsxTree = <AppStart seed="foo" />;
  diff(result, jsx("div", { seed: "foo" }, []));
  const [topElement, tree] = renderJsx("testid", result)! || orThrow("failed to render");
  diff(topElement.innerHTML, "asdf");
});

test(({ diff }) => {
  const result: JsxTree = <AppStart seed="foo" />;
  diff(result, jsx("div", { seed: "foo" }, []));
  const [topElement, tree] = renderJsx("testid", result)! || orThrow("failed to render");
  diff(topElement.innerHTML, "asdf");
});
