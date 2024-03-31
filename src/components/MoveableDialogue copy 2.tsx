import React, { ReactNode /* useState*/ } from "react";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { Box } from "@mui/material";
import { CustomButton } from "./CustomButton";

interface MoveableDialogueProps {
  title: string;
  description: string;
  content: ReactNode;
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper
        sx={{
          boxShadow: "none",
          borderRadius: 0,
          border: "4px solid black",
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
  title,
  description,
  content,
}) => {
  const [open, setOpen] = React.useState(false);
  // const [zIndex, setZIndex] = useState<number>();

  const handleClickOpen = () => {
    // setZIndex(5)
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
       <Box sx={{ }}>
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
          >
            <DialogTitle
              className="text-center"
              style={{ cursor: "move" }}
              id="draggable-dialog-title"
              sx={{ backgroundColor: "#457495", color: "white" }}
            >
              <Box className="flex justify-end items-end w-full gap-2 px-2 pt-1">
                <p className="cursor-pointer" onClick={() => handleClose()}>
                  X
                </p>
              </Box>
  
              <p> {title}</p>
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
