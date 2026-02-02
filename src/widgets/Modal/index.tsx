import { Button } from "../../shared/ui/Button";
import { BaseInput } from "../../shared/ui/BaseInput/BaseInput";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import type { IModalData } from "../../shared/types";
// import type { IModalData } from "../../shared/types/modal";

interface ModalProps {
  data: IModalData;
  onClose: () => void;
}

const Modal = ({ data, onClose }: ModalProps) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.container}>
        <h2>МАРУСЯ</h2>
        {data.formTitle && <h3>{data.formTitle}</h3>}
        {data.formFields.map((input) => (
          <BaseInput {...input} />
        ))}
        <Button onClick={data.buttonAction} theme="primary" widthVariant="full">
          {data.buttonText}
        </Button>
        <Link to={data.linkRef}>{data.linkText}</Link>
      </div>
    </>
  );
};

export default Modal;
