import { usePreviewStore } from "@/contexts/PreviewContext";
import { ReactComponent as FullscreenIcon } from "@/assets/fullscreen-icon.svg";
import { ReactComponent as SaveIcon } from "@/assets/download-icon.svg";

const Preview = () => {
  const { sourceDoc, previewRef } = usePreviewStore();

  return (
    <div className="flex h-screen flex-col bg-gradient-to-b from-[#16171D] to-[#381b50] p-5">
      <iframe
        srcDoc={sourceDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        className="rounded-xl border-0 bg-white"
      />
      <div className="mt-5 flex items-center justify-between rounded-xl bg-violet-300/10 p-2 text-sm">
        <button className="flex items-center space-x-2 rounded-lg px-3 font-medium text-white">
          <div className="h-3.5 w-3.5 rounded bg-white"></div>
          <span>Rounded</span>
        </button>

        <div className="flex">
          <button className="flex items-center space-x-2 rounded-lg bg-transparent px-3 font-medium text-white duration-200">
            <SaveIcon className="h-5 w-5 [&>g]:stroke-white" />
            <span>Save this preview</span>
          </button>
          <button className="flex items-center space-x-2 rounded-lg bg-transparent px-3 font-medium text-white duration-200">
            <FullscreenIcon className="h-5 w-5 [&>g]:fill-white" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>
      <div ref={previewRef}></div>
    </div>
  );
};

export default Preview;
