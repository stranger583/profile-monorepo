"use client";

import { ReactNode } from "react";
import { cN } from "./utils/utils";
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
}

const variant = {
  
}

export const Button = ({ children,className }: ButtonProps) => {
  return (
    <button
      className= {cN(``,className)}
    >
      {children}
    </button>
  );
};
