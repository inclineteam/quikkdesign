import { bootstrap, jquery, tailwind } from "@/add-ons/superpowers";
import { createRef } from "react";
import { createStore } from "zustand";

const editorStore = createStore((set, get) => ({
  html: "",
  css: "",
  js: "",
  sourceDoc: "",
  minimizedEditors: 0,
  previewRef: createRef(),
  jQueryPlugin: false,
  tailwindPlugin: false,
  bootstrapPlugin: false,
  useJQueryPlugin: () => set({ jQueryPlugin: !get().jQueryPlugin }),
  useTailwindPlugin: () => set({ tailwindPlugin: !get().tailwindPlugin }),
  useBootstrapPlugin: () => set({ bootstrapPlugin: !get().bootstrapPlugin }),
  updateHtml: (val) => set({ html: val }),
  updateCss: (val) => set({ css: val }),
  updateJs: (val) => set({ js: val }),
  updateMinimizedEditors: (val) => set({ minimizedEditors: val }),
  updateSourceDoc: () =>
    set({
      sourceDoc: `
      ${
        get().bootstrapPlugin
          ? `<link rel="stylesheet" href="${bootstrap}" />`
          : ""
      }
      <html>
      ${get().html}
      </html>
      <style>
        ${get().css}
      </style>
      ${get().tailwindPlugin ? `<script src="${tailwind}"></script>` : ""}
      ${get().jQueryPlugin ? `<script src="${jquery}"></script>` : ""}
      <script>
        ${get().js}
      </script>
    `,
    }),
}));

export default editorStore;
