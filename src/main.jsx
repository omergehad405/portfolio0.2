import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Component/App.jsx";
import { AppProvider } from "./Component/Context/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
