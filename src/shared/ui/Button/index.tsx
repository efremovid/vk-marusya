import type { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  theme: 'primary' | 'disabled' 
  widthVariant:  'default' | 'full' 
}

export const Button = ({
  children,
  theme,
  className,
  widthVariant = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.common, styles[theme], styles[widthVariant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
