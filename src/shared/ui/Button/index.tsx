import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  theme: "primary" | "disabled" | 'menu';
  widthVariant?: "default" | "full" | "icon";
  isActive?: boolean;
}

export const Button = ({
  children,
  theme,
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
      {children}
    </button>
  );
};
