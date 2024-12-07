import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1f1f1f",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cfcfcf",
    },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid #333",
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          },
        },
      },
    },
  },
});
export default theme;
