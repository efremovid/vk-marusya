import { memo } from "react";
import cn from "classnames";
import type { BaseInputProps } from "./types";
import styles from "./styles.module.scss";


export const BaseInput = memo(
  ({
    name,
    label,
    className,
    icon,
    placeholder,
    isDisabled,
    isError,
    type = "text",
    defaultValue,
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
          className={cn(
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
        />
      </div>
    );
  }
);
