import { Box } from "@mui/material";
import React from "react";
export const NavigationBar = () => {
    //   const textModeStyle = `${darkMode ? `text-[white]` : `text-[black]`}`;
    const textModeStyle = "";
    //   const [darkMode, setDarkMode] = useState(false);
    //   //add check from local storage
    //   const activateDarkMode = () => {
    //     if (darkMode === false) {
    //       setDarkMode(true);
    //     } else {
    //       setDarkMode(false);
    //     }
    //     {
    //       console.log(darkMode);
    //     }
    //   };
    return (React.createElement(Box, { className: "p-4 text-center font-bold" },
        React.createElement("p", { className: textModeStyle }, "Kayvia Portfolio")));
};
