import { Button } from "../../shared/ui/Button";
import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import styles from "./styles.module.scss";
import IconInputSvg from "../../shared/icons/IconInput.svg";
import IconPassword from "../../shared/icons/IconPassword.svg";


interface AuthProps {
  handleChangeAuth: () => void
}

const Auth = ({handleChangeAuth}: AuthProps) => {
  return (
    <div className={styles.container}>
      <h2>МАРУСЯ</h2>
      <BaseInput icon={IconInputSvg} placeholder="Электронная почта" />
      <BaseInput icon={IconPassword} placeholder="Пароль" />
      <Button theme="primary" widthVariant="full">
        Войти
      </Button>
      <button onClick={handleChangeAuth}>регистрация</button>
    </div>
  );
};

export default Auth;
