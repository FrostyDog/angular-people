import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif;",
    fontSize: 16,
    h1: {
      fontSize: "3.5rem",
    },
    h6: {
      fontWeight: 900,
    },

    p: {
    },
  },

  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      // main: "#24292e",
      main: "#dd1b16",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
