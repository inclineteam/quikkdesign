import { bootstrapLink, jqueryLink, tailwindLink } from "@/add-ons/superpowers";
import { ionIconLink, bsIconLink } from "@/add-ons/icons";
import { createRef } from "react";
import { createStore } from "zustand";
import editorStore from "./editor-store";
import preferencesStore from "./preferences-store";

const previewStore = createStore((set) => ({
  sourceDoc: "",
  previewRef: createRef(),
  screenRef: createRef(),
  responsiveScreenRef: createRef(),
  screenHeight: 0,
  screenWidth: 0,
  maxScreenWidth: 0,
  resizer: false,
  responsiveScreenWidth: 0,
  responsiveScreenHeight: 0,
  toggleResizer: (bool) => set({ resizer: bool }),
  updateMaxScreenWidth: (sz) => set({ maxScreenWidth: sz }),
  updateScreenHeight: (sz) => set({ screenHeight: sz }),
  updateScreenWidth: (sz) => set({ screenWidth: sz }),
  updateResponsiveScreenHeight: (sz) => set({ responsiveScreenHeight: sz }),
  updateResponsiveScreenWidth: (sz) => set({ responsiveScreenWidth: sz }),
  updateSourceDoc: () =>
    set({
      sourceDoc: `
      ${preferencesStore.getState().bootstrapPlugin ? bootstrapLink : ""}
      ${preferencesStore.getState().bsIconPlugin ? bsIconLink : ""}
      ${preferencesStore.getState().jQueryPlugin ? jqueryLink : ""}
      <html>
      ${editorStore.getState().html}
      </html>
      <style>
        ${editorStore.getState().css}
      </style>
      ${preferencesStore.getState().ionIconPlugin ? ionIconLink : ""}
      ${preferencesStore.getState().tailwindPlugin ? tailwindLink : ""}
      <script>
        ${editorStore.getState().js}
      </script>
    `,
    }),
}));

export default previewStore;
