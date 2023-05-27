import { DownloadAppIcon } from "@/assets";
import ClickAway from "@/components/ClickAway";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DownloadAppMenu } from "@/components/menu";

const DownloadAppBtn = () => {
  const [showDLMenu, setShowDLMenu] = useState(false);

  return (
    <ClickAway onClickOutside={() => setShowDLMenu(false)}>
      <div className="relative">
        {!window.__TAURI__ && (
          <button
            onClick={() => setShowDLMenu(!showDLMenu)}
            data-tooltip="Try the desktop version!"
            className={
              "flex items-center space-x-3 rounded-full border-t border-white/10 bg-gradient-to-r from-violet-800 to-violet-600 px-4 py-1.5 text-sm font-medium text-white shadow-md duration-200 " +
              clsx({ "tooltip tlt-br": !showDLMenu })
            }
          >
            <DownloadAppIcon className="h-6 w-6" />
            <span>Download app</span>
          </button>
        )}

        <AnimatePresence>{showDLMenu && <DownloadAppMenu />}</AnimatePresence>
      </div>
    </ClickAway>
  );
};

export default DownloadAppBtn;
