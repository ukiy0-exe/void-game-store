import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="hidden md:block" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <img src="/assets/icons/toDarkMode.svg" alt="" />
      ) : (
        <img src="/assets/icons/toLightMode.svg" alt="" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
