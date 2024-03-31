import { MoonFilled, SunOutlined } from "@ant-design/icons";
import React, { useState, createContext } from "react";

interface LanguageModeContextType {
  languageMode: boolean;
  setLanguageMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LanguageModeContext = createContext<LanguageModeContextType | null>(null);

export const ToggleLanguage = ({ children }) => {
  const [languageMode, setLanguageMode] = useState(false);
  const toggleLanguageMode = () => {
    setLanguageMode((prevMode) => !prevMode)
  }
  // const toggler = () => {
  //   if (languageMode === false) {
  //     setLanguageMode(true);
  //   } else {
  //     setLanguageMode(false);
  //   }
  // };
  return (
    <LanguageModeContext.Provider value={{ languageMode, setLanguageMode }}>
      {children}
      <div className="fixed top-20 right-20 z-10 m-4">
        <div className="cursor-pointer">
          {languageMode === true ? (
            // <p>ff</p>
            <SunOutlined
              style={{ color: "white" }}
              onClick={() => toggleLanguageMode()}
            />
          ) : (
            <MoonFilled onClick={() => toggleLanguageMode()} />
          )}
        </div>
      </div>
    </LanguageModeContext.Provider>
  );
};

