import { IonIcon } from "@ionic/react";
import clsx from "clsx";
import { useCodeEditorContext } from "@/contexts/CodeEditorContext";

const CodeEditorHeader = ({ children, icon, type }) => {
  const { isMinimized } = useCodeEditorContext();

  return (
    <header
      className={
        "flex items-center justify-between rounded-xl border-t border-white/10 bg-[#2E313E] py-1 pl-4 pr-2 text-sm uppercase text-[#898EA1] shadow duration-200 " +
        clsx({
          "!border-transparent bg-transparent !pl-2 shadow-none": isMinimized,
        })
      }
    >
      <div
        className={`flex items-center space-x-2 ${clsx({
          "text-amber-400": type === "html",
          "text-sky-400": type === "css",
          "text-yellow-400": type === "js",
        })}`}
      >
        <IonIcon icon={icon} className="text-lg" />
        {!isMinimized && <p className="font-bold">{type}</p>}
      </div>

      <div className="flex items-center">{children}</div>
    </header>
  );
};

export default CodeEditorHeader;
