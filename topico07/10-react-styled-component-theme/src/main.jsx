import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./styles/index.styled.js";
import App from "./App.jsx";
import { ChangeThemeProvider } from "./context/ChangeThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <ChangeThemeProvider>
      <App />
    </ChangeThemeProvider>
  </StrictMode>
);
