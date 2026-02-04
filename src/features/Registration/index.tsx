import { Button } from "../../shared/ui/Button";
import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import styles from "./styles.module.scss";
import IconInputSvg from "../../shared/icons/IconInput.svg";
import IconPassword from "../../shared/icons/IconPassword.svg";
import IconUser from "../../shared/icons/IconUser.svg";
import { useState } from "react";

interface RegistrationProps {
  handleChangeAuth: () => void;
}

interface RegistrationFormData {
  email: string;
  name: string;
  surname: string;
  password: string;
}

const Registration = ({ handleChangeAuth }: RegistrationProps) => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    passwordDouble: "",
  });

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleClick = async (data: RegistrationFormData) => {
    try {
      const response = await fetch("https://cinemaguide.skillbox.cc/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          surname: data.surname,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка регистрации");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    setUserData({
      email: "",
      name: "",
      surname: "",
      password: "",
      passwordDouble: "",
    });
  };

  console.log(userData);

  return (
    <div className={styles.container}>
      <h2>МАРУСЯ</h2>
      <BaseInput
        value={userData.email}
        onChange={handleChange}
        icon={IconInputSvg}
        name="email"
        placeholder="Электронная почта"
      />
      <BaseInput
        value={userData.name}
        onChange={handleChange}
        icon={IconUser}
        name="name"
        placeholder="Имя"
      />
      <BaseInput
        value={userData.surname}
        onChange={handleChange}
        icon={IconUser}
        name="surname"
        placeholder="Фамилия"
      />
      <BaseInput
        value={userData.password}
        onChange={handleChange}
        icon={IconPassword}
        name="password"
        placeholder="Пароль"
        type="password"
      />
      <BaseInput
        value={userData.passwordDouble}
        onChange={handleChange}
        icon={IconPassword}
        name="passwordDouble"
        placeholder="Подтвердите пароль"
        type="password"
      />
      <Button
        onClick={() => handleClick(userData)}
        theme="primary"
        widthVariant="full"
      >
        Зарегистрироваться
      </Button>
      <button onClick={handleChangeAuth}>Есть учётка? Войди в аккаунт!</button>
    </div>
  );
};

export default Registration;
