import { useEditorStore } from "@/contexts/EditorContext";

const TailwindOption = () => {
  const { tailwindPlugin, useTailwindPlugin } = useEditorStore();

  return (
    <div className="flex justify-between space-x-8">
      <p>Tailwind CSS</p>

      <div className="flex">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={tailwindPlugin}
            onChange={useTailwindPlugin}
            className="peer sr-only"
            readOnly
          />
          <div className="peer h-5 w-10 rounded-full border-t border-gray-500 bg-gray-600 shadow duration-150 after:absolute after:left-[4px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-gray-800 after:transition-all after:content-[''] peer-checked:border-indigo-300 peer-checked:bg-indigo-400 peer-checked:after:translate-x-full peer-checked:after:bg-indigo-900"></div>
        </label>
      </div>
    </div>
  );
};

export default TailwindOption;
