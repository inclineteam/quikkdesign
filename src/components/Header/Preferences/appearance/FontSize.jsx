import { usePreferencesStore } from "@/contexts/PreferencesContext";

const FontSizeOption = () => {
  const { fontSize, updateFontSize } = usePreferencesStore();

  return (
    <div className="flex items-center justify-between space-x-8">
      <p>Font Size</p>

      <div className="flex">
        <input
          type="text"
          value={fontSize}
          onChange={(e) => updateFontSize(e.target.value)}
          placeholder={fontSize}
          className="h-6 w-11 rounded-md border-t border-gray-500 bg-gray-600 px-2 text-gray-200 shadow-sm outline-none placeholder:text-gray-300"
        />
      </div>
    </div>
  );
};

export default FontSizeOption;
