import { useEffect } from "react";
import { useRef } from "react";

const ClickAway = ({ children, onClickOutside }) => {
  const childRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (childRef.current && !childRef.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div>
      <div ref={childRef}>{children}</div>
    </div>
  );
};

export default ClickAway;
