import { IonIcon } from "@ionic/react";
import ProjectName from "./ProjectName";
import {
  downloadOutline,
  settingsOutline,
  help,
  logoGithub,
  eyeOutline,
  flashOutline,
  buildOutline,
} from "ionicons/icons";
import useEditorStore from "../stores/editor-store";

const Header = () => {
  const previewRef = useEditorStore((state) => state.previewRef);

  return (
    <header className="mx-auto mb-6 flex items-center justify-between space-x-10 px-4 py-2 text-white duration-200">
      <div className="flex items-center space-x-4">
        <div className="text-center font-spline text-lg font-semibold text-white">
          Quikk
          <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
            Design
          </span>
        </div>

        <div className="flex space-x-2 rounded-md border border-white/10 p-1">
          <button
            data-tooltip="Save"
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-lg px-2 py-1 text-white/90 duration-100 hover:bg-white/[0.05]"
          >
            <IonIcon className="text-lg text-white/50" icon={flashOutline} />
            <span className="text-sm font-semibold">Save</span>
          </button>

          <button
            onClick={() =>
              previewRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            data-tooltip="Preview"
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-lg px-2 py-1 text-white/90 duration-100 hover:bg-white/[0.05]"
          >
            <IonIcon className="text-lg text-white/50" icon={eyeOutline} />
            <span className="text-sm font-semibold">Preview</span>
          </button>

          <button
            data-tooltip="Save and Preview (Ctrl + s)"
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-lg px-2 py-1 text-white/90 duration-100 hover:bg-white/[0.05]"
          >
            <IonIcon className="text-lg text-white/50" icon={buildOutline} />
            <span className="text-sm font-semibold">Run</span>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <ProjectName />
        <button
          data-tooltip="Save to your device"
          className="tooltip tlt-b flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05]"
        >
          <IonIcon className="text-xl" icon={downloadOutline} />
        </button>
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
