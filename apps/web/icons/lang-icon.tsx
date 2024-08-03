"use client";
import { baseIconStyle } from "@constant/s/icon-style";
import { cN } from "@libs/styles-merge";

interface Props {
  className?: string;
}
function LangIcon({ className }: Props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={cN(baseIconStyle, className)}
      >
        <path d="m5 8 6 6" />
        <path d="m4 14 6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="m22 22-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
    </div>
  );
}

export default LangIcon;
