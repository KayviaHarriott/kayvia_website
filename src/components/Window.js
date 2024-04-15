import { Box } from "@mui/material";
import React from "react";
export const CustomWindow = ({ variant, colorSet = { primary: "", secondary: "", accent: "" }, data = { urlTag: "", content: "" }, }) => {
    switch (variant) {
        case "default":
            break;
        case "close":
            break;
    }
    return (React.createElement(Box, { className: `w-[50px] h-[200px]`, sx: {
            border: `1px solid ${colorSet.accent}`,
            borderRadius: 1,
            width: "350px",
            boxShadow: "3px 3px 0px 0px black",
        } },
        React.createElement(Box, { className: "w-full flex justify-center items-center p-1", sx: {} },
            React.createElement(Box, { sx: { border: 2, borderRadius: 1, width: "fit-content", px: 4 } },
                React.createElement("p", { className: "text-[12px]" },
                    " ",
                    data.urlTag))),
        React.createElement(Box, null, data.content)));
};
