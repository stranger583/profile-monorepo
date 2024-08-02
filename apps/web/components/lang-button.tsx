"use client";
import { Button } from "@repo/ui/button";
import Image from "next/image";
import len from "@public/svg/len.svg";
import darkLen from "@public/svg/dark-len.svg";
import LangIcon from "../icons/lang-icon";

function LangButton() {
  return (
    <Button variant="default" className="p-0">
      <LangIcon />
    </Button>
  );
}

export default LangButton;
