import { Button } from "../../shared/ui/Button/index";
import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import styles from "./styles.module.scss";
import IconInputSvg from "../../shared/icons/IconInput.svg";
import IconPassword from "../../shared/icons/IconPassword.svg";
import IconUser from '../../shared/icons/IconUser.svg'
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className={styles.container}>
      <h2>МАРУСЯ</h2>
      <BaseInput icon={IconInputSvg} placeholder="Электронная почта" />
      <BaseInput icon={IconUser} placeholder="Имя" />
      <BaseInput icon={IconUser} placeholder="Фамилия" />
      <BaseInput icon={IconPassword} placeholder="Пароль" />
      <BaseInput icon={IconPassword} placeholder="Подтвердите пароль" />
      <Button theme="primary" widthVariant="full">
        Зарегистрироваться
      </Button>
      <Link to={}>Есть учётка? Войди!</Link>
    </div>
  );
};

export default Registration;
