import { createContext, useContext } from "react";
import { useStore } from "zustand";
import previewStore from "@/stores/preview-store";

const PreviewContext = createContext();

const PreviewContextProvider = ({ children }) => {
  return (
    <PreviewContext.Provider value={previewStore}>
      {children}
    </PreviewContext.Provider>
  );
};

export default PreviewContextProvider;

export const usePreviewStore = (selector) =>
  useStore(useContext(PreviewContext), selector);
