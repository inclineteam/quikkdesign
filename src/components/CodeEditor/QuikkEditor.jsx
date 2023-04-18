import { EditorView } from "@codemirror/view";
import { indentUnit } from "@codemirror/language";
import ReactCodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import { oneDark } from "@/themes/onedark";
import { colorPicker } from "@replit/codemirror-css-color-picker";
import {
  abbreviationTracker,
  expandAbbreviation,
} from "@emmetio/codemirror6-plugin";
import { keymap } from "@codemirror/view";
import CodeEditorHeader from "./CodeEditorHeader";
import { useCodeEditorContext } from "@/contexts/CodeEditorContext";
import { useEditorStore } from "@/contexts/EditorContext";
import FormatBtn from "./FormatBtn";
import ToggleBtn from "./ToggleBtn";
import { usePreferencesStore } from "@/contexts/PreferencesContext";

const QuikkEditor = ({ lang, value, update, icon, type }) => {
  const { isMinimized } = useCodeEditorContext();
  const { updateCurrentEditor } = useEditorStore();
  const { tabSize, fontSize } = usePreferencesStore();

  // returns the needed extension for each editor
  const exts = () => {
    const defaultExt = [
      lang(),
      EditorView.lineWrapping,
      colorPicker,
      indentUnit.of(" ".repeat(tabSize)),
    ];

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
        "h-max space-y-2 rounded-xl bg-subtle-bg p-2 duration-200 first:border-l-0 " +
        clsx({
          "flex-1": !isMinimized,
        })
      }
    >
      <CodeEditorHeader type={type} icon={icon}>
        <FormatBtn type={type} value={value} update={update} />
        <ToggleBtn type={type} />
      </CodeEditorHeader>
      <ReactCodeMirror
        height="70vh"
        extensions={exts()}
        onFocus={() => updateCurrentEditor(type)}
        value={value}
        onChange={(val) => update(val)}
        style={{
          fontSize: fontSize + "px",
        }}
        className={
          "w-full overflow-hidden rounded-xl duration-150 [&>.cm-focused]:outline-none " +
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
