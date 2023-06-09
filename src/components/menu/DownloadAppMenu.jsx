import { motion } from "framer-motion";
import { MonitorIcon } from "@/assets";
import { saveAs } from "file-saver";
import { version } from "../../../package.json";

const DownloadAppMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 10 }}
      className="absolute right-0 z-50 mt-2 w-max space-y-2 rounded-md border border-[#383C4F] bg-menu-bg p-2 text-sm text-white shadow-xl"
    >
      <div className="rounded bg-black/20 p-3 text-gray-100">
        <header className="mb-3 flex items-center space-x-2 font-medium text-[#81869E]">
          <MonitorIcon className="h-4 w-4" />
          <div>Available in Linux & MacOS</div>
        </header>
        <Item
          name="Debian"
          ext="(.deb)"
          link={`https://github.com/inclineteam/quikkdesign/releases/download/${version}/quikk-design_${version}_amd64.deb`}
        />
        <Item
          name="App Image"
          ext="(.AppImage)"
          link={`https://github.com/inclineteam/quikkdesign/releases/download/${version}/quikk-design_${version}_amd64.AppImage`}
        />
        <Item
          name="Apple Disk Image"
          ext="(.dmg)"
          link={`https://github.com/inclineteam/quikkdesign/releases/download/${version}/QuikkDesign_${version}_x64.dmg`}
        />
        <Item
          name="Zip"
          ext="(.tar.gz)"
          link={`https://github.com/inclineteam/quikkdesign/releases/download/${version}/QuikkDesign.app.tar.gz`}
        />
      </div>
    </motion.div>
  );
};

export default DownloadAppMenu;

const Item = ({ link, name, ext }) => (
  <button
    onClick={() => saveAs(link)}
    className="group relative flex w-full space-x-2 py-1 text-left"
  >
    <div
      className={
        "absolute top-1/2 h-1.5 w-0 -translate-y-1/2 rounded-l-md rounded-r-full bg-violet-400 duration-150 group-hover:w-2.5"
      }
    ></div>
    <div className="duration-150 group-hover:translate-x-2 group-hover:text-violet-300 group-focus:font-semibold">
      <span>{name}</span>{" "}
      <span className="text-[#81869E] duration-150 group-hover:font-medium group-hover:text-violet-200">
        {ext}
      </span>
    </div>
  </button>
);
