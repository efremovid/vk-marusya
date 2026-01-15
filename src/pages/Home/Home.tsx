import React, { useState } from "react";
import Modal from "../../widgets/Modal";
import type { IModalData } from "../../shared/types";
import IconInputSvg from "../../shared/icons/IconInput.svg";
import IconPassword from "../../shared/icons/IconPassword.svg";

const Home = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  const data: IModalData = {
    formTitle: "вход",
    formFields: [
      {
        icon: IconInputSvg,
        required: true,
        type: "text",
        isError: false,
        placeholder: "Электронная почта",
      },
      {
        icon: IconPassword,
        required: true,
        type: "password",
        isError: false,
        placeholder: "Введите пароль",
      },
    ],
    buttonText: "Войти",
    buttonAction: () => {},
    linkText: "Регистрация",
    linkRef: "/",
  };

  return (
    <div>
      <button onClick={handleClick}>ВОЙТИ</button>
      {isShowModal && <Modal data={data} />}
    </div>
  );
};

export default Home;
