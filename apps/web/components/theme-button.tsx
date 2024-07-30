"use client";
import { useState, useEffect } from "react";
import { Button } from "@repo/ui/button";
import Image from "next/image";
import moon from "@public/svg/moon.svg";
import sun from "@public/svg/sun.svg";

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleTheme = () => {
    setIsDarkMode((prev) => !prev);
    // const theme = isDarkMode ? "dark" : "light";
    // document.querySelector(":root")?.setAttribute("data-theme", theme);
  };

  useEffect(()=>{
    const theme = isDarkMode ? "dark" : "light";
    document.querySelector(":root")?.setAttribute("data-theme", theme);
  },[isDarkMode])

  return (
    <>
      <Button variant="default" className="p-0" onClick={handleTheme}>
        {!isDarkMode && <Image src={moon} alt="dark mode" />}
        {isDarkMode && <Image src={sun} alt="light mode" />}
      </Button>
    </>
  );
}

export default ThemeButton;
