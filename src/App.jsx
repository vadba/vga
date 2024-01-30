import "./App.css";
import Router from "./router/Router.jsx";
import { theme } from "./theme/theme.js";
import { ThemeProvider } from "@mui/system";
import { Sing } from "./tools/sing.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sing />
      <Router />
    </ThemeProvider>
  );
}

export default App;
