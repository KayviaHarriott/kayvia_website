import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface CustomWindowProps {
  variant: "default" | "close";
  colorSet: {
    primary: string;
    secondary: string;
    accent: string;
  };
  data: {
    urlTag: string;
    content: ReactNode;
  };
  stylePreferences?: {
    width: string;
  };
}

export const CustomWindow: FC<CustomWindowProps> = ({
  variant,
  colorSet = { primary: "", secondary: "", accent: "" },
  data = { urlTag: "", content: "" },
}) => {
  switch (variant) {
    case "default":
      break;
    case "close":
      break;
  }

  return (
    <Box
      className={`w-[50px] h-[200px]`}
      sx={{
        border: `1px solid ${colorSet.accent}`,
        borderRadius: 1,
        width: "350px",
        boxShadow: "3px 3px 0px 0px black",
      }}
    >
      <Box className="w-full flex justify-center items-center p-1" sx={{}}>
        <Box sx={{ border: 2, borderRadius: 1, width: "fit-content", px: 4 }}>
         <p className="text-[12px]"> {data.urlTag}</p>
        </Box>
      </Box>
      <Box>{data.content}</Box>
    </Box>
  );
};
