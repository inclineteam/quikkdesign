import { IonIcon } from "@ionic/react";
import { motion } from "framer-motion";
import { bonfire, colorPalette, colorWand } from "ionicons/icons";
import BootstrapIconsOption from "./icons/BootstrapIcons";
import IoniconsOption from "./icons/Ionicons";
import BootstrapOption from "./superpowers/Bootstrap";
import JQueryOption from "./superpowers/JQuery";
import TailwindOption from "./superpowers/Tailwind";

const PreferencesMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      className="absolute right-0 z-50 mt-2 w-max space-y-2 rounded-md border border-white/10 bg-[#393e47] p-1.5 text-sm text-white shadow-xl"
    >
      <div className="space-y-2 rounded-md bg-black/10 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 text-slate-400">
          <IonIcon icon={colorWand} className="text-base" />
          <span>Superpowers</span>
        </header>
        <JQueryOption />
        <TailwindOption />
        <BootstrapOption />
      </div>

      <div className="space-y-2 rounded-md bg-black/10 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 text-slate-400">
          <IonIcon icon={bonfire} className="text-base" />
          <span>Icons</span>
        </header>
        <IoniconsOption />
        <BootstrapIconsOption />
      </div>

      <div className="space-y-2 rounded-md bg-black/10 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 text-slate-400">
          <IonIcon icon={colorPalette} className="text-base" />
          <span>Appearance</span>
        </header>
        <div className="flex items-center justify-between space-x-8">
          <p>Font Size</p>

          <div className="flex">
            <input
              type="text"
              placeholder="14"
              className="h-6 w-11 rounded-md border-t border-gray-500 bg-gray-600 px-2 text-gray-200 shadow-sm outline-none placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="flex items-center justify-between space-x-8">
          <p>Font Family</p>

          <div className="flex h-6 w-20 rounded-md border-t border-gray-500 bg-gray-600 px-2 text-gray-300 shadow-sm outline-none">
            <p className="truncate">Spline Sans Mono</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PreferencesMenu;
