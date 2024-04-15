import { MoonFilled, SunOutlined } from "@ant-design/icons";
import React, { useState, createContext } from "react";
export const LanguageModeContext = createContext(null);
export const ToggleLanguage = ({ children }) => {
    const [languageMode, setLanguageMode] = useState(false);
    const toggleLanguageMode = () => {
        setLanguageMode((prevMode) => !prevMode);
    };
    // const toggler = () => {
    //   if (languageMode === false) {
    //     setLanguageMode(true);
    //   } else {
    //     setLanguageMode(false);
    //   }
    // };
    return (React.createElement(LanguageModeContext.Provider, { value: { languageMode, setLanguageMode } },
        children,
        React.createElement("div", { className: "fixed top-20 right-20 z-10 m-4" },
            React.createElement("div", { className: "cursor-pointer" }, languageMode === true ? (
            // <p>ff</p>
            React.createElement(SunOutlined, { style: { color: "white" }, onClick: () => toggleLanguageMode() })) : (React.createElement(MoonFilled, { onClick: () => toggleLanguageMode() }))))));
};
