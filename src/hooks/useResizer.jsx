import { useEffect } from "react";
import { useRef } from "react";

// got this from a youtube video, and i used it as a hook
// https://www.youtube.com/watch?v=CgjFATXhxiE
export default function useResizer(elRef) {
  const leftHandleRef = useRef(null);
  const rightHandleRef = useRef(null);
  const topHandleRef = useRef(null);
  const bottomHandleRef = useRef(null);

  useEffect(() => {
    const resizableEl = elRef.current;
    const styles = window.getComputedStyle(resizableEl);
    let width = parseInt(styles.width, 10),
      height = parseInt(styles.height, 10),
      x = 0,
      y = 0;

    resizableEl.style.top = 0;
    resizableEl.style.left = 0;

    // Right resize
    const onMouseMoveRightResize = (e) => {
      const dx = e.clientX - x;
      x = e.clientX;
      width = width + dx;
      resizableEl.style.width = width + "px";
    };

    const onMouseUpRightResize = () => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (e) => {
      x = e.clientX;
      resizableEl.style.left = styles.left;
      resizableEl.style.right = null;
      document.addEventListener("mousedown", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Add mouse down event listener
    const resizerRight = rightHandleRef.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
    };
  }, []);

  return {
    leftHandleRef,
    rightHandleRef,
    topHandleRef,
    bottomHandleRef,
  };
}
