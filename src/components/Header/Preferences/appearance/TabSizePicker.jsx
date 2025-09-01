import clsx from "clsx";
import { usePreferencesStore } from "@/contexts/PreferencesContext";
import { motion } from "framer-motion";

const TabSizePicker = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      className="absolute right-0 z-50 mt-1 w-max space-y-1 rounded-xl border border-[#383C4F] bg-menu-bg p-1 text-sm font-medium text-white shadow-[0_0px_10px_0] shadow-black/50"
    >
      <Option size={2} />
      <Option size={4} />
      <Option size={6} />
      <Option size={8} />
    </motion.div>
  );
};

export default TabSizePicker;

const Option = ({ size }) => {
  const { tabSize, updateTabSize } = usePreferencesStore();

  return (
    <button
      onClick={() => updateTabSize(size)}
      className={
        "block rounded-lg border-t py-0.5 pl-2 pr-8 text-left duration-150 " +
        clsx({
          "border-[#6D7596] bg-[#454B64] shadow-xs": tabSize === size,
          "border-transparent hover:bg-[#383C4D]": tabSize !== size,
        })
      }
    >
      {size}
    </button>
  );
};
