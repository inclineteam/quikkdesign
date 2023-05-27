import { useEditorStore } from "@/contexts/EditorContext";
import { useCodeEditorContext } from "@/contexts/CodeEditorContext";
import { ExpandIcon, MinimizeIcon } from "@/assets";
import clsx from "clsx";

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
    <div
      className={
        "ml-2 flex " +
        clsx({
          "ml-2": isMinimized,
        })
      }
    >
      <button
        data-tooltip={isMinimized ? "Expand" : "Minimize"}
        className={`tooltip ${
          type === "js" ? "tlt-br" : "tlt-b"
        } group flex items-center rounded-xl p-1 duration-200 hover:bg-cyan-500/10`}
        onClick={toggleEditor}
      >
        {isMinimized ? (
          <ExpandIcon className="h-6 w-6 group-hover:[&>path]:stroke-cyan-400" />
        ) : (
          <MinimizeIcon className="h-6 w-6 group-hover:[&>path]:stroke-cyan-400" />
        )}
      </button>
    </div>
  );
};

export default ToggleBtn;
