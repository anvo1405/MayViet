import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A79D",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },
});

export default theme;
