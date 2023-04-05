import CodeEditor from "./CodeEditor";
import { html as htmlExt } from "@codemirror/lang-html";
import { css as cssExt } from "@codemirror/lang-css";
import { javascript as javascriptExt } from "@codemirror/lang-javascript";
import useEditorStore from "../stores/editor-store";

const Editor = () => {
  const { html, css, js, updateHtml, updateCss, updateJs } = useEditorStore(
    (state) => ({
      html: state.html,
      css: state.css,
      js: state.js,
      updateHtml: state.updateHtml,
      updateCss: state.updateCss,
      updateJs: state.updateJs,
    })
  );

  return (
    <div className="flex">
      <CodeEditor value={html} update={updateHtml} lang={htmlExt} />
      <CodeEditor value={css} update={updateCss} lang={cssExt} />
      <CodeEditor value={js} update={updateJs} lang={javascriptExt} />
    </div>
  );
};

export default Editor;
