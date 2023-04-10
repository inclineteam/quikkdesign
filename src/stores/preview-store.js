import { bootstrapLink, jqueryLink, tailwindLink } from "@/add-ons/superpowers";
import { ionIconLink, bsIconLink } from "@/add-ons/icons";
import { createRef } from "react";
import { createStore } from "zustand";
import editorStore from "./editor-store";
import preferencesStore from "./preferences-store";

const previewStore = createStore((set) => ({
  sourceDoc: "",
  previewRef: createRef(),
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
