import CodeEditorContextProvider from "./Context.editor";
import QuikkEditor from "./QuikkEditor";

const CodeEditor = ({ lang, value, update, icon, type }) => {
  return (
    <CodeEditorContextProvider>
      <QuikkEditor
        lang={lang}
        value={value}
        update={update}
        icon={icon}
        type={type}
      />
    </CodeEditorContextProvider>
  );
};

export default CodeEditor;
