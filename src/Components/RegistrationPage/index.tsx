import React, { FC } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import RegForm from "./RegForm";
import style from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
  return (
    <>
      <div className={style["reg-page_wrapper"]}>
        <Header />
        <RegForm/>
        <Footer />
      </div>
    </>
  );
};

export default RegistrationPage;