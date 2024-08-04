"use client";
import { useState, useEffect } from "react";
import { Button } from "@repo/ui/button";
import MoonIcon from "@icons/moon-icon";
import SunIcon from "@icons/sun-icon";


function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.querySelector(":root")?.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <>
      <Button variant="default" className="p-0" onClick={handleTheme}>
        {!isDarkMode && <MoonIcon />}
        {isDarkMode && <SunIcon />}
      </Button>
    </>
  );
}

export default ThemeButton;
