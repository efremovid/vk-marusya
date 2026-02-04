import type { BaseInputProps } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const BaseInput = ({
  name,
  label,
  className,
  icon,
  placeholder,
  isDisabled,
  isError,
  type = "text",
  defaultValue,
  value,
  required = false,
  onChange,
  onBlur,
  ...props
}: BaseInputProps) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="" />
      <input
        {...props}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={classNames(
          styles.baseInput,
          className,
          isError && styles.inputError
        )}
        disabled={isDisabled}
        placeholder={placeholder}
        type={type}
        aria-invalid={isError}
        aria-required={required}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};
