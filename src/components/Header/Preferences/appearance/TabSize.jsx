import { usePreferencesStore } from "@/contexts/PreferencesContext";
import ClickAway from "@/components/ClickAway";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import TabSizePicker from "./TabSizePicker";
import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";
import clsx from "clsx";

const TabSizeOption = () => {
  const { tabSize } = usePreferencesStore();
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="flex items-center justify-between space-x-8">
      <p>Tab Size</p>

      <ClickAway onClickOutside={() => setShowPicker(false)}>
        <div className="relative">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className={
              "flex h-6 w-11 items-center justify-between rounded-md border-t border-[#494F68] bg-[#343849] px-2 text-left text-gray-200 shadow-sm outline-none duration-200 placeholder:text-gray-300 " +
              clsx({
                "border-white/20 bg-[#474B62]": showPicker,
              })
            }
          >
            <span>{tabSize}</span>
            <IonIcon icon={chevronDown} className="text-gray-400" />
          </button>

          <AnimatePresence>{showPicker && <TabSizePicker />}</AnimatePresence>
        </div>
      </ClickAway>
    </div>
  );
};

export default TabSizeOption;
