import { useEditorStore } from "@/contexts/EditorContext";
import { useEffect } from "react";

export function useBeforeUnload() {
  const editorState = useEditorStore()

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!editorState.html && !editorState.css && !editorState.js) return;
      e.preventDefault();
      e.returnValue = ""; // Required for Chrome
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [editorState.html, editorState.css, editorState.js]);
}