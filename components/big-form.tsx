import { IState, jsx } from "../lib/render/framework.js";

export interface IForm {
  name: string;
  email: string;
  phone: number;
  good: boolean;
  verygood?: boolean;
  subobject: IForm;
  maybeObject?: IForm;
  arrayObjects: IForm[];
}

export default function (props: unknown, { useState, render }: IState) {
  const [form, setForm] = useState<IForm>({ name: "", email: "" } as IForm);
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
