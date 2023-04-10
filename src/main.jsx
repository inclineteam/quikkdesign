import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import "./css/tooltip.css";
import PreviewContextProvider from "./contexts/PreviewContext";
import EditorContextProvider from "./contexts/EditorContext";
import ProjectContextProvider from "./contexts/ProjectContext";
import PreferencesContextProvider from "./contexts/PreferencesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectContextProvider>
      <PreferencesContextProvider>
        <EditorContextProvider>
          <PreviewContextProvider>
            <App />
          </PreviewContextProvider>
        </EditorContextProvider>
      </PreferencesContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>
);
