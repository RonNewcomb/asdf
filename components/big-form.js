import { jsx } from "../lib/render/framework.js";
export default function (props, { useState, render }) {
    const [form, setForm] = useState({ name: "", email: "" });
    return (jsx("form", null,
        jsx("div", null,
            "Name: ",
            jsx("input", { type: "text", value: form.name, onChange: e => render((form.name = e.target.value)) })),
        jsx("div", null,
            "Email: ",
            jsx("input", { type: "email", value: form.email, onChange: e => render((form.email = e.target.value)) })),
        jsx("div", null,
            form.name,
            " @ ",
            form.email)));
}
