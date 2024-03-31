import { Button } from "@mui/material";
import React, { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext";
// import { textBodyStyle } from "../styles/TextStyles";

interface CustomButtonProps {
  title?: string;
  url?: string;
  link?: string;
  icon?: ReactNode;
  variant: "contained" | "text" | "outlined";

}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  url,
  link,
  icon,
  variant,
}) => {
  const navigate = useNavigate();
  const handleClick = (url: string) => {
    if (url) {
      navigate(url);
    }
  };

  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    return <div>.</div>;
  }

  const { darkMode } = contextValue;

  return (
    <>
      <Button
        variant={variant}
        onClick={() => handleClick(url ? url : "")}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          color: darkMode ? "white" : "black",
          boxShadow: "none",
          border: "4px solid black",
          // color: "black",
          backgroundColor: "white",
          borderRadius: 0,
        }}
      >
        {link}
        {title}
        {icon}
      </Button>
    </>
  );
};
