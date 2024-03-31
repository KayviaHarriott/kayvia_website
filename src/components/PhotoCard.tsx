import { Box } from "@mui/material";
import React from "react";

interface PhotoCardProps {
  photo: string;
  alt: string;
  title: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, alt, title }) => {
  return (
    <Box
      className="flex flex-col text-center gap-2"
      sx={{ width: "fit-content" }}
    >
      <Box sx={{ width: "200px", height: "100%",  boxShadow: "5px 5px 0px 0px black" }}>
        <img src={photo} alt={alt}></img>
      </Box>
      <p className="text-[10px]">{title}</p>
    </Box>
  );
};
