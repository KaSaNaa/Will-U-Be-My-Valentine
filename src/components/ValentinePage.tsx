import React from "react";
import BackgroundContainer from "./BackgroundContainer";
import BackgroundImages from "./BackgroundImages";
import ResponseButtons from "./ResponseButtons";
import { Box, Typography } from "@mui/material";

interface ValentinePageProps {
  questionText: string;
  yesGif?: string;
  noGif?: string;
  onYesClick?: () => void;
  onNoClick?: () => void;
}

const ValentinePage: React.FC<ValentinePageProps> = ({
  questionText,
  yesGif,
  noGif,
  onYesClick,
  onNoClick,
}) => {
  const [response, setResponse] = React.useState<"yes" | "no" | null>(null);

  const handleOnClick = (response: "yes" | "no") => {
    setResponse(response);
    if (response === "yes") {
      navigator.vibrate(200);
      const happyAudio = new Audio(`${import.meta.env.VITE_PUBLIC_URL}/happy.mp3`);
      happyAudio.play();
      happyAudio.onended = onYesClick || null;
    } else if (response === "no") {
      navigator.vibrate([200, 100, 200]);
      const cryingAudio = new Audio(`${import.meta.env.VITE_PUBLIC_URL}/crying.mp3`);
      if (onNoClick) {
        onNoClick();
      }
      cryingAudio.play();
      cryingAudio.onended = () => {
        const cryingAudio2 = new Audio(`${import.meta.env.VITE_PUBLIC_URL}/crying.mp3`);
        cryingAudio2.play();
        
      };
    }
  };

  return (
    <BackgroundContainer>
      <BackgroundImages />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center horizontally
          justifyContent: "center", // Center vertically
          height: "100vh", // Full viewport height
          textAlign: "center", // Center text
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textShadow:
              "2px 2px 0 #F12585, -2px -2px 0 #F12585, 2px -2px 0 #F12585, -2px 2px 0 #F12585",
            fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive font size
            marginTop: { xs: "-200px", sm: "-300px", md: "-400px" }, // Responsive margin top
            marginBottom: { xs: "50px", sm: "75px", md: "100px" }, // Responsive margin bottom
          }}
        >
          {questionText}
        </Typography>
        <ResponseButtons handleOnClick={handleOnClick} />
        {response && (
          <Box
            sx={{
              position: "absolute",
              bottom: 20, // Adjust as needed
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={response === "yes" ? yesGif : noGif}
              width={200}
              height={200}
              alt="Valentine Gif"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        )}
      </Box>
    </BackgroundContainer>
  );
};

export default ValentinePage;
