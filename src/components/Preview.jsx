import useEditorStore from "../stores/editor-store";

const Preview = () => {
  const { sourceDoc, previewRef } = useEditorStore((state) => ({
    sourceDoc: state.sourceDoc,
    previewRef: state.previewRef,
  }));

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
