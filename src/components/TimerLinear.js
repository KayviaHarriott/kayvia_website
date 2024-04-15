import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function LinearProgressWithLabel(props) {
    return (React.createElement(Box, { sx: { display: "flex", alignItems: "center" } },
        React.createElement(Box, { sx: { width: "100%", mr: 1 } },
            React.createElement(LinearProgress, { variant: "determinate", ...props })),
        React.createElement(Box, { sx: { minWidth: 35 } },
            React.createElement(Typography, { variant: "body2", color: "text.secondary" }, `${Math.round(props.value * 100)}`))));
}
export const TimerLiner = ({ endTime, play }) => {
    const [elapsedTime, setElapsedTime] = useState(0);
    useEffect(() => {
        let interval = null;
        // console.log("Here");
        if (play) {
            const startTime = Date.now() - elapsedTime;
            interval = setInterval(() => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                setElapsedTime(elapsed);
            }, 1000);
        }
        else if (!play && interval) {
            clearInterval(interval);
        }
        return () => {
            if (interval)
                clearInterval(interval);
        };
    }, [play, elapsedTime]);
    const progress = elapsedTime / (endTime * 1000); // Convert milliseconds to seconds
    return (React.createElement(Box, { sx: { width: "100%" } },
        React.createElement(LinearProgressWithLabel, { value: progress })));
};
