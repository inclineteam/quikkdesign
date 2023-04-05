import ReactCodeMirror from "@uiw/react-codemirror";

const CodeEditor = ({ lang, value, update }) => {
  return (
    <div className="w-full">
      <ReactCodeMirror
        height="70vh"
        extensions={[lang()]}
        value={value}
        onChange={(val) => update(val)}
        className="w-full"
      />
    </div>
  );
};

export default CodeEditor;
