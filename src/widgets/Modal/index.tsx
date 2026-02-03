import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";

interface ModalProps {
  onClose?: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Outlet />
      </div>
    </div>
  );
};

export default Modal;
