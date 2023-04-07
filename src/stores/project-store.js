import { createStore } from "zustand";

const projectStore = createStore((set) => ({
  projectName: "Untitled Project",
  updateProjectName: (val) => set({ projectName: val }),
}));

export default projectStore;
