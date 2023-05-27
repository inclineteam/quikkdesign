import { motion } from "framer-motion";
import { ThreeSQIcon } from "@/assets";

const ShareMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      className="absolute right-0 z-50 mt-2 w-max space-y-2 rounded-3xl border border-[#383C4F] bg-menu-bg p-2 text-sm text-white shadow-xl"
    >
      <div className="space-y-2 rounded-2xl bg-black/20 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 font-medium text-[#81869E]">
          <ThreeSQIcon className="h-4 w-4" />
          <div>Share project</div>
        </header>
        <div className="max-w-[20ch]">
          Share your to project to everyone{" "}
          <span className="font-medium text-violet-400">soon!</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ShareMenu;
