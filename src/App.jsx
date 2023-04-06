import { useRef } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

export default function App() {
  const previewRef = useRef(null);

  return (
    <div className="text-xl text-slate-700">
      <Editor />
      <Preview ref={previewRef} />
    </div>
  );
}
