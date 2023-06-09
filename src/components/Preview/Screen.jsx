import { usePreviewStore } from "@/contexts/PreviewContext";
import clsx from "clsx";
import { useEffect } from "react";
import ScreenSize from "./ScreenSize";
import ResponsiveScreen from "./ResponsiveScreen";

const Screen = () => {
  const {
    sourceDoc,
    screenRef,
    resizer,
    updateScreenWidth,
    updateScreenHeight,
  } = usePreviewStore();

  useEffect(() => {
    const handleScreenResize = () => {
      const width = screenRef.current.offsetWidth;
      const height = screenRef.current.offsetHeight;

      updateScreenHeight(height);
      updateScreenWidth(width);
    };

    const observer = new ResizeObserver(handleScreenResize);

    observer.observe(screenRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={
        "relative flex h-full w-full items-center justify-center " +
        clsx({ "px-5": resizer })
      }
    >
      <ResponsiveScreen />
      <iframe
        ref={screenRef}
        srcDoc={sourceDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        className={clsx("rounded-xl border-0 bg-white", resizer && "hidden")}
      />
    </div>
  );
};

export default Screen;
