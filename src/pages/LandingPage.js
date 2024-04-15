import { Box, Input } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext";
import { /*textBodyStyle ,*/ textHeaderStyle } from "../styles/TextStyles";
// import { backgroundColor_Black_White } from "../styles/ColorStyles";
import { CustomCarousel } from "../components/Carousel";
import { WindowsButtons } from "../components/WindowButtons";
import { MoveableDialogue } from "../components/MoveableDialogue";
import { AboutMe } from "../components/AboutMe";
import { MusicPlayer } from "../components/MusicPlayer";
// import Music1 from "../assets/sounds/Untouched - The Veronicas w lyrics.mp3";
import Music2 from "../assets/sounds/HookedOnAFeeling - Blue Suede.mp3";
// import GlobeIcon from "../assets/icons/Globe.png"
// import HillBackground from "../assets/images/hill_background.jpg";
import LightBackground from "../assets/images/light_background.jpg";
import NightBackground from "../assets/images/night_background.png";
// import { LanguageToggle } from "../components/LanguageToggle";
// import LightBackgroundVideo from "../assets/videos/light_background_video.mp4"
// import { CustomButton } from "../components/Buttons";
// import { News } from "./News";
export const LandingPage = () => {
    const contextValue = useContext(ThemeContext);
    const [languageToggle, setLanguageToggle] = useState();
    useEffect(() => {
        if (localStorage.getItem("languageToggle") == "true") {
            setLanguageToggle(true);
        }
        else {
            setLanguageToggle(false);
        }
        // setLanguageToggle(localStorage.getItem("languageToggle"));
    }, []);
    if (!contextValue) {
        return React.createElement("div", null, ".");
    }
    const { darkMode } = contextValue;
    console.log(languageToggle);
    const CarouselItems = [
        {},
        {
            title: languageToggle ? "Hi, I'm Kayvia!" : "안녕! 나는 케이!",
            description: "Welcome to my online portfolio",
            body: "Please click one of the items to the right.",
            link: "",
            image: "",
            mainColor: "#F5D4F6",
            secondaryColor: "#E1A7E2",
        },
        {
            title: "About Me",
            description: "Welcome to my online portfolio",
            body: "Please click one of the items to the right.",
            link: "page",
            image: "",
            mainColor: "#D4EAF6",
            secondaryColor: "#A7CAE2",
            button: (React.createElement(MoveableDialogue, { title: "About Me", tag: "about-me", description: "", content: React.createElement(AboutMe, null) })),
        },
        {
            title: "Projects",
            description: "Welcome to my online portfolio",
            body: "Please click one of the items to the right.",
            link: "page",
            image: "",
            mainColor: "#D5F6D4",
            secondaryColor: "#A7E2B4",
            button: (React.createElement(MoveableDialogue, { title: "Projects", tag: "projects", description: "f", content: React.createElement("p", null, "Jere") })),
        },
        {
            title: "Contact Me",
            description: "Want to reach me? Call me, beep me, if you wanna reach me! ... Actually just send me an email...",
            body: "",
            link: "page",
            image: "",
            mainColor: "#D5F6D4",
            secondaryColor: "#A7E2B4",
            button: (React.createElement(MoveableDialogue, { title: "Projects", tag: "projects", description: "f", content: React.createElement("div", null,
                    React.createElement("p", null, "Email"),
                    React.createElement("div", { className: "flex items-center gap-2" },
                        React.createElement("p", null, "To"),
                        React.createElement(Input, { placeholder: "", sx: { background: "white" } }))) })),
        },
        {},
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { className: "h-screen", sx: {
                // backgroundColor: backgroundColor_Black_White(darkMode),
                // backgroundImage: HillBackground,
                backgroundImage: `url(${!darkMode ? LightBackground : NightBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            } },
            React.createElement(Box, { className: "p-4 text-center font-bold pt-6" },
                React.createElement("p", { className: textHeaderStyle(darkMode) }, "kayvia.dev")),
            React.createElement(Box, { className: "flex justify-center items-center" },
                React.createElement(Box, { sx: {
                        backgroundColor: !darkMode ? "#FFE0DD" : "#643D39", //"lightblue",
                        maxWidth: "1000px",
                        margin: "56px",
                        border: `3px solid ${!darkMode ? "#4F4F4F" : "#481813"}`,
                        boxShadow: "8px 8px 1px 1px rgba(0, 0, 0, 0.2)",
                        borderRadius: 4,
                    } },
                    React.createElement(Box, { className: "bg-[#EDEDED] flex justify-end items-end w-full gap-2 px-2 py-1", sx: {
                            borderBottom: `2px solid ${!darkMode ? "#858585" : "#481813"}`,
                            borderTopRightRadius: 14,
                            borderTopLeftRadius: 14,
                        } },
                        React.createElement(Box, { className: "flex w-full items-center" },
                            React.createElement(Box, { className: "w-1/3" }),
                            React.createElement(Box, { className: "w-1/3 flex text-center justify-center items-center gap-2", sx: {
                                    border: "2px solid #555555",
                                    borderRadius: 1,
                                    backgroundColor: "#C8C8C8",
                                } },
                                React.createElement("p", { className: "text-[10px] py-1 text-[#555555]" }, "kaydev.com")),
                            React.createElement(Box, { className: "w-1/3 flex justify-end" },
                                React.createElement(WindowsButtons, { variant: "default", isActive: true })))),
                    React.createElement(Box, { className: "h-vw relative" },
                        React.createElement(Box, { sx: {
                            // backgroundColor: "lightgray"
                            } },
                            React.createElement(CustomCarousel, { items: CarouselItems }))))),
            React.createElement(Box, null,
                React.createElement(MusicPlayer, { source: Music2 })),
            React.createElement(Box, { sx: { position: "absolute", bottom: 0, width: "100%" } },
                React.createElement(Box, { className: "bg-[#EDEDED] flex justify-end items-end w-full gap-2 px-2 py-1 h-[40px] w-[100%]", sx: { borderTop: "2px solid #858585" } })))));
};
