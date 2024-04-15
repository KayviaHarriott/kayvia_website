import { MoonFilled, SunOutlined } from "@ant-design/icons";
import React, { useState, createContext } from "react";
export const ThemeContext = createContext(null);
export const ToggleTheme = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };
    // const toggler = () => {
    //   if (darkMode === false) {
    //     setDarkMode(true);
    //   } else {
    //     setDarkMode(false);
    //   }
    // };
    return (React.createElement(ThemeContext.Provider, { value: { darkMode, setDarkMode } },
        children,
        React.createElement("div", { className: "fixed top-0 right-0 z-10 m-4" },
            React.createElement("div", { className: "cursor-pointer" }, darkMode === true ? (React.createElement(SunOutlined, { style: { color: "white" }, onClick: () => toggleDarkMode() })) : (React.createElement(MoonFilled, { onClick: () => toggleDarkMode() }))))));
};
