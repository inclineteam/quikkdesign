import { usePreviewStore } from "@/contexts/PreviewContext";

const Preview = () => {
  const { sourceDoc, previewRef } = usePreviewStore();

  return (
    <div className="h-screen bg-gradient-to-b from-[#16171D] to-[#381b50] p-5">
      <iframe
        srcDoc={sourceDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        className="rounded-xl border-0 bg-white"
      />
      <div ref={previewRef}></div>
    </div>
  );
};

export default Preview;
