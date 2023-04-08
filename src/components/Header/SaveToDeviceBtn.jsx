import { useProjectStore } from "@/contexts/ProjectContext";
import { useEditorStore } from "@/contexts/EditorContext";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { IonIcon } from "@ionic/react";
import { downloadOutline } from "ionicons/icons";
import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";
import cssParser from "prettier/parser-postcss";
import jsParser from "prettier/parser-babel";

const SaveToDeviceBtn = () => {
  const { html, css, js } = useEditorStore();
  const { projectName } = useProjectStore();

  const saveProjectToDevice = () => {
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${projectName}</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        ${html}
      <script src="script.js"></script>
      </body>
      </html>
    `;

    const htmlContent = prettier.format(htmlTemplate, {
      parser: "html",
      plugins: [htmlParser],
    });

    const cssContent = prettier.format(css, {
      parser: "css",
      plugins: [cssParser],
    });

    const jsContent = prettier.format(js, {
      parser: "babel",
      plugins: [jsParser],
    });

    const htmlFile = new File([htmlContent], { type: "text/html" });
    const cssFile = new File([cssContent], { type: "text/css" });
    const jsFile = new File([jsContent], { type: "text/javascript" });

    const zip = new JSZip();

    const projectFolder = zip.folder(`${projectName}`);

    projectFolder.file("index.html", htmlFile);
    projectFolder.file("style.css", cssFile);
    projectFolder.file("script.js", jsFile);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${projectName}`);
    });
  };

  return (
    <button
      onClick={saveProjectToDevice}
      data-tooltip="Save to your device"
      className="tooltip tlt-b flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05]"
    >
      <IonIcon className="text-xl" icon={downloadOutline} />
    </button>
  );
};

export default SaveToDeviceBtn;
