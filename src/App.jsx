import Editor from "./components/Editor";
import Preview from "./components/Preview";

export default function App() {
  return (
    <div className="text-xl text-slate-700">
      <Editor />
      <Preview />
    </div>
  );
}
