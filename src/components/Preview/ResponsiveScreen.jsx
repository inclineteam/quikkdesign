import { usePreviewStore } from "@/contexts/PreviewContext";
import { Resizable } from "re-resizable";
import { useState } from "react";
import { useEffect } from "react";

const ResponsiveScreen = () => {
  const {
    sourceDoc,
    responsiveScreenRef,
    responsiveScreenWidth,
    responsiveScreenHeight,
    updateResponsiveScreenHeight,
    updateResponsiveScreenWidth,
    resizer,
  } = usePreviewStore();

  useEffect(() => {
    const handleScreenResize = () => {
      const width = responsiveScreenRef.current.offsetWidth;
      const height = responsiveScreenRef.current.offsetHeight;

      updateResponsiveScreenHeight(height);
      updateResponsiveScreenWidth(width);
    };

    const observer = new ResizeObserver(handleScreenResize);

    observer.observe(responsiveScreenRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Resizable
      className={!resizer && "hidden"}
      maxHeight="100%"
      maxWidth="100%"
      handleComponent={{
        right: (
          <div className="absolute -right-3 top-1/2 h-32 w-1.5 -translate-y-1/2 rounded-sm bg-cyan-300"></div>
        ),
        left: (
          <div className="absolute -left-3 top-1/2 h-32 w-1.5 -translate-y-1/2 rounded-sm bg-cyan-300"></div>
        ),
        bottom: (
          <div className="absolute -bottom-3 left-1/2 h-1.5 w-32 -translate-x-1/2 rounded-sm bg-cyan-300"></div>
        ),
        top: (
          <div className="absolute -top-3 left-1/2 h-1.5 w-32 -translate-x-1/2 rounded-sm bg-cyan-300"></div>
        ),
      }}
      defaultSize={{
        width: responsiveScreenWidth > 0 ? responsiveScreenWidth : "100%",
        height: responsiveScreenHeight > 0 ? responsiveScreenHeight : "100%",
      }}
    >
      <iframe
        ref={responsiveScreenRef}
        srcDoc={sourceDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        className="rounded-xl border-0 bg-white"
      />
    </Resizable>
  );
};

export default ResponsiveScreen;
