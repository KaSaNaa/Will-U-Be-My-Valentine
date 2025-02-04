import React from "react";
import BackgroundContainer from "./components/BackgroundContainer";
import Button from "./components/Button";
import { Box, Typography } from "@mui/material";

const App: React.FC = () => {
  const [response, setResponse] = React.useState<"yes" | "no" | null>(null);

  const handleOnClick = (response: string) => {
    if (response === "yes") {
      setResponse(response);
      navigator.vibrate(200);
    }
    if (response === "no") {
      setResponse(response);
      navigator.vibrate([200, 100, 200]);
    }
  };

  return (
    <BackgroundContainer>
      {/* Full Screen Centered Container */}
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
        {/* Title */}
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
          Will you be my valentine?
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2, // Space between buttons
            width: "100%", // Full width for mobile
            maxWidth: "200px", // Limit button width on larger screens
          }}
        >
          <Button
            text="Yes"
            onClick={() => handleOnClick("yes")}
            sx={{
              bgcolor: "#F12585",
              ":hover": { bgcolor: "#d4146a" },
              color: "#fff",
            }}
          />
          <Button
            text="No"
            onClick={() => handleOnClick("no")}
            sx={{
              bgcolor: "#ccc",
              ":hover": { bgcolor: "#bbb" },
              color: "#000",
            }}
          />
        </Box>
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
              src={
                response === "yes"
                  ? "/src/assets/happy.gif"
                  : "/src/assets/crying.gif"
              }
              width={250}
              height={400}
              alt="Valentine Gif"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        )}
      </Box>
    </BackgroundContainer>
  );
};

export default App;
