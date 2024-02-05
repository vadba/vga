import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4a4946",
    },
    secondary: {
      main: "#c1a584",
    },
    slide: {
      main: "#937d64",
    },
    success: {
      main: "#26bea2",
    },
    login: {
      main: "white",
    },
    activeLink: "#15120f",
    socialLinkHover: "#af9751",
    background: {
      default: "#f2efea",
      paper: "#fafafa",
    },
    text: {
      primary: "#4a4946",
      secondary: "rgba(0,0,0,0.7)",
      black: "#000000",
    },
    info: {
      main: "#8a8a8a",
    },
    cabinetBeforeLink: "lightgoldenrodyellow",
    cabinetTextHoverLink: "yellowgreen",
    categoryHeadBg: "rgba(250,216,219,0.22)",
    copyright: "#2B2B2B",
  },
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
    fontSize: 16,
    fontSizeIcon: "31px",
    fontSizeIconHover: "34px",
    fontSizeDashboard: "18px",
    h3: {
      fontSize: "3.4285714285714284rem",
    },
  },
  spacing: 5,
  maxWidth: "1280px",
  breakpoints: {
    values: {
      xs: 0,
      cm: 591,
      sm: 768,
      dc: 815,
      md: 991,
      lg: 1140,
      xl: 1440,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: 1140,
        },
      },
    },
  },
});
