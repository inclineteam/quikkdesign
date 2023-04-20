import { motion } from "framer-motion";
import { ReactComponent as MonitorIcon } from "@/assets/monitor-icon.svg";
import { saveAs } from "file-saver";

const DownloadAppMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      className="absolute right-0 z-50 mt-2 w-max space-y-2 rounded-3xl border border-[#383C4F] bg-menu-bg p-2 text-sm text-white shadow-xl"
    >
      <div className="space-y-2 rounded-2xl bg-black/20 p-3 text-gray-100">
        <header className="mb-3 flex items-end space-x-2 font-medium text-[#81869E]">
          <MonitorIcon className="h-5 w-5" />
          <div className="">Only available in Linux</div>
        </header>

        <button
          onClick={() =>
            saveAs(
              "https://github.com/inclineteam/quikkdesign/releases/download/0.1.0/quikk-design_0.1.0_amd64.deb"
            )
          }
          className="block w-full text-left duration-150 hover:translate-x-2 hover:text-violet-300 focus:font-semibold"
        >
          <span>Executable</span>
        </button>

        <button
          onClick={() =>
            saveAs(
              "https://github.com/inclineteam/quikkdesign/releases/download/0.1.0/quikk-design_0.1.0_amd64.deb"
            )
          }
          className="block w-full text-left duration-150 hover:translate-x-2 hover:text-violet-300 focus:font-semibold"
        >
          <span>Debian (.deb)</span>
        </button>

        <button
          onClick={() =>
            saveAs(
              "https://github.com/inclineteam/quikkdesign/releases/download/0.1.0/quikk-design_0.1.0_amd64.AppImage"
            )
          }
          className="block w-full text-left duration-150 hover:translate-x-2 hover:text-violet-300 focus:font-semibold"
        >
          <span>AppImage</span>
        </button>
      </div>
    </motion.div>
  );
};

export default DownloadAppMenu;
