import React from "react";
import BackgroundContainer from "./components/BackgroundContainer";
import Button from "./components/Button";
import { Box, Typography } from "@mui/material";

const handleOnClick = () => {
  alert("Yay! I love you too!");
};

const App: React.FC = () => {
  return (
    <BackgroundContainer>
      <Typography
      variant="h5"
      align="center"
      sx={{
        margin: "20px 30% 0 30%",
        textShadow:
        "2px 2px 0 #F12585, -2px -2px 0 #F12585, 2px -2px 0 #F12585, -2px 2px 0 #F12585",
      }}
      >
      Will you be my valentine?
      </Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "70%",
        }}
      >
        <Button text="Yes" onClick={handleOnClick} sx={{ marginBottom: "10px" }} />
        <Button text="No" onClick={handleOnClick} />
      </Box>
    </BackgroundContainer>
  );
};

export default App;
