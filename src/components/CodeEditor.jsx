import ReactCodeMirror from "@uiw/react-codemirror";
import { oneDark } from "../themes/onedark";

const CodeEditor = ({ lang, value, update }) => {
  return (
    <div className="w-full">
      <ReactCodeMirror
        height="70vh"
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
