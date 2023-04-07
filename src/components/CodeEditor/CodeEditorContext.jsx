import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const CodeEditorContext = createContext();

const CodeEditorContextProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <CodeEditorContext.Provider value={{ isMinimized, setIsMinimized }}>
      {children}
    </CodeEditorContext.Provider>
  );
};

export default CodeEditorContextProvider;

export const useCodeEditorContext = () => useContext(CodeEditorContext);
