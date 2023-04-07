import { createContext, useContext } from "react";
import { useStore } from "zustand";
import editorStore from "@/stores/editor-store";

const EditorContext = createContext();

const EditorContextProvider = ({ children }) => {
  return (
    <EditorContext.Provider value={editorStore}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;

export const useEditorStore = (selector) =>
  useStore(useContext(EditorContext), selector);
