import React from "react";
import { Box } from "@mui/material";
import photo1 from "../assets/images/kayvia_babyphoto.jpeg";
import photo2 from "../assets/images/kayvia_graduationphoto.png";
import { PhotoCard } from "./PhotoCard";
import { CustomButton } from "./CustomButton";
/**
 * A React component that displays the information/layout for the AboutMe section.
 * @component
 * @example
 * // Usage:
 * // <AboutMe />
 * @returns {JSX.Element} The rendered AboutMe component.
 */
export const AboutMe = () => {
    /**
     * Paragraph providing personal introduction.
     * @type {string}
     */
    const paragraph1 = `Hi, my name is Kayvia! I was born and raised in Jamaica 
  to my two parents who (plot twist...) are also Jamaican! I have an older sister and young brother, so yes... I am the
  middle child. Since I could remember, my father has always been interested in technology from the new block phones, to new laptops and ofcourse drones.
  I think this interest passed down to me because now I'm interested in techonlogy too.`;
    /**
     * Paragraph providing information about hobbies and interests.
     * @type {string}
     */
    const paragraph3 = `As I grew older, I gravitated towards technology excelling in my computer classes the most. And ofcourse
  like everyone else the occasional interests in the deep web and hacking. I started out with Pascal and C+ in high school and then went
  on to learn the basics in coding (click here for my skills page). After highschool, I continued my passion in university and earned a Bsc. in Software Engineering.`;
    /**
     * Paragraph providing educational background.
     * @type {string}
     */
    const paragraph2 = `In my free time, I'm an aspiring loner and gamer. I love to play problem solving games, while also taking time to be
  centered and calm. I am a somewhat scheduled person, so I enjoy having a daily routing and ofcourse coming home to watch the occasional TV show. I also like learning,
  and as of recent I've started to learn Korean as a second language. I'll be watching KDramas without subtitles in no time!... (I hope).`;
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, null,
            React.createElement(Box, { className: "text-center pb-4" },
                React.createElement("p", null, "About Me")),
            React.createElement(Box, null,
                React.createElement("div", { className: "float-left pr-6 pb-2 pt-4" },
                    React.createElement(PhotoCard, { photo: photo1, title: "baby photo of me :)", alt: "Old photo of Kayvia looking at camera in pink dress" })),
                React.createElement("p", { className: "text-base" }, paragraph1),
                React.createElement("p", { className: "pt-2 text-base" }, paragraph2)),
            React.createElement(Box, { className: "pt-4" },
                React.createElement("div", { className: "float-right pl-6 pb-2 pt-4" },
                    React.createElement(PhotoCard, { photo: photo2, title: "graduation '23", alt: "Graduation photo of Kayvia and friend" })),
                React.createElement("p", { className: "pt-2 text-base" }, paragraph3)),
            React.createElement(Box, { className: "pt-4" },
                React.createElement(CustomButton, { title: "Lorem", variant: "contained", stylePreferences: { width: "100%" } })))));
};
