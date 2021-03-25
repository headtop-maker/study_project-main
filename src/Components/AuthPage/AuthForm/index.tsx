import React, { FC, useState } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div className={style["auth-form_wrapper"]}>
        <form className={style.form}>
          <h1>Авторизация</h1>

          <TextInput setLogin={setLogin} login={login} />
          <PasswordInput setPassword={setPassword} password={password} />

          <button
            type="button" onClick={() => {console.log({ login, password }, "Объект авторизации");setLogin("");setPassword("");
            }}>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
