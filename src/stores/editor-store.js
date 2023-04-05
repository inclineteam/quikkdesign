import { create } from "zustand";

const useEditorStore = create((set) => ({
  html: "",
  css: "",
  js: "",
  updateHtml: (val) => set({ html: val }),
  updateCss: (val) => set({ css: val }),
  updateJs: (val) => set({ js: val }),
}));

export default useEditorStore;
