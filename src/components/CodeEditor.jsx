import ReactCodeMirror from "@uiw/react-codemirror";
import { oneDark } from "../themes/onedark";

const CodeEditor = ({ lang, value, update }) => {
  return (
    <div className="h-max w-full border-b border-l border-white/10 first:border-l-0">
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
