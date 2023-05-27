import { HelpIcon } from "@/assets";
import ClickAway from "@/components/ClickAway";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpMenu } from "@/components/menu";

const HelpBtn = () => {
  const [showHelpMenu, setShowHelpMenu] = useState(false);

  return (
    <ClickAway onClickOutside={() => setShowHelpMenu(false)}>
      <div className="relative">
        <button
          onClick={() => setShowHelpMenu(!showHelpMenu)}
          data-tooltip="Help"
          className={
            "flex items-center justify-center rounded-xl p-1.5 text-white/80 duration-100 hover:bg-[#252732] " +
            clsx({
              "tooltip tlt-b": !showHelpMenu,
              "bg-[#303340]": showHelpMenu,
            })
          }
        >
          <HelpIcon />
        </button>

        <AnimatePresence>{showHelpMenu && <HelpMenu />}</AnimatePresence>
      </div>
    </ClickAway>
  );
};

export default HelpBtn;
