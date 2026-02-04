import type { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ModalProps {
  onClose?: () => void;
  children?: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
