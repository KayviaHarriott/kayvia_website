import { Box } from "@mui/material";
import React from "react";
import MinimizeIcon from "../assets/icons/Minimize.png";
import MaximizeIcon from "../assets/icons/Maximize.png";
import CloseIcon from "../assets/icons/Close.png";

interface WindowsButtonsProps {
  variant: "default" | "close" | "";
  isActive?: true;
}

export const WindowsButtons: React.FC<WindowsButtonsProps> = ({
  variant,
  isActive,
}) => {
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
        backgroundColor: !isActive ? "#FF5E5E" : "#D9D9D9" ,
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
      return (button = <div>One</div>);
    case "default":
      return (button = (
        <Box className="flex flex-row gap-1 ">
          {menuItems.map((item, index) => (
            <Box className="flex" key={index} sx={item.style}>
              <img
                src={item.image.location}
                alt={item.image.alt}
                className=""
              />
            </Box>
          ))}
        </Box>
      ));
    case "close":
      return (button = <div>Three</div>);
  }
  return <div>{button}</div>;
};
