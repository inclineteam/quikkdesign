import clsx from "clsx";
import { useCodeEditorContext } from "@/contexts/CodeEditorContext";
import { ReactComponent as LogoCSSIcon } from "@/assets/logo/logo-css3.svg";
import { ReactComponent as LogoHTMLIcon } from "@/assets/logo/logo-html5.svg";
import { ReactComponent as LogoJSIcon } from "@/assets/logo/logo-javascript.svg";

const icons = {
  html: <LogoHTMLIcon className="h-5 w-5" />,
  css: <LogoCSSIcon className="h-5 w-5" />,
  js: <LogoJSIcon className="h-5 w-5" />,
};

const iconColors = {
  html: "fill-amber-400 text-amber-400",
  css: "fill-sky-400 text-sky-400",
  js: "fill-yellow-400 text-yellow-400",
};

const CodeEditorHeader = ({ children, type }) => {
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
      <div className={"flex items-center space-x-2 " + iconColors[type]}>
        {icons[type]}
        {!isMinimized && <p className="font-bold">{type}</p>}
      </div>

      <div className="flex items-center">{children}</div>
    </header>
  );
};

export default CodeEditorHeader;
