import { Button } from "../../shared/ui/Button";
import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import styles from "./styles.module.scss";
import IconInputSvg from "../../shared/icons/IconInput.svg";
import IconPassword from "../../shared/icons/IconPassword.svg";
import { useState } from "react";

interface AuthProps {
  handleShowRegModal: () => void;
}

const Auth = ({ handleShowRegModal }: AuthProps) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://cinemaguide.skillbox.cc/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
          }),
        },
      );

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
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2>МАРУСЯ</h2>
      <BaseInput
        name="email"
        value={userData.email}
        onChange={handleChange}
        icon={IconInputSvg}
        placeholder="Электронная почта"
        type="email"
      />
      <BaseInput
        name="password"
        value={userData.password}
        onChange={handleChange}
        icon={IconPassword}
        placeholder="Пароль"
        type="password"
      />
      <Button theme="primary" widthVariant="full" text="Войти" />
      <Button theme="link" text="К регистрации!" onClick={handleShowRegModal} />
    </form>
  );
};

export default Auth;
