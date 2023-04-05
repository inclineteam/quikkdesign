import CodeEditor from "./CodeEditor";
import { html as htmlExt } from "@codemirror/lang-html";
import { css as cssExt } from "@codemirror/lang-css";
import { javascript as javascriptExt } from "@codemirror/lang-javascript";

const Editor = () => {
  return (
    <div>
      <CodeEditor lang={htmlExt} />
      <CodeEditor lang={cssExt} />
      <CodeEditor lang={javascriptExt} />
    </div>
  );
};

export default Editor;
