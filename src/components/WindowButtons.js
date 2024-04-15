import { Box } from "@mui/material";
import React from "react";
import MinimizeIcon from "../assets/icons/Minimize.png";
import MaximizeIcon from "../assets/icons/Maximize.png";
import CloseIcon from "../assets/icons/Close.png";
export const WindowsButtons = ({ variant, isActive, }) => {
    let button;
    const menuItems = [
        {
            style: {
                backgroundColor: !isActive ? "#FFAB5E" : "#D9D9D9",
                height: "16px",
                width: "16px",
                //   borderRadius: 4,
                border: `2px solid ${!isActive ? "#B47942" : "#848484"}`,
            },
            image: { location: MinimizeIcon, alt: "" },
        },
        {
            style: {
                backgroundColor: !isActive ? "#5EFF95" : "#D9D9D9",
                height: "16px",
                width: "16px",
                //   borderRadius: 4,
                border: `2px solid ${!isActive ? "#42B469" : "#848484"}`,
            },
            image: { location: MaximizeIcon, alt: "" },
        },
        {
            style: {
                backgroundColor: !isActive ? "#FF5E5E" : "#D9D9D9",
                height: "16px",
                width: "16px",
                //   borderRadius: 4,
                border: `2px solid ${!isActive ? "#B44242" : "#848484"}`,
            },
            image: { location: CloseIcon, alt: "" },
        },
    ];
    switch (variant) {
        case "":
            return (button = React.createElement("div", null, "One"));
        case "default":
            return (button = (React.createElement(Box, { className: "flex flex-row gap-1 " }, menuItems.map((item, index) => (React.createElement(Box, { className: "flex", key: index, sx: item.style },
                React.createElement("img", { src: item.image.location, alt: item.image.alt, className: "" })))))));
        case "close":
            return (button = React.createElement("div", null, "Three"));
    }
    return React.createElement("div", null, button);
};
