import { createContext, useContext } from "react";
import { useStore } from "zustand";
import projectStore from "@/stores/project-store";

const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={projectStore}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;

export const useProjectStore = (selector) =>
  useStore(useContext(ProjectContext), selector);
