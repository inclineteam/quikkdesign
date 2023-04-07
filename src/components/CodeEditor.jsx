import { EditorView } from "@codemirror/view";
import { IonIcon } from "@ionic/react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { Reduce } from "akar-icons";
import clsx from "clsx";
import { useState } from "react";
import { useEditorStore } from "../contexts/EditorContext";
import { oneDark } from "../themes/onedark";
import { colorPicker } from "@replit/codemirror-css-color-picker";
import {
  abbreviationTracker,
  expandAbbreviation,
} from "@emmetio/codemirror6-plugin";
import { keymap } from "@codemirror/view";
import { Enlarge } from "akar-icons";
import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";
import cssParser from "prettier/parser-postcss";
import jsParser from "prettier/parser-babel";
import { colorWandOutline, sparkles, sparklesOutline } from "ionicons/icons";
import { Sparkles } from "akar-icons";

const CodeEditor = ({ lang, value, update, icon, type }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const { minimizedEditors, updateMinimizedEditors } = useEditorStore();

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

  // returns the needed extension for each editor
  const exts = () => {
    const defaultExt = [lang(), EditorView.lineWrapping, colorPicker];

    if (type === "html") {
      return [
        ...defaultExt,
        abbreviationTracker(),
        keymap.of([
          {
            key: "Ctrl-e",
            run: expandAbbreviation,
          },
        ]),
      ];
    }

    return defaultExt;
  };

  // uses prettier standalone to format code
  const formatCode = () => {
    switch (type) {
      case "html":
        const formattedHtml = prettier.format(value, {
          parser: "html",
          plugins: [htmlParser],
        });
        update(formattedHtml);
        break;

      case "css":
        const formattedCss = prettier.format(value, {
          parser: "css",
          plugins: [cssParser],
        });
        update(formattedCss);
        break;

      case "js":
        const formattedJs = prettier.format(value, {
          parser: "babel",
          plugins: [jsParser],
        });
        update(formattedJs);
        break;
    }
  };

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

        <div className="flex items-center">
          {!isMinimized && (
            <div className="ml-2 pl-2">
              <button
                data-tooltip="Format"
                className="tooltip tlt-b group flex items-center rounded-lg p-1 hover:bg-yellow-500/10 hover:text-yellow-400"
                onClick={formatCode}
              >
                <Sparkles size={16} />
              </button>
            </div>
          )}

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
        </div>
      </header>

      <ReactCodeMirror
        height="80vh"
        extensions={exts()}
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
