import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import "@fontsource/press-start-2p";
// import { WindowsButtons } from "../components/WindowButtons";

interface CarouselItemProps {
  title: string;
  description?: string;
  body?: string;
  link?: string;
  image?: string;
  mainColor: string;
  secondaryColor: string;
  button: ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  description,
  body,
  link,
  mainColor,
  secondaryColor,
  button,
}) => {
  return (
    <Box
      sx={{ width: "fit-content" }}
      className="transition-transform duration-300 hover:scale-105"
    >
     
      {title ? (
        <>
          <Box className="flex">
            <Box
              sx={{
                width: "fit-content",
                zIndex: 1,
                borderRadius: 2,
                boxShadow: "5px 5px 0px black",
              }}
            >
              <Box
                sx={{
                  backgroundColor: mainColor,
                  width: "400px",
                  border: "1px solid black",
                  borderRadius: 2,
                }}
              >
                <Box className="flex justify-end items-end w-full gap-2 px-2 pt-1"  sx={{
                    backgroundColor: secondaryColor,
                    height: "20px",
                    borderBottom: "1px solid black",
                    borderTopRightRadius: 6,
                    borderTopLeftRadius: 6,
                  }}>
                {/* <WindowsButtons variant="default" isActive={true}/> */}
                  {/* <WindowsButtons variant="default"/> */}
                </Box>
                <Box sx={{ padding: 2 }}>
                  <div>
                    {title && <p className="text-center font-bold">{title}</p>}
                    <div className="pt-2">
                      {description && (
                        <p className="text-base">{description}</p>
                      )}
                      {body && <p className="text-base">{body}</p>}
                    </div>
                  </div>
                  <div className="items-center justify-center w-full text-center pt-4">
                    {
                      link && button
                    }
                  </div>
                </Box>
                <Box
                  sx={{
                    backgroundColor: secondaryColor,
                    height: "20px",
                    border: "1px solid black",
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                    borderBottom: "none",
                    borderRight: "none",
                    borderLeft: "none",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Box sx={{ width: "270px" }}> </Box>
      )}
    </Box>
  );
};
