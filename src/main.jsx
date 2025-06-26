import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { HashRouter } from "react-router-dom";
import { ProjectsProvider } from "./components/context/ProjectsContext/ProjectsContext.jsx";
import { AppProvider } from "./components/context/AppContext/appContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AppProvider>
      <ProjectsProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProjectsProvider>
    </AppProvider>
  </HashRouter>
);
