import "./App.css";
import Router from "./router/Router.jsx";
import { theme } from "./theme/theme.js";
import { ThemeProvider } from "@mui/system";
import { Sing } from "./tools/sing.js";
import ScrollToTop from "./tools/ScrollToTop.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sing />
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}

export default App;
