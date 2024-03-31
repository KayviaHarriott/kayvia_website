import { Box } from "@mui/material";
import React, { useContext } from "react";
import { backgroundColor_Black_White } from "../styles/ColorStyles";
import { ThemeContext } from "../components/ThemeContext";
import { Sun, Sunrise, Sunset } from "react-feather";

export const News = () => {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    return <div>.</div>;
  }

  const { darkMode } = contextValue;

  const newsTypes = [
    { name: "morning", title: "a.m.", icon: <Sunrise /> },
    { name: "midday", title: "mid.", icon: <Sun /> },
    { name: "night", title: "p.m.", icon: <Sunset /> },
  ];
  return (
    <Box
      className="pt-[75px]"
      sx={{ backgroundColor: backgroundColor_Black_White(darkMode) }}
    >
      <Box className="flex flex-row justify-center items-center gap-4">
        {newsTypes
          ? newsTypes.map((item, index) => (
              <Box
                sx={{
                  backgroundColor: `${darkMode ? `white` : `black`}`,
                  color: `${darkMode ? `black` : `white`}`,
                  padding: "50px",
                  borderRadius: 1,
                }}
                key={index}
              >
                <Box
                  className="flex flex-col gap-2 justify-center items-center text-center"
                  sx={{}}
                >
                  {item.icon}
                  {item.name}
                </Box>
              </Box>
            ))
          : ""}
      </Box>
    </Box>
  );
};
