import { usePreviewStore } from "@/contexts/PreviewContext";

const Preview = () => {
  const { sourceDoc, previewRef } = usePreviewStore();

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
