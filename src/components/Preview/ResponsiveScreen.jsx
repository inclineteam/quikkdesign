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
      maxHeight="100%"
      maxWidth="100%"
      handleComponent={{
        right: (
          <div className="absolute -right-3 top-1/2 h-32 w-2 -translate-y-1/2 rounded-full bg-violet-400"></div>
        ),
        left: (
          <div className="absolute -left-3 top-1/2 h-32 w-2 -translate-y-1/2 rounded-full bg-violet-400"></div>
        ),
        bottom: (
          <div className="absolute -bottom-3 left-1/2 h-2 w-32 -translate-x-1/2 rounded-full bg-violet-400"></div>
        ),
        top: (
          <div className="absolute -top-3 left-1/2 h-2 w-32 -translate-x-1/2 rounded-full bg-violet-400"></div>
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
