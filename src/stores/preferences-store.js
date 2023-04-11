import { createStore } from "zustand";

const preferencesStore = createStore((set, get) => ({
  fontSize: 14,
  tabSize: 2,
  jQueryPlugin: false,
  tailwindPlugin: false,
  bootstrapPlugin: false,
  ionIconPlugin: false,
  bsIconPlugin: false,
  useIonIconPlugin: () => set({ ionIconPlugin: !get().ionIconPlugin }),
  useBsIconPlugin: () => set({ bsIconPlugin: !get().bsIconPlugin }),
  useJQueryPlugin: () => set({ jQueryPlugin: !get().jQueryPlugin }),
  useTailwindPlugin: () => set({ tailwindPlugin: !get().tailwindPlugin }),
  useBootstrapPlugin: () => set({ bootstrapPlugin: !get().bootstrapPlugin }),
  updateFontSize: (val) => set({ fontSize: val }),
  updateTabSize: (val) => set({ tabSize: val }),
}));

export default preferencesStore;
