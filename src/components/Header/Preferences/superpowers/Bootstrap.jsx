import { usePreferencesStore } from "@/contexts/PreferencesContext";
import Switch from "@/components/Switch";

const BootstrapOption = () => {
  const { bootstrapPlugin, useBootstrapPlugin } = usePreferencesStore();

  return (
    <div className="flex justify-between space-x-8">
      <p>Bootstrap</p>

      <div className="flex">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={bootstrapPlugin}
            onChange={useBootstrapPlugin}
            className="peer sr-only"
            readOnly
          />
          <Switch />
        </label>
      </div>
    </div>
  );
};

export default BootstrapOption;
