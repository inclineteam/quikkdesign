import ProjectName from "./ProjectName";
import Logo from "../Logo";
import SaveToDeviceBtn from "./SaveToDeviceBtn";
import PreferencesBtn from "./Preferences/PreferencesBtn";
import { usePreviewStore } from "@/contexts/PreviewContext";
import { ReactComponent as SaveIcon } from "@/assets/save-icon.svg";
import { ReactComponent as EyeIcon } from "@/assets/eye-icon.svg";
import { ReactComponent as BuildIcon } from "@/assets/build-icon.svg";
import { ReactComponent as LogoGithubIcon } from "@/assets/logo/logo-github.svg";
import clsx from "clsx";
import DownloadAppBtn from "./Download/DownloadAppBtn";
import HelpBtn from "./Help/HelpBtn";
import ShareBtn from "./Share/ShareBtn";

const Header = () => {
  const { previewRef, updateSourceDoc } = usePreviewStore();

  return (
    <header className="mb-6 flex items-center justify-between space-x-10 bg-subtle-bg px-4 py-2 text-white duration-200">
      <div className="flex items-center space-x-4">
        <Logo />

        <div className="flex space-x-2 rounded-full border-t border-white/10 bg-[#2E313E] px-3 py-1">
          <button
            onClick={updateSourceDoc}
            data-tooltip="Save"
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-xl px-2 py-1 text-[#EBEBF4] duration-100 hover:bg-white/[0.05]"
          >
            <SaveIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Save</span>
          </button>

          <button
            onClick={() =>
              previewRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            data-tooltip="Preview"
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-xl px-2 py-1 text-[#EBEBF4] duration-100 hover:bg-white/[0.05]"
          >
            <EyeIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Preview</span>
          </button>

          <button
            onClick={() => {
              updateSourceDoc();
              previewRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            data-tooltip="Save and Preview (Ctrl + s)"
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-xl px-2 py-1 text-[#EBEBF4] duration-100 hover:bg-white/[0.05]"
          >
            <BuildIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Run</span>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <ProjectName />
        <SaveToDeviceBtn />
        <PreferencesBtn />
        <ShareBtn />
        <HelpBtn />
        <a
          href="https://github.com/inclineteam/quikkdesign"
          target="_blank"
          rel="noreferrer noopener"
          data-tooltip="Support"
          className={
            "tooltip flex items-center justify-center rounded-xl p-1.5 duration-100 hover:bg-[#252732] " +
            clsx({
              "tlt-br": window.__TAURI__,
              "tlt-b": !window.__TAURI__,
            })
          }
        >
          <LogoGithubIcon className="h-6 w-6 fill-[#BCC1D4]" />
        </a>
        <DownloadAppBtn />
      </div>
    </header>
  );
};

export default Header;
