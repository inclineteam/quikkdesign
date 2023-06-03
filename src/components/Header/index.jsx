import ProjectName from "./ProjectName";
import Logo from "../Logo";
import { usePreviewStore } from "@/contexts/PreviewContext";
import { BuildIcon, EyeIcon, BoltIcon, LogoGithubIcon } from "@/assets";
import clsx from "clsx";
import {
  DownloadAppBtn,
  HelpBtn,
  ShareBtn,
  PreferencesBtn,
  SaveToDeviceBtn,
} from "@/ui/buttons";

const Header = () => {
  const { previewRef, updateSourceDoc } = usePreviewStore();

  return (
    <header className="mb-6 flex items-center justify-between space-x-10 bg-subtle-bg px-4 py-2 text-white duration-200">
      <div className="flex items-center space-x-4">
        <Logo />

        <div className="flex space-x-2 rounded-md border-t border-white/10 bg-[#2E313E] p-1">
          <button
            onClick={updateSourceDoc}
            data-tooltip="Save"
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-md px-2 py-1 text-[#EBEBF4] duration-100 hover:bg-white/[0.05]"
          >
            <BoltIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Save</span>
          </button>

          <button
            onClick={() =>
              previewRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            data-tooltip="Preview"
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-md px-2 py-1 text-[#EBEBF4] duration-100 hover:bg-white/[0.05]"
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
            className="tooltip tlt-b flex flex items-center justify-center space-x-2 rounded-md px-2 py-1 text-[#EBEBF4] duration-100 hover:bg-white/[0.05]"
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
          data-tooltip="Support us!"
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
