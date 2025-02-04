import React from "react";
import { Box } from "@mui/material";

const BackgroundContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "#CF8AB5",
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundContainer;
