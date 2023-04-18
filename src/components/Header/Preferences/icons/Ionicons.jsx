import { usePreferencesStore } from "@/contexts/PreferencesContext";
import Switch from "@/components/Switch";

const IoniconsOption = () => {
  const { ionIconPlugin, useIonIconPlugin } = usePreferencesStore();

  return (
    <div className="flex justify-between space-x-8">
      <p>Ionicons</p>

      <div className="flex">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={ionIconPlugin}
            onChange={useIonIconPlugin}
            className="peer sr-only"
            readOnly
          />
          <Switch />
        </label>
      </div>
    </div>
  );
};

export default IoniconsOption;
