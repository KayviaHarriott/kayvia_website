import { Box, Button } from "@mui/material";
import React from "react";
export const CustomButton = ({ title, variant, stylePreferences = { width: "auto" }, icon, }) => {
    let buttonContent;
    switch (variant) {
        case "":
            buttonContent = "";
            break;
        case "contained":
            buttonContent = (React.createElement(Box, null,
                React.createElement(Button, { variant: variant, sx: {
                        width: stylePreferences.width,
                        boxShadow: "3px 3px 0px 0px black",
                        borderRadius: "1px",
                        border: "2px solid black",
                        textTransform: "none",
                        "&:hover": {
                            // Styles to apply on hover
                            backgroundColor: "#175CAD", // Example change color on hover
                            boxShadow: "4px 4px 0px 0px black",
                            borderRadius: "1px",
                            border: "2px solid black",
                        },
                        "&:focus": {
                            // Styles to apply when button is focused (clicked)
                            backgroundColor: "blue", // Example change color when clicked
                            // Add any other styles you want to apply when clicked
                        },
                    } },
                    React.createElement("p", null,
                        " ",
                        title))));
            break;
        case "icon":
            buttonContent = (React.createElement(Box, null,
                React.createElement(Button, { variant: "contained", sx: {
                        width: stylePreferences.width,
                        boxShadow: "3px 3px 0px 0px black",
                        borderRadius: "1px",
                        border: "2px solid black",
                        textTransform: "none",
                        "&:hover": {
                            // Styles to apply on hover
                            backgroundColor: "#175CAD", // Example change color on hover
                            boxShadow: "4px 4px 0px 0px black",
                            borderRadius: "1px",
                            border: "2px solid black",
                        },
                        "&:focus": {
                            // Styles to apply when button is focused (clicked)
                            backgroundColor: "blue", // Example change color when clicked
                            // Add any other styles you want to apply when clicked
                        },
                    } }, icon)));
            break;
    }
    return React.createElement("div", null, buttonContent);
};
