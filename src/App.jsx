import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import { usePreviewStore } from "@/contexts/PreviewContext";
import Indicator from "@/components/Indicator";

export default function App() {
  const { previewRef, updateSourceDoc } = usePreviewStore();

  const handleRunKeybind = (e) => {
    const charCode = String.fromCharCode(e.which).toLowerCase();

    if ((e.ctrlKey || e.metaKey) && charCode === "s") {
      e.preventDefault();
      updateSourceDoc();

      previewRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div onKeyDown={handleRunKeybind}>
      <Editor />
      <Preview />
    </div>
  );
}
