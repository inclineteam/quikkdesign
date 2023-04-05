import ReactCodeMirror from "@uiw/react-codemirror";

const CodeEditor = ({ lang }) => {
  return (
    <div>
      <ReactCodeMirror extensions={[lang()]} />
    </div>
  );
};

export default CodeEditor;
