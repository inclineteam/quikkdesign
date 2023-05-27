import { usePreviewStore } from "@/contexts/PreviewContext";

const ScreenSize = () => {
  const {
    screenWidth,
    screenHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    resizer,
  } = usePreviewStore();

  return (
    <p className="px-3 font-medium text-white">
      {resizer ? responsiveScreenWidth : screenWidth}x
      {resizer ? responsiveScreenHeight : screenHeight}
    </p>
  );
};

export default ScreenSize;
