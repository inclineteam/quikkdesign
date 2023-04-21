import { ReactComponent as ShareIcon } from "@/assets/share-icon.svg";
import ClickAway from "@/components/ClickAway";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ShareMenu from "./ShareMenu";

const ShareBtn = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);

  return (
    <ClickAway onClickOutside={() => setShowShareMenu(false)}>
      <div className="relative">
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          data-tooltip="Share"
          className={
            "tooltip tlt-b flex items-center justify-center rounded-xl p-1.5 text-white/80 duration-100 hover:bg-[#252732] " +
            clsx({
              "tooltip tlt-b": !showShareMenu,
              "bg-[#303340]": showShareMenu,
            })
          }
        >
          <ShareIcon />
        </button>

        <AnimatePresence>{showShareMenu && <ShareMenu />}</AnimatePresence>
      </div>
    </ClickAway>
  );
};

export default ShareBtn;
