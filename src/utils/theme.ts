import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Press Start 2P, cursive",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "134px",
          height: "43px",
          padding: "16px 38px",
          borderRadius: 12,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
          textTransform: "none",
          "&.MuiButton-yes": {
            backgroundColor: "#3B2558",
            border: "1px #402A5C solid",
            color: "#F1AEDB",
          },
          "&.MuiButton-no": {
            backgroundColor: "#F1AEDB",
            border: "1px rgb(59, 37, 88) solid",
            color: " #3B2558",
          },
        },
      },
    }
  },
});

export default theme;
