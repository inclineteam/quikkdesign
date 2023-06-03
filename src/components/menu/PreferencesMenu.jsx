import { motion } from "framer-motion";
import {
  FontSizeOption,
  TabSizeOption,
  BootstrapIconsOption,
  IoniconsOption,
  BootstrapOption,
  JQueryOption,
  TailwindOption,
} from "@/components/Header/Preferences";
import { LibraryIcon, PaletteIcon, WandIcon } from "@/assets";

const PreferencesMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      className="absolute right-0 z-50 mt-2 w-max space-y-2 rounded-md border border-[#383C4F] bg-menu-bg p-2 text-sm text-white shadow-xl"
    >
      <div className="group space-y-2 rounded bg-black/20 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 font-medium text-[#81869E] duration-150 group-hover:text-purple-400">
          <WandIcon className="h-4 w-4" />
          <span>Superpowers</span>
        </header>
        <JQueryOption />
        <TailwindOption />
        <BootstrapOption />
      </div>

      <div className="group space-y-2 rounded bg-black/20 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 font-medium text-[#81869E] duration-150 group-hover:text-sky-400">
          <LibraryIcon className="h-4 w-4" />
          <span>Icons</span>
        </header>
        <IoniconsOption />
        <BootstrapIconsOption />
      </div>

      <div className="group space-y-2 rounded bg-black/20 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 font-medium text-[#81869E] duration-150 group-hover:text-indigo-400">
          <PaletteIcon className="h-4 w-4" />
          <span>Appearance</span>
        </header>
        <FontSizeOption />
        <TabSizeOption />

        <div className="flex items-center justify-between space-x-8">
          <p>Font Family</p>

          <div className="flex h-6 w-20 rounded-md border-t border-[#494F68] bg-[#343849] px-2 text-gray-300 shadow-sm outline-none">
            <p className="truncate">Spline Sans Mono</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PreferencesMenu;
