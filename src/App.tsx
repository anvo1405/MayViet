import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./config";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
