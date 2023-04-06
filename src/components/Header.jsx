import { IonIcon } from "@ionic/react";
import ProjectName from "./ProjectName";
import {
  downloadOutline,
  settingsOutline,
  help,
  logoGithub,
} from "ionicons/icons";

const Header = () => {
  return (
    <header className="mx-auto mb-6 flex items-center justify-between space-x-10 bg-black/10 px-4 py-2 text-white duration-200">
      <div className="text-center font-spline font-semibold text-white">
        Quikk
        <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
          Design
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <button
          data-tooltip="Save to your device"
          className="tooltip tlt-b flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05]"
        >
          <IonIcon className="text-xl" icon={downloadOutline} />
        </button>
        <ProjectName />
        <button
          data-tooltip="Preferences"
          className="tooltip tlt-b flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05]"
        >
          <IonIcon className="text-xl" icon={settingsOutline} />
        </button>
        <button
          data-tooltip="Help"
          className="tooltip tlt-b flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05]"
        >
          <IonIcon className="text-xl" icon={help} />
        </button>
        <button
          data-tooltip="Support"
          className="tooltip tlt-br flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05]"
        >
          <IonIcon className="text-xl" icon={logoGithub} />
        </button>
      </div>
    </header>
  );
};

export default Header;
