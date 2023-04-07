import { useState } from "react";
import { Pencil, Check } from "akar-icons";
import clsx from "clsx";
import { useRef } from "react";
import { useProjectStore } from "@/contexts/ProjectContext";

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
      className={`z-50 flex items-center space-x-2 rounded-lg border border-white/10 py-1 pl-2 pr-1 text-white/80 shadow shadow-black/10 duration-200 ${clsx(
        {
          "translate-y-2 bg-white/[0.05]": edit,
        }
      )}`}
    >
      <input
        value={projectName}
        onChange={(e) => updateProjectName(e.target.value)}
        className={`w-max bg-transparent font-spline text-sm outline-none duration-200 ${clsx(
          {
            "text-white": edit,
            "text-white/70": !edit,
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
          className="tooltip tlt-b rounded-lg p-1 text-sky-300 hover:bg-sky-500/20 hover:text-sky-300"
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
