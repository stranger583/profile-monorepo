"use client";
import { baseIconStyle } from "@constant/s/icon-style";
import { cN } from "@libs/styles-merge";

interface Props {
  className?: string;
}
function ArrowUprightIcon({ className }: Props) {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default ArrowUprightIcon;
