import { jsx, JsxSymbol, JsxTree, renderJsx } from "../lib/render/framework.js";
import { orThrow, test, TestCaseSettings } from "../lib/test/trainwreck.js";
import ComponentUnderTest from "./fancify.js";

const isolated: TestCaseSettings = { test, useIframe: true };

test("fancify test A", ({ diff, id, playground, name }) => {
  const result: JsxTree = <ComponentUnderTest x={99} />;
  diff(result, [JsxSymbol, "div", { seed: "foo" }, []]);
  const [topElement, tree] = renderJsx(id, result)! || orThrow(name + " failed to render");
  diff(
    topElement.innerHTML,
    `<span>yee </span><div>number x=5<br>and state.counter=17<br><button type="button">Y is 44 and also the other handler</button></div><button type="button">z is 65</button><div class="looper">   <array-items>      <div style="font-size: large">         <array-items>Fancier lkj </array-items> 5</div>         <div style="font-size: large">            <array-items>Fancier lkj </array-items> 6</div>            <div style="font-size: large">               <array-items>Fancier lkj </array-items> 8</div>            </array-items>         </div>         <form>            <div>Name: <input type="text" value="">         </div>         <div>Email: <input type="email" value="">      </div>      <div> @ </div>   </form>   <div>   </div>`
  );
});

isolated.test("fancify test B", ({ diff, id, playground, name, orThrow }) => {
  const result: JsxTree = <ComponentUnderTest x={99} />;
  diff(result, [JsxSymbol, "div", { seed: "foo" }, []]);
  const [topElement, tree] = renderJsx(id, result)! || orThrow();
  diff(
    topElement.innerHTML,
    `<span>yee </span><div>number x=5<br>and state.counter=17<br><button type="button">Y is 44 and also the other handler</button></div><button type="button">z is 65</button><div class="looper">   <array-items>      <div style="font-size: large">         <array-items>Fancier lkj </array-items> 5</div>         <div style="font-size: large">            <array-items>Fancier lkj </array-items> 6</div>            <div style="font-size: large">               <array-items>Fancier lkj </array-items> 8</div>            </array-items>         </div>         <form>            <div>Name: <input type="text" value="">         </div>         <div>Email: <input type="email" value="">      </div>      <div> @ </div>   </form>   <div>   </div>`
  );
});