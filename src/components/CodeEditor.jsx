import { EditorView } from "@codemirror/view";
import { IonIcon } from "@ionic/react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { Reduce } from "akar-icons";
import clsx from "clsx";
import { useState } from "react";
import { useEditorStore } from "../contexts/EditorContext";
import { oneDark } from "../themes/onedark";

const CodeEditor = ({ lang, value, update, icon, type }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const { minimizedEditors, updateMinimizedEditors } = useEditorStore();

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

  console.log(minimizedEditors);

  return (
    <div
      className={
        "h-max border-b border-l border-white/10 duration-200 first:border-l-0 " +
        clsx({
          "w-[80px]": isMinimized,
          "w-full": !isMinimized,
        })
      }
    >
      <header className="flex items-center justify-between border-y border-white/10 bg-[#282c34] px-2 py-1 text-sm uppercase text-white/60">
        <div
          className={`flex items-center space-x-2 ${clsx({
            "text-amber-500": type === "html",
            "text-sky-500": type === "css",
            "text-yellow-500": type === "js",
          })}`}
        >
          <IonIcon icon={icon} className="text-base" />
          {!isMinimized && <p className="font-semibold">{type}</p>}
        </div>

        <div className="ml-2 flex pl-2">
          <button
            onClick={toggleEditor}
            data-tooltip="Minimize"
            className={`tooltip ${clsx({
              "tlt-b": type !== "js",
              "tlt-br": type === "js",
            })} group flex items-center rounded-lg p-1 duration-200 hover:bg-cyan-500/10`}
          >
            <Reduce className="group-hover:text-cyan-400" size={16} />
          </button>
        </div>
      </header>

      <ReactCodeMirror
        height="80vh"
        extensions={[lang(), EditorView.lineWrapping]}
        value={value}
        onChange={(val) => update(val)}
        className={
          "w-full text-sm duration-150 [&>.cm-focused]:outline-none " +
          clsx({
            "opacity-0": isMinimized,
          })
        }
        theme={oneDark}
      />
    </div>
  );
};

export default CodeEditor;
