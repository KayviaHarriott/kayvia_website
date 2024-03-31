import React, { ReactNode, useState, useContext } from "react";
import { CarouselItem } from "./CarouselItem";
import { Box } from "@mui/material";
// import { CustomButton } from "../components/Buttons";
import { CustomButton } from "./CustomButton";
// import { MoveableDialogue } from "../components/MoveableDialogue";
// import { AboutMe } from "../components/AboutMe";
import { ThemeContext } from "./ThemeContext";

interface CustomCarouselProps {
  items: {
    title?: string;
    description?: string;
    body?: string;
    link?: string;
    image?: string;
    mainColor?: string;
    secondaryColor?: string;
    button?: ReactNode;
  }[];
}
export const CustomCarousel: React.FC<CustomCarouselProps> = ({
  items = [],

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
    return <div>.</div>;
  }

  const { darkMode } = contextValue;


  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("carousel-container");
    if (container) {
      const scrollWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;
      const scrollStep = 430; // Set the scroll step to 200px
      let newScrollLeft;

      if (direction === "left") {
        newScrollLeft = Math.max(scrollLeft - scrollStep, 0);
      } else {
        newScrollLeft = Math.min(
          scrollLeft + scrollStep,
          scrollWidth - visibleWidth
        );
      }

      setScrollLeft(newScrollLeft);
      container.scroll({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <div className="flex-col">
      {/* <Box className="flex gap-4 w-vw overflow-x-auto py-[56px]" sx={{}}> */}
      <Box
        id="carousel-container"
        className="flex gap-4 w-vw overflow-x-auto py-[56px] no-scrollbar"
        sx={{ scrollBehavior: "smooth", scrollLeft: scrollLeft }}
      >
        {items.map((item, index) => (
          <div key={index}>
            <CarouselItem
              key={index}
              title={item.title ? item.title : ""}
              description={item.description ? item.description : ""}
              body={item.body ? item.body : ""}
              link={item.link ? item.link : ""}
              image={item.image ? item.image : ""}
              mainColor={item.mainColor ? item.mainColor : ""}
              secondaryColor={item.secondaryColor ? item.secondaryColor : ""}
              button={item.button}
            />
          </div>
        ))}
      </Box>
      <Box className="flex justify-center items-center p-4 gap-2">
        <div onClick={() => handleScroll("left")}>
          <CustomButton
            icon={
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="16"
                  y="6"
                  width="2"
                  height="16"
                  transform="rotate(90 16 6)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  x="4"
                  y="8"
                  width="2"
                  height="2"
                  transform="rotate(90 4 8)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  x="6"
                  y="10"
                  width="2"
                  height="2"
                  transform="rotate(90 6 10)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  x="8"
                  y="12"
                  width="2"
                  height="2"
                  transform="rotate(90 8 12)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  width="2"
                  height="2"
                  transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 4 6)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  width="2"
                  height="2"
                  transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 6 4)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  width="2"
                  height="2"
                  transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 8 2)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
              </svg>
            }
            variant="icon"
          />
        </div>
        <div onClick={() => handleScroll("right")}>
          <CustomButton
            variant="icon"
            icon={
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="2"
                  height="16"
                  transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 6)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  width="2"
                  height="2"
                  transform="matrix(4.37114e-08 1 1 -4.37114e-08 12 8)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  width="2"
                  height="2"
                  transform="matrix(4.37114e-08 1 1 -4.37114e-08 10 10)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  width="2"
                  height="2"
                  transform="matrix(4.37114e-08 1 1 -4.37114e-08 8 12)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  x="12"
                  y="6"
                  width="2"
                  height="2"
                  transform="rotate(-90 12 6)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  x="10"
                  y="4"
                  width="2"
                  height="2"
                  transform="rotate(-90 10 4)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
                <rect
                  x="8"
                  y="2"
                  width="2"
                  height="2"
                  transform="rotate(-90 8 2)"
                  fill={`${!darkMode ? "white" : "black"}`}
                />
              </svg>
            }
          ></CustomButton>
        </div>
      </Box>
      {/* <MoveableDialogue/> */}
    </div>
  );
};
