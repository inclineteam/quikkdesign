import { createStore } from "zustand";

const preferencesStore = createStore((set, get) => ({
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
}));

export default preferencesStore;
