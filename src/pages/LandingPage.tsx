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
import { CustomWindow } from "../components/Window";
// import { LanguageToggle } from "../components/LanguageToggle";
// import LightBackgroundVideo from "../assets/videos/light_background_video.mp4"
// import { CustomButton } from "../components/Buttons";
// import { News } from "./News";

export const LandingPage = () => {
  const contextValue = useContext(ThemeContext);
  const [languageToggle, setLanguageToggle] = useState<boolean>();

  useEffect(() => {
    if (localStorage.getItem("languageToggle") == "true") {
      setLanguageToggle(true);
    } else {
      setLanguageToggle(false);
    }
    // setLanguageToggle(localStorage.getItem("languageToggle"));
  }, []);
  if (!contextValue) {
    return <div>.</div>;
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
      button: (
        <MoveableDialogue
          title={"About Me"}
          tag={"about-me"}
          description=""
          content={<AboutMe />}
        />
      ),
    },
    {
      title: "Projects",
      description: "Welcome to my online portfolio",
      body: "Please click one of the items to the right.",
      link: "page",
      image: "",
      mainColor: "#D5F6D4",
      secondaryColor: "#A7E2B4",
      button: (
        <MoveableDialogue
          title={"Projects"}
          tag={"projects"}
          description="f"
          content={<p>Jere</p>}
        />
      ),
    },
    {
      title: "Contact Me",
      description:
        "Want to reach me? Call me, beep me, if you wanna reach me! ... Actually just send me an email...",
      body: "",
      link: "page",
      image: "",
      mainColor: "#D5F6D4",
      secondaryColor: "#A7E2B4",
      button: (
        <MoveableDialogue
          title={"Projects"}
          tag={"projects"}
          description="f"
          content={
            <div>
              <p>Email</p>
              <div className="flex items-center gap-2">
                <p>To</p>
                <Input placeholder="" sx={{ background: "white" }}></Input>
              </div>
            </div>
          }
        />
      ),
    },
    {},
  ];

  return (
    <>
      <Box
        className="h-screen"
        sx={{
          // backgroundColor: backgroundColor_Black_White(darkMode),
          // backgroundImage: HillBackground,
          backgroundImage: `url(${
            !darkMode ? LightBackground : NightBackground
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <LanguageToggle /> */}
        {/* <Box className="h-vw relative"> */}
        <Box className="p-4 text-center font-bold pt-6">
          <p className={textHeaderStyle(darkMode)}>kayvia.dev</p>
        </Box>

        <Box className="flex justify-center items-center">
          <Box
            sx={{
              backgroundColor: !darkMode ? "#FFE0DD" : "#643D39", //"lightblue",
              maxWidth: "1000px",
              margin: "56px",
              border: `3px solid ${!darkMode ? "#4F4F4F" : "#481813"}`,
              boxShadow: "8px 8px 1px 1px rgba(0, 0, 0, 0.2)",
              borderRadius: 4,
            }}
          >
            <Box
              className="bg-[#EDEDED] flex justify-end items-end w-full gap-2 px-2 py-1"
              sx={{
                borderBottom: `2px solid ${!darkMode ? "#858585" : "#481813"}`,
                borderTopRightRadius: 14,
                borderTopLeftRadius: 14,
              }}
            >
              <Box className="flex w-full items-center">
                <Box className="w-1/3"></Box>
                <Box
                  className="w-1/3 flex text-center justify-center items-center gap-2"
                  sx={{
                    border: "2px solid #555555",
                    borderRadius: 1,
                    backgroundColor: "#C8C8C8",
                  }}
                >
                  {/* <img src={GlobeIcon} alt="Globe Icon" className="w-5"/> */}
                  <p className="text-[10px] py-1 text-[#555555]">kaydev.com</p>
                </Box>
                <Box className="w-1/3 flex justify-end">
                  <WindowsButtons variant="default" isActive={true} />
                </Box>
              </Box>
            </Box>

            <Box className="h-vw relative">
              <Box
                sx={
                  {
                    // backgroundColor: "lightgray"
                  }
                }
              >
                <CustomWindow
                  variant={"default"}
                  colorSet={{ primary: "", secondary: "", accent: "" }}
                  data={{ urlTag: "about-us", content: <div><p>One</p></div>}}
                  stylePreferences={{ width: "" }}
                />
                <CustomCarousel items={CarouselItems} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          {/* <MusicPlayer source={Music1} /> */}
          <MusicPlayer source={Music2} />
        </Box>

        <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Box
            className="bg-[#EDEDED] flex justify-end items-end w-full gap-2 px-2 py-1 h-[40px] w-[100%]"
            sx={{ borderTop: "2px solid #858585" }}
          ></Box>
          {/* <p>kk</p> */}
        </Box>
      </Box>
    </>
  );
};
