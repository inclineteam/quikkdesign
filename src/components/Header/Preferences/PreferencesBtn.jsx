import { IonIcon } from "@ionic/react";
import { settingsOutline } from "ionicons/icons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import PreferencesMenu from "./PreferencesMenu";
import ClickAway from "@/components/ClickAway";
import { ReactComponent as SettingsIcon } from "@/assets/settings-icon.svg";

const PreferencesBtn = () => {
  const [showPref, setShowPref] = useState(false);

  return (
    <ClickAway onClickOutside={() => setShowPref(false)}>
      <div className="relative">
        <button
          onClick={() => setShowPref(!showPref)}
          data-tooltip="Preferences"
          className={
            "flex items-center justify-center rounded-xl p-1.5 text-white/80 duration-100 hover:bg-[#252732] " +
            clsx({ "tooltip tlt-b": !showPref, "bg-[#303340]": showPref })
          }
        >
          <SettingsIcon />
        </button>

        <AnimatePresence>{showPref && <PreferencesMenu />}</AnimatePresence>
      </div>
    </ClickAway>
  );
};

export default PreferencesBtn;
