import React, { FC, useState } from "react";
import style from "./RegForm.module.scss";
import RegTextInput from "../../Common/Forms/RegTextInput";

const RegForm: FC = () => {
  // const [form, setForm] = useState<any>({ name: 'Vasil', surname: 'Petrov', email: 'vasil@none.ru', checked: false, password: '', repeatPassword: '' });
  const [name, setName] = useState<string>("Vasil");
  const [surname, setSurname] = useState<string>("Petrov");
  const [email, setEmail] = useState<string>("vasil@none.ru");
  const [checked, setChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const clearAll = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    alert("Очищено");
  };

  const checkPass = (password1: string, repeatPassword1: string) => {
    if (password1 !== repeatPassword1) {
      setMessage("пароли не совпадают");
    } else {
      setMessage("");
    }
  };

  return (
    <>
      <div className={style["flexbox-container"]}>
        <form className={style.form} name="reg_form">
          <div className="head_form">
            <h2>Форма регистрации</h2>
          </div>
          <RegTextInput
            title="Ваше имя"
            type="text"
            name="name"
            value={name}
            setForm={setName}
          />
          <RegTextInput
            title="Ваша фамилия :"
            type="text"
            name="surname"
            value={surname}
            setForm={setSurname}
          />
          <RegTextInput
            title="Ваш email :"
            type="email"
            name="email"
            value={email}
            setForm={setEmail}
          />
          <RegTextInput
            title="Ваш пароль :"
            type="password"
            name="password"
            value={password}
            setForm={setPassword}
            checkPass={checkPass}
            pass={password}
            repPass={repeatPassword}
          />
          <RegTextInput
            title="Повторите пароль :"
            type="password"
            name="repeatPassword"
            value={repeatPassword}
            setForm={setRepeatPassword}
            checkPass={checkPass}
            pass={password}
            repPass={repeatPassword}
          />

          <div>очистить</div>
          <div>{message}</div>

          <input
            type="checkbox"
            onChange={(event) => {
              setChecked(true);
              if (event.target.checked) clearAll();
            }}
            defaultChecked={checked}
          />

          <button
            type="button"
            onClick={() => {
              console.log(
                `${name},${surname},${email},${password},${repeatPassword}`
              );
            }}>
            Отправить
          </button>
        </form>
      </div>
    </>
  );
};

export default RegForm;

// {
//   /* <div>Повторите пароль :</div>
// <input type='password' name='repeatPassword' value={form.repeatPassword} onChange={(event => { setForm({ ...form, repeatPassword: event.target.value }); console.log(form.repeatPassword); checkPass(form.password, form.repeatPassword) })} /> */
// }
// {
//   /* <div>Ваш пароль : </div>
//  <input type='password' name='password' value={form.password} onChange={(event => { setForm({ ...form, password: event.target.value }); console.log(form.password); checkPass(form.password, form.repeatPassword) })} /> */
// }
// {
//   /* <input type='text' name='name' value={form.name} onChange={((event) => { setForm({ ...form, name: event.target.value }); console.log(form.name) })} /> */
// }
// {
//   /* <input type='text' name='surname' value={form.surname} onChange={((event) => { setForm({ ...form, surname: event.target.value }); console.log(form.surname) })} /> */
// }
// {
//   /* <input type='email' name='email' value={form.email} onChange={(event => { setForm({ ...form, email: event.target.value }); console.log(form.email) })} /> */
// }
