import styles from "./Footer.module.scss";
import ok from "../../shared/icons/ok.svg";
import you from "../../shared/icons/youtube.svg";
import vk from "../../shared/icons/vk.svg";
import tg from "../../shared/icons/telegram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        {[ok, you, vk, tg].map((icon) => (
          <img src={icon} alt="" />
        ))}
      </div>
    </footer>
  );
};
export default Footer;
