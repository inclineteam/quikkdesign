import { IonIcon } from "@ionic/react";
import clsx from "clsx";
import { useCodeEditorContext } from "@/contexts/CodeEditorContext";
import FormatBtn from "./FormatBtn";
import ToggleBtn from "./ToggleBtn";

const CodeEditorHeader = ({ icon, type }) => {
  const { isMinimized } = useCodeEditorContext();

  return (
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
        <FormatBtn />
        <ToggleBtn type={type} />
      </div>
    </header>
  );
};

export default CodeEditorHeader;
