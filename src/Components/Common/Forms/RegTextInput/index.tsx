import React, { FC } from "react";
import style from "./RegTextInput.module.scss";

interface IProps {
  title: string;
  setForm: any;
  value: string;
  type: string;
  name:string;
  checkPass?: any;
  pass?:any;
  rep_pass?:any
}

const RegTextInput: FC<IProps> = (props: IProps) => {
  const { title, setForm, type,name, value, checkPass,pass,rep_pass } = props;
  let classInput:any ='';
  if(!value||value ==='')classInput=style.input;

  return (
    <>
      <div>{title}</div>
      <input className={classInput} type={type}
        name= {name}
        value={value}
        onChange={
          (event) => {
            setForm(event.currentTarget.value);
            console.log(value);
            if(checkPass)checkPass(pass,rep_pass)
          }

        } />
    </>
  );
};

export default RegTextInput;
