import { Box } from "@mui/material";
import React from "react";
import Play from "../assets/icons/Play.png";
import Pause from "../assets/icons/Pause.png";
import ablumart1 from "../assets/images/veronicas_untouched_coverart.jpg";
export const MusicPlayer = ({ source }) => {
    const audio = new Audio(source);
    //   const [togglePlay, setTogglePlay] = useState();
    const start = () => {
        console.log("Play clicked");
        audio.play();
    };
    const pause = () => {
        console.log("Pause clicked");
        audio.pause();
    };
    //   const style = {  };
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { sx: {
                height: "300px",
                width: "300px",
                backgroundColor: "green",
                position: "absolute",
                bottom: 80,
                right: 10,
                zIndex: 2,
            } },
            React.createElement(Box, { sx: { border: "3px solid black" }, className: "flex flex-col" },
                React.createElement(Box, { sx: {} },
                    React.createElement("img", { src: ablumart1, alt: "ablum-art" })),
                React.createElement(Box, { sx: { borderTop: "2px solid black", backgroundColor: "white" }, className: "flex p-1 my-auto justify-items items-center" },
                    React.createElement("img", { src: Play, alt: "Play", className: "w-[25px] h-[25px] cursor-pointer", onClick: start }),
                    React.createElement("img", { src: Pause, alt: "Pause", className: "w-[25px] h-[20px] cursor-pointer", onClick: pause }))))));
};
