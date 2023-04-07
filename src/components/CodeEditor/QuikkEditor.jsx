import { EditorView } from "@codemirror/view";
import ReactCodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import { oneDark } from "../../themes/onedark";
import { colorPicker } from "@replit/codemirror-css-color-picker";
import {
  abbreviationTracker,
  expandAbbreviation,
} from "@emmetio/codemirror6-plugin";
import { keymap } from "@codemirror/view";
import CodeEditorHeader from "./CodeEditorHeader";
import { useCodeEditorContext } from "@/contexts/CodeEditorContext";
import FormatBtn from "./FormatBtn";
import ToggleBtn from "./ToggleBtn";

const QuikkEditor = ({ lang, value, update, icon, type }) => {
  const { isMinimized } = useCodeEditorContext();

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
      <CodeEditorHeader type={type} icon={icon}>
        <FormatBtn type={type} value={value} update={update} />
        <ToggleBtn type={value} />
      </CodeEditorHeader>

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

export default QuikkEditor;
