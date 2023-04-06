import { createRef } from "react";
import { create } from "zustand";

const useEditorStore = create((set, get) => ({
  html: "",
  css: "",
  js: "",
  sourceDoc: "",
  minimizedEditors: 0,
  previewRef: createRef(),
  updateHtml: (val) => set({ html: val }),
  updateCss: (val) => set({ css: val }),
  updateJs: (val) => set({ js: val }),
  updateMinimizedEditors: (val) => set({ minimizedEditors: val }),
  updateSourceDoc: () =>
    set({
      sourceDoc: `
    <html>${get().html}</html>
    <style>${get().css}</style>
    <script>${get().js}</script>
    `,
    }),
}));

export default useEditorStore;
