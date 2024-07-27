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
  default: 'ui-rounded',
  outline: 'ui-border ui-rounded-full',
}

const baseColor = {
  default: '',
  primary: 'ui-bg-primary ui-text-white',
  secondary: 'ui-bg-secondary ui-text-white',
  dark: 'ui-bg-black ui-text-white',
  light: 'ui-bg-white ui-text-black',
}

export const Button = ({ variant = 'outline', color = 'default', children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        cN('ui-flex ui-items-center ui-justify-between ui-py-1 ui-px-3 disabled:ui-pointer-events-none',
          baseStyle[variant], baseColor[color],
          className
        )}
    >
      {children}
    </button>
  );
};
