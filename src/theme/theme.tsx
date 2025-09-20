"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-nunito-sans)",
    h1: {
      fontSize: 32,
      fontWeight: 800,
    },
    h2: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "1px",
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "20px",
    },
    h4: {
      fontSize: 20,
      fontWeight: 800,
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "0.3px",
    },
    body2: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0px",
    },
    button: {
      color: "#FFFFFF",
      fontSize: 14,
      fontWeight: 700,
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#202224",
      light: "#202224",
      dark: "#FFFFFF",
    },
    secondary: {
      main: "#4880FF",
      light: "#4880FF",
      dark: "#4880FF",
    },
    text: {
      primary: "#282D32",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        colorPrimary: "#4880FF",
        contained: {
          padding: "0px 16px",
          textTransform: "none",
          width: "192px",
          height: "50px",
          borderRadius: "6px",
        },
        containedInfo: {
          backgroundColor: "#FFFFFF",
        },
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F6FA",
          height: "38px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D5D5D5",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D5D5D5",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D5D5D5",
          },
        },
        input: {
          padding: "10px 14px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "30px !important",
          paddingRight: "30px !important",
          paddingTop: "30px !important",
          [`@media (min-width:1200px)`]: {
            maxWidth: "1635px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "14px",
          padding: "37px 32px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          filter: "drop-shadow(6px 6px 54px rgba(0, 0, 0, 0.05))",
        },
      },
    },
  },
});
