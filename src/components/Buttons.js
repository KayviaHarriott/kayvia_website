import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext";
export const CustomButton = ({ title, url, link, icon, variant, }) => {
    const navigate = useNavigate();
    const handleClick = (url) => {
        if (url) {
            navigate(url);
        }
    };
    const contextValue = useContext(ThemeContext);
    if (!contextValue) {
        return React.createElement("div", null, ".");
    }
    const { darkMode } = contextValue;
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { variant: variant, onClick: () => handleClick(url ? url : ""), sx: {
                textTransform: "none",
                fontWeight: "bold",
                color: darkMode ? "white" : "black",
                boxShadow: "none",
                border: "4px solid black",
                // color: "black",
                backgroundColor: "white",
                borderRadius: 0,
            } },
            link,
            title,
            icon)));
};
