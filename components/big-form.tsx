import { IState, jsx } from "../framework.js";

export default function (props: unknown, { useState, render }: IState) {
  const [form, setForm] = useState({ name: "", email: "" });
  return (
    <form>
      <div>
        Name: <input type="text" value={form.name} onChange={e => render((form.name = e.target.value))} />
      </div>
      <div>
        Email: <input type="email" value={form.email} onChange={e => render((form.email = e.target.value))} />
      </div>
      <div>
        {form.name} @ {form.email}
      </div>
    </form>
  );
}
