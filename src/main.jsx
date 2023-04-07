import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EditorContextProvider from "./contexts/EditorContext";
import ProjectContextProvider from "./contexts/ProjectContext";
import "./index.css";
import "./tooltip.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectContextProvider>
      <EditorContextProvider>
        <App />
      </EditorContextProvider>
    </ProjectContextProvider>
  </React.StrictMode>
);
