import CodeEditor from "./CodeEditor";
import { html as htmlExt } from "@codemirror/lang-html";
import { css as cssExt } from "@codemirror/lang-css";
import { javascript as javascriptExt } from "@codemirror/lang-javascript";
import Header from "./Header";
import { useEditorStore } from "@/contexts/EditorContext";
import Indicator from "./Indicator";

const Editor = () => {
  const editorState = useEditorStore();

  return (
    <div className="h-screen bg-main">
      <Header />

      <div className="flex space-x-4 overflow-x-hidden px-4">
        <CodeEditor
          type="html"
          value={editorState.html}
          update={editorState.updateHtml}
          lang={htmlExt}
        />
        <CodeEditor
          type="css"
          value={editorState.css}
          update={editorState.updateCss}
          lang={cssExt}
        />
        <CodeEditor
          type="js"
          value={editorState.js}
          update={editorState.updateJs}
          lang={javascriptExt}
        />
      </div>

      <Indicator />
    </div>
  );
};

export default Editor;
