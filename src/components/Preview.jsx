import { useEditorStore } from "../contexts/EditorContext";

const Preview = () => {
  const { sourceDoc, previewRef } = useEditorStore();

  return (
    <div>
      <iframe
        srcDoc={sourceDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        className="h-screen border-0"
      />
      <div ref={previewRef}></div>
    </div>
  );
};

export default Preview;
