import { Button } from "../../shared/ui/Button";
import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import styles from "./styles.module.scss";
import IconInputSvg from "../../shared/icons/IconInput.svg";
import IconPassword from "../../shared/icons/IconPassword.svg";
import IconUser from "../../shared/icons/IconUser.svg";
import { useState } from "react";

interface RegistrationFormData {
  email: string;
  name: string;
  surname: string;
  password: string;
  passwordDouble: string;
}

interface RegistrationProps {
  handleShowRegModal?: () => void;
}

const Registration = ({ handleShowRegModal }: RegistrationProps) => {
  const [userData, setUserData] = useState<RegistrationFormData>({
    email: "",
    name: "",
    surname: "",
    password: "",
    passwordDouble: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://cinemaguide.skillbox.cc/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: userData.email,
          name: userData.name,
          surname: userData.surname,
          password: userData.password,
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
    <form onSubmit={handleSubmit} className={styles.container}>
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
        type="submit"
        theme="primary"
        widthVariant="full"
        text="Зарегистрироваться"
      >
        Зарегистрироваться
      </Button>
      <Button
        onClick={handleShowRegModal}
        theme="link"
        widthVariant="full"
        text="Есть учётка? Заходи!"
      />
    </form>
  );
};

export default Registration;
