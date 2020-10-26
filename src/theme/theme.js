import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif;",
    fontSize: 16,
  },

  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FF0000",
    },
  },
});

export default theme;
