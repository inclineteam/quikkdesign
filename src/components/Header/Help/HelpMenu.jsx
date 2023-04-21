import { motion } from "framer-motion";
import { ReactComponent as CommandIcon } from "@/assets/command-icon.svg";
import { ReactComponent as ChevronDownIcon } from "@/assets/chevron-down-icon.svg";

const HelpMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      className="absolute right-0 z-50 mt-2 w-56 space-y-2 rounded-3xl border border-[#383C4F] bg-menu-bg p-2 text-sm text-white shadow-xl"
    >
      <div className="space-y-2 rounded-2xl bg-black/20 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 font-medium text-[#81869E]">
          <CommandIcon className="h-4 w-4" />
          <div>Keybindings</div>
        </header>
        <div>
          <kbd className="block w-full list-none rounded-lg bg-white/[0.05] px-2 py-1 text-left font-spline font-medium">
            Ctrl + e
          </kbd>
          <div className="p-2">Expands your emmet snippet</div>
        </div>
        <div>
          <kbd className="block w-full rounded-lg bg-white/[0.05] px-2 py-1 font-spline font-medium">
            Ctrl + s
          </kbd>
          <div className="p-2">Saves your project and see the preview</div>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpMenu;