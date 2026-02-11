import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  theme: "primary" | "disabled" | "menu" | "link";
  widthVariant?: "default" | "full" | "icon" | 'small';
  isActive?: boolean;
}

export const Button = ({
  children,
  theme,
  text,
  isActive,
  className,
  widthVariant = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.common,
        styles[theme],
        styles[widthVariant],
        isActive && styles.isActive,
        className,
      )}
      {...props}
    >
      {text || children}
    </button>
  );
};
