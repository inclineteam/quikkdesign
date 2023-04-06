import { IonIcon } from "@ionic/react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { Sparkles } from "akar-icons";
import { Reduce } from "akar-icons";
import clsx from "clsx";
import { oneDark } from "../themes/onedark";

const CodeEditor = ({ lang, value, update, icon, type }) => {
  return (
    <div className="h-max w-full border-b border-l border-white/10 first:border-l-0">
      <header className="flex items-center justify-between border-y border-white/10 bg-[#282c34] px-2 py-1 text-sm uppercase text-white/60">
        <div
          className={`flex items-center space-x-2 ${clsx({
            "text-amber-500": type === "html",
            "text-sky-500": type === "css",
            "text-yellow-500": type === "js",
          })}`}
        >
          <IonIcon icon={icon} className="text-base" />
          <p className="font-semibold">{type}</p>
        </div>

        <div className="ml-2 flex pl-2">
          <button
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
        extensions={[lang()]}
        value={value}
        onChange={(val) => update(val)}
        className="w-full text-sm [&>.cm-focused]:outline-none"
        theme={oneDark}
      />
    </div>
  );
};

export default CodeEditor;
