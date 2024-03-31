import React, { ReactNode /* useState*/, useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { Box } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { WindowsButtons } from "./WindowButtons";
import { ThemeContext } from "../components/ThemeContext";

interface MoveableDialogueProps {
  title: string;
  tag: string;
  description: string;
  content: ReactNode;
}

function PaperComponent(props: PaperProps) {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    return <div>.</div>;
  }

  const { darkMode } = contextValue;

  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper
        sx={{
          boxShadow: "none",
          borderRadius: 4,
          border:`3px solid ${!darkMode ? "#4F4F4F" : "#481813"}`,
          width: "1000px",
          height: "100% !important",
          // height: "700px",
          // margin: "0px",
          // padding: "0px",
          margin: "0px !important",
          padding: "0px !important",
          backgroundColor: "#D4EAF6",
          
        }}
        {...props}
      />
    </Draggable>
  );
}

export const MoveableDialogue: React.FC<MoveableDialogueProps> = ({
  // title,
  description,
  content,
  tag
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [zIndex, setZIndex] = useState<number>();
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    return <div>.</div>;
  }

  const { darkMode } = contextValue;

  const handleClickOpen = () => {
    // setZIndex(5)
    const randomX = Math.random() * (window.innerWidth - 500); // Adjust 500 according to your dialog width
    const randomY = Math.random() * (window.innerHeight - 500); // Adjust 500 according to your dialog height
    setPosition({ x: randomX, y: randomY });
    setOpen(true);
  };

  const handleClose = () => {
    // setZIndex(0)
    setOpen(false);
  };

  return (
    // <React.Fragment>
    <>
      <Box onClick={handleClickOpen}>
        <CustomButton variant="contained" title="Open" />
      </Box>
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Box sx={{}}>
          <Dialog
            open={open}
            // onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
            hideBackdrop={true}
            sx={{
              width: "fit-content",
              height: "500px",
              // backgroundColor: "green",

              // zIndex: 0
            }}
            PaperProps={{
              sx: {
                position: "absolute",
                top: position.y,
                left: position.x,
              },
            }}
          >
            <DialogTitle
              className="text-center"
              style={{ cursor: "move", padding: "0px 0px" }} // Add padding: 0 here
              id="draggable-dialog-title"
              sx={
                {
                  /*backgroundColor: "#457495", color: "white", px: 2 */
                }
              }
            >
              {" "}
              <Box
                className="bg-[#EDEDED] flex justify-end items-end w-full gap-2 px-2 py-1"
                sx={{
                  borderBottom: `2px solid ${
                    !darkMode ? "#858585" : "#481813"
                  }`,
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
                      width: "100%"
                    }}
                  >
                    {/* <img src={GlobeIcon} alt="Globe Icon" className="w-5"/> */}
                    <p className="text-[10px] py-1 text-[#555555]">
                      kaydev.com/{tag}
                    </p>
                  </Box>
                  <Box className="w-1/3 flex justify-end" onClick={handleClose}>
                    <WindowsButtons variant="default"  />
                  </Box>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ marginTop: 2 }}>
              {content}
              <DialogContentText>{description}</DialogContentText>
            </DialogContent>
            {/* <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions> */}
          </Dialog>
        </Box>
      </Draggable>
    </>
    // </React.Fragment>
  );
};
