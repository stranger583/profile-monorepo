"use client";

import { ReactNode } from "react";
import { cN } from "./utils/utils";
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline'
  color?: 'primary' | 'secondary' | 'light' | 'dark' | 'default'
}

const baseStyle = {
  default: 'rounded',
  outline: 'border rounded-full',
}

const baseColor = {
  default: '',
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  dark: 'bg-black text-white',
  light: 'bg-white text-black',
}

export const Button = ({ variant = 'outline', color = 'default', children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        cN('flex items-center justify-between py-1 px-3 disabled:pointer-events-none',
          baseStyle[variant], baseColor[color],
          className
        )}
    >
      {children}
    </button>
  );
};
