import { usePreviewStore } from "@/contexts/PreviewContext";
import { MobileIcon, SaveIcon, FullscreenIcon } from "@/assets";
import ScreenSize from "./ScreenSize";
import { useEffect } from "react";
import Screen from "./Screen";
import clsx from "clsx";

const Preview = () => {
  const {
    previewRef,
    screenRef,
    toggleResizer,
    resizer,
    updateMaxScreenWidth,
  } = usePreviewStore();

  useEffect(() => {
    updateMaxScreenWidth(screenRef.current.clientWidth);
  }, []);

  return (
    <div
      className={clsx(
        "relative flex h-screen flex-col bg-linear-to-b from-[#16171D] to-[#381b50] p-5",
        resizer && "pt-10"
      )}
    >
      <Screen />
      <div
        className={
          "flex items-center justify-between rounded-xl bg-violet-300/10 p-2 text-sm duration-200 " +
          clsx({ "mt-5": !resizer, "mt-8": resizer })
        }
      >
        <button className="flex items-center space-x-2 rounded-lg px-3 font-medium text-white">
          <div className="h-3.5 w-3.5 rounded-sm bg-white"></div>
          <span>Rounded</span>
        </button>

        <div className="flex">
          <ScreenSize />
          <button
            onClick={() => toggleResizer(!resizer)}
            className="flex items-center space-x-2 rounded-lg bg-transparent px-3 font-medium text-white duration-200"
          >
            <MobileIcon
              className={clsx(
                "h-5 w-5 [&>g]:stroke-white",
                resizer && "[&>g]:stroke-cyan-300"
              )}
            />
            <span className={clsx("font-medium", resizer && "text-cyan-300")}>
              Responsive
            </span>
          </button>
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
