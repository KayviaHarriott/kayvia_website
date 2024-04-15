import React, { useEffect, useState } from "react";
export const LanguageToggle = () => {
    const [isActive, setIsActive] = useState();
    useEffect(() => {
        if (localStorage.getItem("languageToggle") == "true") {
            setIsActive(true);
        }
        else
            setIsActive(false);
    }, []);
    const handleToggle = () => {
        if (isActive) {
            setIsActive(false);
            localStorage.setItem("languageToggle", "false");
            window.location.reload();
        }
        else {
            setIsActive(true);
            localStorage.setItem("languageToggle", "true");
            window.location.reload();
        }
    };
    return (React.createElement("div", { className: "fixed top-0 right-6 z-10 m-4 cursor-pointer" },
        React.createElement("p", { className: "h-[20px]", onClick: () => handleToggle() }, isActive ? (React.createElement("p", { className: "text-[10px] h-[20px] pt-2" }, "ENG")) : (React.createElement("p", { className: "text-[18px]" }, "\uD55C")))));
};
