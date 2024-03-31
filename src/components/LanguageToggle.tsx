import React, { useEffect, useState } from "react";

interface LanguageToggleProps {
  //   isActive: boolean;
}
export const LanguageToggle: React.FC<LanguageToggleProps> = () =>
  //   {
  // isActive
  //   }
  {
    const [isActive, setIsActive] = useState<boolean>();

    useEffect(() => {
      if (localStorage.getItem("languageToggle") == "true") {
        setIsActive(true);

      } else setIsActive(false);
    }, []);
    const handleToggle = () => {
      if (isActive) {
        setIsActive(false);
        localStorage.setItem("languageToggle", "false");
        window.location.reload();
      } else {
        setIsActive(true);
        localStorage.setItem("languageToggle", "true");
        window.location.reload();
      }
    };

    return (
      <div className="fixed top-0 right-6 z-10 m-4 cursor-pointer">
        <p className="h-[20px]" onClick={() => handleToggle()}>
          {isActive ? (
            <p className="text-[10px] h-[20px] pt-2">ENG</p>
          ) : (
            <p className="text-[18px]">한</p>
          )}
        </p>
      </div>
    );
  };
