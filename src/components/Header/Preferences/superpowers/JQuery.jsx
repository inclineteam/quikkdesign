import { usePreferencesStore } from "@/contexts/PreferencesContext";
import Switch from "@/components/Switch";

const JQueryOption = () => {
  const { jQueryPlugin, useJQueryPlugin } = usePreferencesStore();

  return (
    <div className="flex justify-between space-x-8">
      <p>JQuery</p>

      <div className="flex">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={jQueryPlugin}
            onChange={useJQueryPlugin}
            className="peer sr-only"
            readOnly
          />
          <Switch />
        </label>
      </div>
    </div>
  );
};

export default JQueryOption;
