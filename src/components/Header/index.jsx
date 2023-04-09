import { IonIcon } from "@ionic/react";
import ProjectName from "./ProjectName";
import {
  help,
  logoGithub,
  eyeOutline,
  flashOutline,
  buildOutline,
} from "ionicons/icons";
import { useEditorStore } from "@/contexts/EditorContext";
import Logo from "../Logo";
import SaveToDeviceBtn from "./SaveToDeviceBtn";
import PreferencesBtn from "./Preferences/PreferencesBtn";

const Header = () => {
  const { previewRef, updateSourceDoc } = useEditorStore();

  return (
    <header className="mx-auto mb-6 flex items-center justify-between space-x-10 px-4 py-2 text-white duration-200">
      <div className="flex items-center space-x-4">
        <Logo />

        <div className="flex space-x-2 rounded-md border border-white/10 p-1">
          <button
            onClick={updateSourceDoc}
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
            onClick={() => {
              updateSourceDoc();
              previewRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
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
        <SaveToDeviceBtn />
        <PreferencesBtn />
        <button
          data-tooltip="Help"
          className="tooltip tlt-b flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05]"
        >
          <IonIcon className="text-xl" icon={help} />
        </button>
        <a
          href="https://github.com/inclineteam/quikkdesign"
          target="_blank"
          rel="noreferrer noopener"
          data-tooltip="Support"
          className="tooltip tlt-br flex items-center justify-center rounded-lg px-2 py-1 text-white/80 duration-100 hover:bg-white/[0.05]"
        >
          <IonIcon className="text-xl" icon={logoGithub} />
        </a>
      </div>
    </header>
  );
};

export default Header;
