import React, { FC } from "react";
import style from "./RegTextInput.module.scss";

interface IProps {
  title: string;
  setForm: any;
  value: string;
  type: string;
  name: string;
  checkPass?: any;
  pass?: any;
  repPass?: any;
}

const RegTextInput: FC<IProps> = (props: IProps) => {
  const {
    title,
    setForm,
    type,
    name,
    value,
    checkPass,
    pass,
    repPass,
  } = props;

  return (
    <>
      <div>{title}</div>
      <input
        className={`${!value || value === "" ? style.input : ""}`}
        type={type}
        name={name}
        value={value}
        onChange={(event) => {
          setForm(event.currentTarget.value);
          console.log(event.currentTarget.value);
          if (checkPass) checkPass(pass, repPass);
        }}
      />
    </>
  );
};

export default RegTextInput;
