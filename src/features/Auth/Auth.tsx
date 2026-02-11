import { Button } from "../../shared/ui/Button";
import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import styles from "./styles.module.scss";
import IconInputSvg from "../../shared/icons/IconInput.svg";
import IconPassword from "../../shared/icons/IconPassword.svg";

interface AuthProps {
  handleShowRegModal: () => void;
}

const Auth = ({ handleShowRegModal }: AuthProps) => {
  return (
    <div className={styles.container}>
      <h2>МАРУСЯ</h2>
      <BaseInput icon={IconInputSvg} placeholder="Электронная почта" />
      <BaseInput icon={IconPassword} placeholder="Пароль" />
      <Button theme="primary" widthVariant="full" text="Войти" />
      <Button theme="link" text="К регистрации!" onClick={handleShowRegModal} />
    </div>
  );
};

export default Auth;
