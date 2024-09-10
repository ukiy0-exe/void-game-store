import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="hidden md:block" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <img src="src/assets/icons/toDarkMode.svg" alt="" />
      ) : (
        <img src="src/assets/icons/toLightMode.svg" alt="" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
