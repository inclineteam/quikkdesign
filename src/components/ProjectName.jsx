import { useState } from "react";
import { Pencil, Check } from "akar-icons";
import useProjectStore from "../stores/project-store";
import clsx from "clsx";
import { useRef } from "react";

const ProjectName = () => {
  const inputRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const { projectName, setProjectName } = useProjectStore((state) => ({
    projectName: state.projectName,
    updateProjectName: state.updateProjectName,
  }));

  const handleNewProjectName = (e) => {
    if (e.key === "Enter") {
      if (projectName.length > 0) {
        setEdit(false);
      }
    }
  };

  return (
    <div
      className={`z-50 flex items-center space-x-2 rounded-lg border border-white/[0.05] bg-white/[0.05] py-1 pl-2 pr-1 text-white/80 shadow shadow-black/10 duration-200 ${clsx(
        {
          "translate-y-2 shadow-[0_0_8px_10px] shadow-black/10": edit,
        }
      )}`}
    >
      <input
        value={projectName}
        onChange={(e) => updateProjectName(e.target.value)}
        className={`w-max bg-transparent font-['Spline_Sans_Mono'] text-sm outline-none`}
        onKeyDown={handleNewProjectName}
        ref={inputRef}
        onFocus={() => setEdit(true)}
        onBlur={() => setEdit(false)}
      />

      {edit ? (
        <button
          data-tooltip="Done"
          onClick={() => setEdit(false)}
          className="tooltip tlt-b rounded-lg p-1 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-300"
        >
          <Check className="h-4 w-4" />
        </button>
      ) : (
        <button
          data-tooltip="Edit"
          onClick={() => {
            setEdit(true);
            inputRef?.current.focus();
          }}
          className={`tooltip tlt-b rounded-lg p-1 text-white/50 hover:bg-sky-500/20 hover:text-sky-300`}
        >
          <Pencil className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default ProjectName;
