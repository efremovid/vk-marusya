import type { ReactNode } from "react";
import styles from './styles.module.scss'

interface HeaderProps {
  children: ReactNode;
  
}

const Header = ({ children }: HeaderProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Header;
