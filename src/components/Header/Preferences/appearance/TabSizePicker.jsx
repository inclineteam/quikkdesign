import clsx from "clsx";
import { usePreferencesStore } from "@/contexts/PreferencesContext";
import { motion } from "framer-motion";

const TabSizePicker = () => {
  const { tabSize, updateTabSize } = usePreferencesStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, translateY: 10, scale: 1 }}
      className="absolute right-0 z-50 mt-1 w-max space-y-1 rounded-md border border-white/10 border-t-white/20 bg-gray-500 p-1 text-sm font-medium text-white shadow-xl"
    >
      <button
        onClick={() => updateTabSize(2)}
        className={
          "block rounded-md border-t py-0.5 pl-2 pr-6 text-left duration-150 " +
          clsx({
            "border-gray-300 bg-gray-400 text-gray-800 shadow-sm":
              tabSize === 2,
            "border-transparent hover:bg-gray-600": tabSize !== 2,
          })
        }
      >
        2
      </button>
      <button
        onClick={() => updateTabSize(4)}
        className={
          "block rounded-md border-t py-0.5 pl-2 pr-6 text-left duration-150 " +
          clsx({
            "border-gray-300 bg-gray-400 text-gray-800 shadow-sm":
              tabSize === 4,
            "border-transparent hover:bg-gray-600": tabSize !== 4,
          })
        }
      >
        4
      </button>
      <button
        onClick={() => updateTabSize(6)}
        className={
          "block rounded-md border-t py-0.5 pl-2 pr-6 text-left duration-150 " +
          clsx({
            "border-gray-300 bg-gray-400 text-gray-800 shadow-sm":
              tabSize === 6,
            "border-transparent hover:bg-gray-600": tabSize !== 6,
          })
        }
      >
        6
      </button>
      <button
        onClick={() => updateTabSize(8)}
        className={
          "block rounded-md border-t py-0.5 pl-2 pr-6 text-left duration-150 " +
          clsx({
            "border-gray-300 bg-gray-400 text-gray-800 shadow-sm":
              tabSize === 8,
            "border-transparent hover:bg-gray-600": tabSize !== 8,
          })
        }
      >
        8
      </button>
    </motion.div>
  );
};

export default TabSizePicker;
