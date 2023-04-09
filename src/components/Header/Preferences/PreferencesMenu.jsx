import { IonIcon } from "@ionic/react";
import { motion } from "framer-motion";
import { bonfire, colorPalette, colorWand } from "ionicons/icons";
import BootstrapOption from "./BootstrapOption";
import JQueryOption from "./JQueryOption";
import TailwindOption from "./TailwindOption";

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
        <div className="flex justify-between space-x-8">
          <p>Ionicons</p>

          <div className="flex">
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" readOnly />
              <div className="peer h-5 w-10 rounded-full border-t border-gray-500 bg-gray-600 shadow duration-150 after:absolute after:left-[4px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-gray-800 after:transition-all after:content-[''] peer-checked:border-indigo-300 peer-checked:bg-indigo-400 peer-checked:after:translate-x-full peer-checked:after:bg-indigo-900"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-between space-x-8">
          <p>Bootstrap Icons</p>

          <div className="flex">
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" readOnly />
              <div className="peer h-5 w-10 rounded-full border-t border-gray-500 bg-gray-600 shadow duration-150 after:absolute after:left-[4px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-gray-800 after:transition-all after:content-[''] peer-checked:border-indigo-300 peer-checked:bg-indigo-400 peer-checked:after:translate-x-full peer-checked:after:bg-indigo-900"></div>
            </label>
          </div>
        </div>
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
