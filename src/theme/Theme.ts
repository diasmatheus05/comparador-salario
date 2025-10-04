import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  //        0  1  2  3   4   5   6   7   8   9   10  11  12
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64],
  palette: {
    mode: "light",
    background: {
      paper: "#FFFFFF",
      default: "#F4F4F6",
    },
    primary: {
      "100": "#D6C4FD",
      "200": "#BB9DFB",
      "300": "#9F75FA",
      "400": "#844EF9",
      "500": "#6A28F7",
      "600": "#5109EC",
      "700": "#4307C5",
      "800": "#36069D",
      "900": "#280476",
    },
    grey: {
      "100": "#BBBEC9",
      "200": "#A4A9B6",
      "300": "#8E93A4",
      "400": "#777D92",
      "500": "#61677A",
      "600": "#525666",
      "700": "#40434F",
      "800": "#2D3039",
      "900": "#1B1D22",
    },
    success: {
      "100": "#B8F4C0",
      "200": "#95EFA1",
      "300": "#71EA81",
      "400": "#4EE462",
      "500": "#23DE3C",
      "600": "#1DC333",
      "700": "#18A02A",
      "800": "#137C21",
      "900": "#0D5917",
    },
    warning: {
      "100": "#FBF0C6",
      "200": "#F8E7A0",
      "300": "#F6DD79",
      "400": "#F3D353",
      "500": "#F0C726",
      "600": "#E5BA10",
      "700": "#BF9B0D",
      "800": "#997C0B",
      "900": "#725D08",
    },
    info: {
      "100": "#C4D7FD",
      "200": "#9DBCFB",
      "300": "#75A1FA",
      "400": "#4E87F9",
      "500": "#1963F7",
      "600": "#0954EC",
      "700": "#0746C5",
      "800": "#06389D",
      "900": "#042A76",
    },
    error: {
      "100": "#FBCFC6",
      "200": "#F8AEA0",
      "300": "#F68E79",
      "400": "#F36E53",
      "500": "#F04826",
      "600": "#E53310",
      "700": "#BF2B0D",
      "800": "#99220B",
      "900": "#721A08",
    },
    text: {
      disabled: "#40434F",
      primary: "#1B1D22",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      lineHeight: 2,
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 2,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    button: {
      fontWeight: 700,
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 300,
      lineHeight: 1.2,
      // color: "#000000",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.subtitle2,
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.grey[400],
        }),
      },
    },
  },
});

export default theme;
