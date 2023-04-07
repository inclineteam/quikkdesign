import CodeEditor from "./CodeEditor";
import { html as htmlExt } from "@codemirror/lang-html";
import { css as cssExt } from "@codemirror/lang-css";
import { javascript as javascriptExt } from "@codemirror/lang-javascript";
import Header from "./Header";
import { logoCss3, logoHtml5, logoJavascript } from "ionicons/icons";
import { useEditorStore } from "@/contexts/EditorContext";

const Editor = () => {
  const editorState = useEditorStore();

  return (
    <div className="h-screen bg-[#282c34]">
      <Header />

      <div className="flex overflow-x-hidden">
        <CodeEditor
          icon={logoHtml5}
          type="html"
          value={editorState.html}
          update={editorState.updateHtml}
          lang={htmlExt}
        />
        <CodeEditor
          icon={logoCss3}
          type="css"
          value={editorState.css}
          update={editorState.updateCss}
          lang={cssExt}
        />
        <CodeEditor
          icon={logoJavascript}
          type="js"
          value={editorState.js}
          update={editorState.updateJs}
          lang={javascriptExt}
        />
      </div>
    </div>
  );
};

export default Editor;
