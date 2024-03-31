import { MoonFilled, SunOutlined } from "@ant-design/icons";
import React, { useState, createContext } from "react";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ToggleTheme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }
  // const toggler = () => {
  //   if (darkMode === false) {
  //     setDarkMode(true);
  //   } else {
  //     setDarkMode(false);
  //   }
  // };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
      <div className="fixed top-0 right-0 z-10 m-4">
        <div className="cursor-pointer">
          {darkMode === true ? (
            <SunOutlined
              style={{ color: "white" }}
              onClick={() => toggleDarkMode()}
            />
          ) : (
            <MoonFilled onClick={() => toggleDarkMode()} />
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

