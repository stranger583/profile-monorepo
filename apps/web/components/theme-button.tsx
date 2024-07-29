"use client";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import Image from "next/image";
import moon from "@public/svg/moon.svg";

const defaultDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);

  const handleTheme = () => {
    setIsDarkMode((prev) => !prev);
    const theme = isDarkMode ? "dark" : "light";
    document.querySelector(":root")?.setAttribute("data-theme", theme);
  };

  return (
    <>
      <Button variant="default" className="p-0" onClick={() => handleTheme()}>
        <Image src={moon} alt="dark mode" />
      </Button>
    </>
  );
}

export default ThemeButton;
