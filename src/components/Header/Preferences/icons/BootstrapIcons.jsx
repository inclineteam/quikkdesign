import { usePreferencesStore } from "@/contexts/PreferencesContext";
import Switch from "@/components/Switch";

const BootstrapIconsOption = () => {
  const { bsIconPlugin, useBsIconPlugin } = usePreferencesStore();

  return (
    <div className="flex justify-between space-x-8">
      <p>Bootstrap Icons</p>

      <div className="flex">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={bsIconPlugin}
            onChange={useBsIconPlugin}
            className="peer sr-only"
            readOnly
          />
          <Switch />
        </label>
      </div>
    </div>
  );
};

export default BootstrapIconsOption;
