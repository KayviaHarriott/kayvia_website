import React, { useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { Box } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { WindowsButtons } from "./WindowButtons";
import { ThemeContext } from "../components/ThemeContext";
function PaperComponent(props) {
    const contextValue = useContext(ThemeContext);
    if (!contextValue) {
        return React.createElement("div", null, ".");
    }
    const { darkMode } = contextValue;
    return (React.createElement(Draggable, { handle: "#draggable-dialog-title", cancel: '[class*="MuiDialogContent-root"]' },
        React.createElement(Paper, { sx: {
                boxShadow: "none",
                borderRadius: 4,
                border: `3px solid ${!darkMode ? "#4F4F4F" : "#481813"}`,
                width: "1000px",
                height: "100% !important",
                // height: "700px",
                // margin: "0px",
                // padding: "0px",
                margin: "0px !important",
                padding: "0px !important",
                backgroundColor: "#D4EAF6",
            }, ...props })));
}
export const MoveableDialogue = ({ 
// title,
description, content, tag }) => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // const [zIndex, setZIndex] = useState<number>();
    const contextValue = useContext(ThemeContext);
    if (!contextValue) {
        return React.createElement("div", null, ".");
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
    React.createElement(React.Fragment, null,
        React.createElement(Box, { onClick: handleClickOpen },
            React.createElement(CustomButton, { variant: "contained", title: "Open" })),
        React.createElement(Draggable, { handle: "#draggable-dialog-title", cancel: '[class*="MuiDialogContent-root"]' },
            React.createElement(Box, { sx: {} },
                React.createElement(Dialog, { open: open, 
                    // onClose={handleClose}
                    PaperComponent: PaperComponent, "aria-labelledby": "draggable-dialog-title", hideBackdrop: true, sx: {
                        width: "fit-content",
                        height: "500px",
                        // backgroundColor: "green",
                        // zIndex: 0
                    }, PaperProps: {
                        sx: {
                            position: "absolute",
                            top: position.y,
                            left: position.x,
                        },
                    } },
                    React.createElement(DialogTitle, { className: "text-center", style: { cursor: "move", padding: "0px 0px" }, id: "draggable-dialog-title", sx: {
                        /*backgroundColor: "#457495", color: "white", px: 2 */
                        } },
                        " ",
                        React.createElement(Box, { className: "bg-[#EDEDED] flex justify-end items-end w-full gap-2 px-2 py-1", sx: {
                                borderBottom: `2px solid ${!darkMode ? "#858585" : "#481813"}`,
                                borderTopRightRadius: 14,
                                borderTopLeftRadius: 14,
                            } },
                            React.createElement(Box, { className: "flex w-full items-center" },
                                React.createElement(Box, { className: "w-1/3" }),
                                React.createElement(Box, { className: "w-1/3 flex text-center justify-center items-center gap-2", sx: {
                                        border: "2px solid #555555",
                                        borderRadius: 1,
                                        backgroundColor: "#C8C8C8",
                                        width: "100%"
                                    } },
                                    React.createElement("p", { className: "text-[10px] py-1 text-[#555555]" },
                                        "kaydev.com/",
                                        tag)),
                                React.createElement(Box, { className: "w-1/3 flex justify-end", onClick: handleClose },
                                    React.createElement(WindowsButtons, { variant: "default" }))))),
                    React.createElement(DialogContent, { sx: { marginTop: 2 } },
                        content,
                        React.createElement(DialogContentText, null, description))))))
    // </React.Fragment>
    );
};
