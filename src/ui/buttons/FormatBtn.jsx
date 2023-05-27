import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";
import cssParser from "prettier/parser-postcss";
import jsParser from "prettier/parser-babel";
import { useCodeEditorContext } from "@/contexts/CodeEditorContext";
import { FormatIcon } from "@/assets";

const FormatBtn = ({ type, value, update }) => {
  const { isMinimized } = useCodeEditorContext();

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
    <>
      {!isMinimized && (
        <div className="ml-2 pl-2">
          <button
            data-tooltip="Format"
            className="tooltip tlt-b group flex items-center rounded-xl p-1 hover:bg-yellow-500/10"
            onClick={formatCode}
          >
            <FormatIcon className="h-6 w-6 group-hover:[&>path]:fill-yellow-400" />
          </button>
        </div>
      )}
    </>
  );
};

export default FormatBtn;
