import { IonIcon } from "@ionic/react";
import { settingsOutline } from "ionicons/icons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import PreferencesMenu from "./PreferencesMenu";
import ClickAway from "@/components/ClickAway";

const PreferencesBtn = () => {
  const [showPref, setShowPref] = useState(false);

  return (
    <ClickAway onClickOutside={() => setShowPref(false)}>
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

        <AnimatePresence>{showPref && <PreferencesMenu />}</AnimatePresence>
      </div>
    </ClickAway>
  );
};

export default PreferencesBtn;
