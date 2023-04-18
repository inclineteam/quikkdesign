import { usePreferencesStore } from "@/contexts/PreferencesContext";
import Switch from "@/components/Switch";

const TailwindOption = () => {
  const { tailwindPlugin, useTailwindPlugin } = usePreferencesStore();

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
          <Switch />
        </label>
      </div>
    </div>
  );
};

export default TailwindOption;
