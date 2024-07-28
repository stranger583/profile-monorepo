'use client'
import { cN } from "./utils/utils"

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    className?: string;
    variant?: 'default' | 'outline';

}

export const inputStyle = {
    default: '',
    outline: 'border border-primaryText',

}

export function Input({ className, variant = 'default' }: InputProps) {
    return (
        <input
            type="text"
            className={cN(
                'w-full tracking-wide bg-transparent text-sm rounded-lg px-2 pt-1 outline-none',
                inputStyle[variant],
                className
            )}
        />
    )
}
