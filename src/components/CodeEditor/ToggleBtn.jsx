import { Reduce } from "akar-icons";
import { Enlarge } from "akar-icons";
import { useEditorStore } from "../../contexts/EditorContext";
import { useCodeEditorContext } from "./Context.editor";

const ToggleBtn = ({ type }) => {
  const { minimizedEditors, updateMinimizedEditors } = useEditorStore();
  const { isMinimized, setIsMinimized } = useCodeEditorContext();

  // handles the minimize and expand func of the editor
  // there can only be 2 minimized editors
  const toggleEditor = () => {
    if (!isMinimized && minimizedEditors !== 2) {
      setIsMinimized(true);
      updateMinimizedEditors(minimizedEditors + 1);
    }

    if (isMinimized) {
      setIsMinimized(false);
      updateMinimizedEditors(minimizedEditors - 1);
    }
  };

  return (
    <div className="ml-2 flex border-l border-white/10 pl-2">
      <button
        data-tooltip={isMinimized ? "Expand" : "Minimize"}
        className={`tooltip ${
          type === "js" ? "tlt-br" : "tlt-b"
        } group flex items-center rounded-lg p-1 duration-200 hover:bg-cyan-500/10 hover:text-cyan-400`}
        onClick={toggleEditor}
      >
        {isMinimized ? <Enlarge size={16} /> : <Reduce size={16} />}
      </button>
    </div>
  );
};

export default ToggleBtn;
