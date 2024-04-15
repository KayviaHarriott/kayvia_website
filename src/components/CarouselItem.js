import { Box } from "@mui/material";
import React from "react";
import "@fontsource/press-start-2p";
export const CarouselItem = ({ title, description, body, link, mainColor, secondaryColor, button, }) => {
    return (React.createElement(Box, { sx: { width: "fit-content" }, className: "transition-transform duration-300 hover:scale-105" }, title ? (React.createElement(React.Fragment, null,
        React.createElement(Box, { className: "flex" },
            React.createElement(Box, { sx: {
                    width: "fit-content",
                    zIndex: 1,
                    borderRadius: 2,
                    boxShadow: "5px 5px 0px black",
                } },
                React.createElement(Box, { sx: {
                        backgroundColor: mainColor,
                        width: "400px",
                        border: "1px solid black",
                        borderRadius: 2,
                    } },
                    React.createElement(Box, { className: "flex justify-end items-end w-full gap-2 px-2 pt-1", sx: {
                            backgroundColor: secondaryColor,
                            height: "20px",
                            borderBottom: "1px solid black",
                            borderTopRightRadius: 6,
                            borderTopLeftRadius: 6,
                        } }),
                    React.createElement(Box, { sx: { padding: 2 } },
                        React.createElement("div", null,
                            title && React.createElement("p", { className: "text-center font-bold" }, title),
                            React.createElement("div", { className: "pt-2" },
                                description && (React.createElement("p", { className: "text-base" }, description)),
                                body && React.createElement("p", { className: "text-base" }, body))),
                        React.createElement("div", { className: "items-center justify-center w-full text-center pt-4" }, link && button)),
                    React.createElement(Box, { sx: {
                            backgroundColor: secondaryColor,
                            height: "20px",
                            border: "1px solid black",
                            borderBottomRightRadius: 6,
                            borderBottomLeftRadius: 6,
                            borderBottom: "none",
                            borderRight: "none",
                            borderLeft: "none",
                        } })))))) : (React.createElement(Box, { sx: { width: "270px" } }, " "))));
};
