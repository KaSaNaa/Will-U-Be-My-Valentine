import React from 'react';
import Button from './Button';
import { Box } from '@mui/material';

interface ResponseButtonsProps {
  handleOnClick: (response: "yes" | "no") => void;
}

const ResponseButtons: React.FC<ResponseButtonsProps> = ({ handleOnClick }) => {
  return (
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
  );
};

export default ResponseButtons;