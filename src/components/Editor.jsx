import CodeEditor from "./CodeEditor";
import { html as htmlExt } from "@codemirror/lang-html";
import { css as cssExt } from "@codemirror/lang-css";
import { javascript as javascriptExt } from "@codemirror/lang-javascript";
import useEditorStore from "../stores/editor-store";
import Header from "./Header";
import {
  buildOutline,
  eyeOutline,
  flashOutline,
  logoCss3,
  logoHtml5,
  logoJavascript,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

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
    <div className="h-screen bg-[#282c34]">
      <Header />

      <div className="flex overflow-x-hidden">
        <CodeEditor
          icon={logoHtml5}
          type="html"
          value={html}
          update={updateHtml}
          lang={htmlExt}
        />
        <CodeEditor
          icon={logoCss3}
          type="css"
          value={css}
          update={updateCss}
          lang={cssExt}
        />
        <CodeEditor
          icon={logoJavascript}
          type="js"
          value={js}
          update={updateJs}
          lang={javascriptExt}
        />
      </div>
    </div>
  );
};

export default Editor;
