"use client";
import { baseIconStyle } from "@constant/s/icon-style";
import { cN } from "@libs/styles-merge";

interface Props {
  className?: string;
}
function ArrowDownIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cN(baseIconStyle, className)}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default ArrowDownIcon;
