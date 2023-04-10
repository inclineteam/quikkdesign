import { createContext, useContext } from "react";
import { useStore } from "zustand";
import preferencesStore from "@/stores/preferences-store";

const PreferencesContext = createContext();

const PreferencesContextProvider = ({ children }) => {
  return (
    <PreferencesContext.Provider value={preferencesStore}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContextProvider;

export const usePreferencesStore = (selector) =>
  useStore(useContext(PreferencesContext), selector);
