import { Box } from "@mui/material";
import React from "react";
export const PhotoCard = ({ photo, alt, title }) => {
    return (React.createElement(Box, { className: "flex flex-col text-center gap-2", sx: { width: "fit-content" } },
        React.createElement(Box, { sx: { width: "200px", height: "100%", boxShadow: "5px 5px 0px 0px black" } },
            React.createElement("img", { src: photo, alt: alt })),
        React.createElement("p", { className: "text-[10px]" }, title)));
};
