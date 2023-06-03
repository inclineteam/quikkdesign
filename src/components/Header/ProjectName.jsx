import { useState } from "react";
import clsx from "clsx";
import { useRef } from "react";
import { useProjectStore } from "@/contexts/ProjectContext";
import { ArrowUpIcon, PenIcon } from "@/assets";

const ProjectName = () => {
  const inputRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const { projectName, updateProjectName } = useProjectStore();

  const handleNewProjectName = (e) => {
    if (e.key === "Enter") {
      if (projectName.length > 0) {
        setEdit(false);
      }
    }
  };

  return (
    <div
      className={clsx(
        "z-50 flex items-center space-x-2 rounded-md border-t border-white/10 bg-[#2E313E] py-1 pl-3 pr-2 text-white/80 ring-2 duration-200",
        edit ? "ring-violet-500" : "ring-transparent"
      )}
    >
      <input
        value={projectName}
        onChange={(e) => updateProjectName(e.target.value)}
        className={`w-max bg-transparent text-sm font-medium outline-none duration-200 ${clsx(
          {
            "text-white": edit,
            "text-[#EBEBF4]": !edit,
          }
        )}`}
        onKeyDown={handleNewProjectName}
        ref={inputRef}
        onFocus={() => setEdit(true)}
        onBlur={() => setEdit(false)}
      />

      {edit ? (
        <button
          data-tooltip="Done"
          onClick={() => setEdit(false)}
          className="tooltip tlt-b rounded-lg p-1 text-violet-300 hover:bg-violet-500/20 hover:text-violet-300"
        >
          <ArrowUpIcon className="h-4 w-4" />
        </button>
      ) : (
        <button
          data-tooltip="Edit"
          onClick={() => {
            setEdit(true);
            inputRef?.current.focus();
          }}
          className={`tooltip tlt-b rounded-lg p-1 text-[#81869E] hover:bg-sky-500/20 hover:text-sky-300`}
        >
          <PenIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default ProjectName;
