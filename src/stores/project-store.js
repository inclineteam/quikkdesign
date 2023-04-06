import { create } from "zustand";

const useProjectStore = create((set) => ({
  projectName: "Untitled Project",
  updateProjectName: (val) => set({ projectName: val }),
}));

export default useProjectStore;
