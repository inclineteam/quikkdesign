import { createStore } from "zustand";

const editorStore = createStore((set) => ({
  html: "",
  css: "",
  js: "",
  minimizedEditors: 0,
  currentEditor: "",
  updateCurrentEditor: (editor) => set({ currentEditor: editor }),
  updateHtml: (val) => set({ html: val }),
  updateCss: (val) => set({ css: val }),
  updateJs: (val) => set({ js: val }),
  updateMinimizedEditors: (val) => set({ minimizedEditors: val }),
}));

export default editorStore;
