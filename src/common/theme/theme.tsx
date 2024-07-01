import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#FF5775",
    },
    secondary: {
      main: "#ffdaee",
    },
    info: {
      main: "#507587",
    },
  },
  typography: {
    fontFamily: "Pretendard",
  },
};

export const theme = createTheme(themeOptions);
