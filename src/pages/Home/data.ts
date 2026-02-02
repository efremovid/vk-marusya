import IconInputSvg from "../../shared/icons/IconInput.svg";
import IconPassword from "../../shared/icons/IconPassword.svg";
import type { IModalData } from "../../shared/types";

export const data: IModalData = {
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
