import { Box, Button } from "@mui/material";
import React, { ReactNode } from "react";

interface CustomButtonProps {
  title?: string;
  variant: "icon" | "text" | "contained" | "";
  stylePreferences?: { width: string };
  icon?: string | ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant,
  stylePreferences = { width: "auto" },
  icon,
}) => {
  let buttonContent;
  switch (variant) {
    case "":
      buttonContent = "";
      break;
    case "contained":
      buttonContent = (
        <Box>
          <Button
            variant={variant}
            sx={{
              width: stylePreferences.width,
              boxShadow: "3px 3px 0px 0px black",
              borderRadius: "1px",
              border: "2px solid black",
              textTransform: "none",
              "&:hover": {
                // Styles to apply on hover
                backgroundColor: "#175CAD", // Example change color on hover
                boxShadow: "4px 4px 0px 0px black",
                borderRadius: "1px",
                border: "2px solid black",
              },
              "&:focus": {
                // Styles to apply when button is focused (clicked)
                backgroundColor: "blue", // Example change color when clicked
                // Add any other styles you want to apply when clicked
              },
            }}
          >
            <p> {title}</p>
          </Button>
        </Box>
      );
      break;
    case "icon":
      buttonContent = (
        <Box>
          <Button
            variant={"contained"}
            sx={{
              width: stylePreferences.width,
              boxShadow: "3px 3px 0px 0px black",
              borderRadius: "1px",
              border: "2px solid black",
              textTransform: "none",
              "&:hover": {
                // Styles to apply on hover
                backgroundColor: "#175CAD", // Example change color on hover
                boxShadow: "4px 4px 0px 0px black",
                borderRadius: "1px",
                border: "2px solid black",
              },
              "&:focus": {
                // Styles to apply when button is focused (clicked)
                backgroundColor: "blue", // Example change color when clicked
                // Add any other styles you want to apply when clicked
              },
            }}
          >
            {icon}
          </Button>
        </Box>
      );
      break;
  }

  return <div>{buttonContent}</div>;
};
