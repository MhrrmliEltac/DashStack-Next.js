"use client";
import { createTheme } from "@mui/material/styles";

const FONT_FAMILY = "var(--font-nunito-sans)";
const BASE_SHADOW = "6px 6px 54px rgba(0, 0, 0, 0.03)";
const TABLE_BG = "#FCFDFD";

export const theme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY,
    h1: { fontSize: 32, fontWeight: 800 },
    h2: { fontSize: 28, fontWeight: 800, letterSpacing: "1px" },
    h3: { fontSize: 24, fontWeight: 700, lineHeight: "20px" },
    h4: { fontSize: 20, fontWeight: 800 },
    h5: { fontSize: 18, fontWeight: 700 },
    h6: { fontSize: 16, fontWeight: 600 },
    body1: { fontSize: 14, fontWeight: 600, letterSpacing: "0.3px" },
    body2: { fontSize: 12, fontWeight: 600 },
    button: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: "none",
      color: "#FFFFFF",
    },
  },
  palette: {
    primary: {
      main: "#202224",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4880FF",
    },
    text: {
      primary: "#282D32",
    },
    success: {
      main: "rgba(0, 182, 155, 0.2)",
      contrastText: "#00B69B",
    },
    error: {
      main: "rgba(239, 56, 38, 0.2)",
      contrastText: "#EF3826",
    },
    warning: {
      main: "rgba(255, 167, 86, 0.2)",
      contrastText: "#FFA756",
    },
    info: {
      main: "rgba(98, 38, 239, 0.2)",
      contrastText: "#6226EF",
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
          boxShadow: "6px 6px 54px 0px rgba(0, 0, 0, 0.0288)",
        },
        containedInfo: {
          backgroundColor: "#FFFFFF",
        },
        text: {
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
          height: 38,
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
          padding: "30px",
          [`@media (min-width:1200px)`]: {
            maxWidth: "1635px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: "37px 32px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          filter: "drop-shadow(6px 6px 54px rgba(0, 0, 0, 0.05))",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: TABLE_BG,
          boxShadow: BASE_SHADOW,
          border: "1px solid #B9B9B9",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: TABLE_BG,
          height: 50,
          borderBottom: "1px solid #D5D5D5",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: TABLE_BG,
          padding: "15px 31px",
          textTransform: "uppercase",
          borderBottom: 0,
          boxShadow: "none",
        },
        body: {
          backgroundColor: TABLE_BG,
          padding: "28px 31px",
          borderBottom: 0,
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          fontSize: 12,
          padding: "4px 10px",
          backgroundColor: "#F5F6FA",
          color: "#282D32",
        },
        label: {
          padding: 0,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
          fontSize: 14,
          fontWeight: 700,
          backgroundColor: "#4880FF",
          color: "#fff",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: BASE_SHADOW,
          backgroundColor: "#fff",
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0 24px",
          minHeight: 56,
          "& .MuiAccordionSummary-content": {
            margin: "12px 0",
            fontWeight: 700,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0 24px 16px",
          fontSize: 14,
          color: "#282D32",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#202224",
          color: "#fff",
          fontSize: 12,
          fontWeight: 600,
          borderRadius: 6,
          padding: "8px 12px",
        },
        arrow: {
          color: "#202224",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
          borderBottom: "1px solid #D5D5D5",
        },
        indicator: {
          backgroundColor: "#4880FF",
          height: 3,
          borderRadius: 2,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          fontSize: 14,
          minHeight: 40,
          padding: "8px 16px",
          "&.Mui-selected": {
            color: "#4880FF",
          },
        },
      },
    },
  },
});
