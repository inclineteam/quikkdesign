import { usePreferencesStore } from "@/contexts/PreferencesContext";
import ClickAway from "@/components/ClickAway";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import TabSizePicker from "./TabSizePicker";
import { ChevronDownIcon } from "@/assets";
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
              "flex h-6 w-12 items-center justify-between space-x-2 rounded-md border-t border-[#494F68] bg-[#343849] px-2 text-left text-gray-200 shadow-sm outline-none duration-200 placeholder:text-gray-300 " +
              clsx({
                "border-white/20 bg-[#474B62]": showPicker,
              })
            }
          >
            <span>{tabSize}</span>
            <ChevronDownIcon
              className={
                "h-4 w-4 duration-200 [&>path]:stroke-gray-400 " +
                clsx({ "rotate-180 [&>path]:stroke-gray-200": showPicker })
              }
            />
          </button>

          <AnimatePresence>{showPicker && <TabSizePicker />}</AnimatePresence>
        </div>
      </ClickAway>
    </div>
  );
};

export default TabSizeOption;
