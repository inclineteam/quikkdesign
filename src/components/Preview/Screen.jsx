import { usePreviewStore } from "@/contexts/PreviewContext";
import clsx from "clsx";
import { useEffect } from "react";
import ResponsiveScreen from "./ResponsiveScreen";
import { useState } from "react";

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
    // <div
    //   style={{ width: screenWidth > 0 ? screenWidth + "px" : "100%" }}
    //   className="relative "
    // >
    <div
      className={
        "relative flex h-full w-full items-center justify-center " +
        clsx({ "px-5": resizer })
      }
    >
      {resizer ? (
        <ResponsiveScreen />
      ) : (
        <iframe
          ref={screenRef}
          srcDoc={sourceDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          className="rounded-xl border-0 bg-white"
        />
      )}
    </div>
    // </div>
  );
};

export default Screen;
