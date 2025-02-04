import React, { useState } from "react";
import BackgroundContainer from "./BackgroundContainer";
import BackgroundImages from "./BackgroundImages";
import { Box, Typography } from "@mui/material";
import GiftBoxAnimation from "../animation/GiftBoxAnimation";

const GiftPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("You have a gift from Chuttaa!");

  const handleBoxClick = () => {
    setIsOpen(true);
    setMessage("Be ready by 6pm, princess!")
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
            marginTop: { xs: "-150px", sm: "-200px", md: "-300px" }, // Responsive margin top
            marginBottom: { xs: "50px", sm: "75px", md: "100px" }, // Responsive margin bottom
          }}
        >
          {message}
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "200px",
            height: "200px",
            cursor: "pointer",
          }}
          onClick={handleBoxClick}
        ><GiftBoxAnimation />
        </Box>
      </Box>
    </BackgroundContainer>
  );
};

export default GiftPage;