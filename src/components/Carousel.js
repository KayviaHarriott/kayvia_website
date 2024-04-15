import React, { useState, useContext } from "react";
import { CarouselItem } from "./CarouselItem";
import { Box } from "@mui/material";
// import { CustomButton } from "../components/Buttons";
import { CustomButton } from "./CustomButton";
// import { MoveableDialogue } from "../components/MoveableDialogue";
// import { AboutMe } from "../components/AboutMe";
import { ThemeContext } from "./ThemeContext";
export const CustomCarousel = ({ items = [],
// {title: "",
// description: "",
// body: "",
// link: "",
// image: "",
// mainColor: "",
// secondaryColor: "",}
 }) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const contextValue = useContext(ThemeContext);
    if (!contextValue) {
        return React.createElement("div", null, ".");
    }
    const { darkMode } = contextValue;
    const handleScroll = (direction) => {
        const container = document.getElementById("carousel-container");
        if (container) {
            const scrollWidth = container.scrollWidth;
            const visibleWidth = container.clientWidth;
            const scrollStep = 430; // Set the scroll step to 200px
            let newScrollLeft;
            if (direction === "left") {
                newScrollLeft = Math.max(scrollLeft - scrollStep, 0);
            }
            else {
                newScrollLeft = Math.min(scrollLeft + scrollStep, scrollWidth - visibleWidth);
            }
            setScrollLeft(newScrollLeft);
            container.scroll({ left: newScrollLeft, behavior: "smooth" });
        }
    };
    return (React.createElement("div", { className: "flex-col" },
        React.createElement(Box, { id: "carousel-container", className: "flex gap-4 w-vw overflow-x-auto py-[56px] no-scrollbar", sx: { scrollBehavior: "smooth", scrollLeft: scrollLeft } }, items.map((item, index) => (React.createElement("div", { key: index },
            React.createElement(CarouselItem, { key: index, title: item.title ? item.title : "", description: item.description ? item.description : "", body: item.body ? item.body : "", link: item.link ? item.link : "", image: item.image ? item.image : "", mainColor: item.mainColor ? item.mainColor : "", secondaryColor: item.secondaryColor ? item.secondaryColor : "", button: item.button }))))),
        React.createElement(Box, { className: "flex justify-center items-center p-4 gap-2" },
            React.createElement("div", { onClick: () => handleScroll("left") },
                React.createElement(CustomButton, { icon: React.createElement("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("rect", { x: "16", y: "6", width: "2", height: "16", transform: "rotate(90 16 6)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { x: "4", y: "8", width: "2", height: "2", transform: "rotate(90 4 8)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { x: "6", y: "10", width: "2", height: "2", transform: "rotate(90 6 10)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { x: "8", y: "12", width: "2", height: "2", transform: "rotate(90 8 12)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { width: "2", height: "2", transform: "matrix(4.37114e-08 -1 -1 -4.37114e-08 4 6)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { width: "2", height: "2", transform: "matrix(4.37114e-08 -1 -1 -4.37114e-08 6 4)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { width: "2", height: "2", transform: "matrix(4.37114e-08 -1 -1 -4.37114e-08 8 2)", fill: `${!darkMode ? "white" : "black"}` })), variant: "icon" })),
            React.createElement("div", { onClick: () => handleScroll("right") },
                React.createElement(CustomButton, { variant: "icon", icon: React.createElement("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("rect", { width: "2", height: "16", transform: "matrix(4.37114e-08 1 1 -4.37114e-08 0 6)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { width: "2", height: "2", transform: "matrix(4.37114e-08 1 1 -4.37114e-08 12 8)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { width: "2", height: "2", transform: "matrix(4.37114e-08 1 1 -4.37114e-08 10 10)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { width: "2", height: "2", transform: "matrix(4.37114e-08 1 1 -4.37114e-08 8 12)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { x: "12", y: "6", width: "2", height: "2", transform: "rotate(-90 12 6)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { x: "10", y: "4", width: "2", height: "2", transform: "rotate(-90 10 4)", fill: `${!darkMode ? "white" : "black"}` }),
                        React.createElement("rect", { x: "8", y: "2", width: "2", height: "2", transform: "rotate(-90 8 2)", fill: `${!darkMode ? "white" : "black"}` })) })))));
};
