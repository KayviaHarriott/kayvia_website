import { Box } from "@mui/material";
import React, { /*useState*/ } from "react";
import Play from "../assets/icons/Play.png";
import Pause from "../assets/icons/Pause.png";
import ablumart1 from "../assets/images/veronicas_untouched_coverart.jpg";
interface MusicPlayerProps {
  source: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ source }) => {
  const audio = new Audio(source);
//   const [togglePlay, setTogglePlay] = useState();

  const start = () => {
    console.log("Play clicked");
    audio.play();
  };
  const pause = () => {
    console.log("Pause clicked");
    audio.pause();
  };

//   const style = {  };
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: "300px",
          backgroundColor: "green",
          position: "absolute",
          bottom: 80,
          right: 10,
          zIndex: 2,
        }}
      >
        <Box sx={{ border: "3px solid black" }} className="flex flex-col">
          <Box sx={{}}>
            <img src={ablumart1} alt="ablum-art" />
          </Box>
          <Box
            sx={{borderTop: "2px solid black", backgroundColor: "white"}}
            className="flex p-1 my-auto justify-items items-center"
          >
            <img
              src={Play}
              alt="Play"
              className="w-[25px] h-[25px] cursor-pointer"
              onClick={start}
            />
            <img
              src={Pause}
              alt="Pause"
              className="w-[25px] h-[20px] cursor-pointer"
              onClick={pause}
            />
          </Box>
          {/* <Box sx={style} className="flex justify-items items-center p-1">
              <Box className="w-[240px]"></Box>
            </Box> */}
          {/* <Box sx={style}> Volume</Box> */}
        </Box>
      </Box>
    </>
  );
};
