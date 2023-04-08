import { IonIcon } from "@ionic/react";
import {
  colorPalette,
  colorPaletteOutline,
  colorWand,
  colorWandOutline,
  settings,
  settingsOutline,
} from "ionicons/icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

const PreferencesBtn = () => {
  const [showPref, setShowPref] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowPref(!showPref)}
        data-tooltip="Preferences"
        className={
          "flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05] " +
          clsx({ "tooltip tlt-b": !showPref, "bg-white/10": showPref })
        }
      >
        <IonIcon className="text-xl" icon={settingsOutline} />
      </button>

      <AnimatePresence>
        {showPref && (
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
              <div className="flex justify-between space-x-8">
                <p>Use JQuery</p>

                <div className="flex">
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" readOnly />
                    <div className="peer h-5 w-10 rounded-full border-t border-gray-500 bg-gray-600 shadow duration-150 after:absolute after:left-[4px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-gray-800 after:transition-all after:content-[''] peer-checked:border-indigo-300 peer-checked:bg-indigo-400 peer-checked:after:translate-x-full peer-checked:after:bg-indigo-900"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between space-x-8">
                <p>Use SCSS</p>

                <div className="flex">
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" readOnly />
                    <div className="peer h-5 w-10 rounded-full border-t border-gray-500 bg-gray-600 shadow duration-150 after:absolute after:left-[4px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-gray-800 after:transition-all after:content-[''] peer-checked:border-indigo-300 peer-checked:bg-indigo-400 peer-checked:after:translate-x-full peer-checked:after:bg-indigo-900"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between space-x-8">
                <p>Use Tailwind CSS</p>

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
        )}
      </AnimatePresence>
    </div>
  );
};

export default PreferencesBtn;
