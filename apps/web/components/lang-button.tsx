"use client";
import { Button } from "@repo/ui/button";
import LangIcon from "@icons/lang-icon";

function LangButton() {
  return (
    <Button variant="default" className="p-0">
      <LangIcon />
    </Button>
  );
}

export default LangButton;
