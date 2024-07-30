"use client";
import { Button } from "@repo/ui/button";
import Image from "next/image";
import len from "@public/svg/len.svg";
import darkLen from "@public/svg/dark-len.svg";

function LangButton() {
  return (
    <Button variant="default" className="p-0">
      <Image src={len} alt="len" />
      {/* <Image src={darkLen} alt="dark-len" /> */}
    </Button>
  );
}

export default LangButton;
