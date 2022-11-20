import { jsx, renderJsx } from "../lib/render/framework.js";
import { orThrow, test } from "../lib/test/trainwreck.js";
import AppStart from "./app-start.js";
const isolated = { test, useIframe: true };
test(({ diff, id, playground }) => {
    const result = jsx(AppStart, { seed: "foo" });
    diff(result, jsx("div", { seed: "foo" }, []));
    const [topElement, tree] = renderJsx(id, result) || orThrow("failed to render");
    diff(topElement.innerHTML, `<span>yee </span><div>number x=5<br>and state.counter=17<br><button type="button">Y is 44 and also the other handler</button></div><button type="button">z is 65</button><div class="looper">   <array-items>      <div style="font-size: large">         <array-items>Fancier lkj </array-items> 5</div>         <div style="font-size: large">            <array-items>Fancier lkj </array-items> 6</div>            <div style="font-size: large">               <array-items>Fancier lkj </array-items> 8</div>            </array-items>         </div>         <form>            <div>Name: <input type="text" value="">         </div>         <div>Email: <input type="email" value="">      </div>      <div> @ </div>   </form>   <div>   </div>`);
});
isolated.test(({ diff, id, playground }) => {
    const result = jsx(AppStart, { seed: "foo" });
    diff(result, jsx("div", { seed: "foo" }, []));
    const [topElement, tree] = renderJsx(id, result) || orThrow("failed to render");
    diff(topElement.innerHTML, `<span>yee </span><div>number x=5<br>and state.counter=17<br><button type="button">Y is 44 and also the other handler</button></div><button type="button">z is 65</button><div class="looper">   <array-items>      <div style="font-size: large">         <array-items>Fancier lkj </array-items> 5</div>         <div style="font-size: large">            <array-items>Fancier lkj </array-items> 6</div>            <div style="font-size: large">               <array-items>Fancier lkj </array-items> 8</div>            </array-items>         </div>         <form>            <div>Name: <input type="text" value="">         </div>         <div>Email: <input type="email" value="">      </div>      <div> @ </div>   </form>   <div>   </div>`);
});
