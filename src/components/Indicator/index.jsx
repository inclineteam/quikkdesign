import { usePreferencesStore } from "@/contexts/PreferencesContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEditorStore } from "@/contexts/EditorContext";
import { LayoutGroup } from "framer-motion";
import { WandIcon, ActiveEditorIcon } from "@/assets";
import clsx from "clsx";

const Indicator = () => {
  const { jQueryPlugin, bootstrapPlugin, tailwindPlugin } =
    usePreferencesStore();
  const { currentEditor } = useEditorStore();

  return (
    <div className="mt-4 flex items-start justify-between px-4">
      <motion.div
        data-tooltip="Active superpowers"
        className="tooltip tlt-bl flex w-max items-center space-x-3 rounded-md bg-subtle-bg py-1.5 pl-3 pr-1.5 text-sm text-[#EBEBF4]"
      >
        <div className="group flex items-center">
          <WandIcon className="h-6 w-6 [&>g]:fill-slate-500 group-hover:[&>g]:fill-purple-500" />
        </div>
        {jQueryPlugin || bootstrapPlugin || tailwindPlugin ? (
          <LayoutGroup>
            <div className="flex items-center space-x-1 font-medium">
              <AnimatePresence>
                {jQueryPlugin && (
                  <motion.div
                    layoutId="jq"
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 10 }}
                  >
                    <div className="rounded bg-yellow-500/10 px-3 py-1 text-yellow-500">
                      JQuery
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {tailwindPlugin && (
                  <motion.div
                    layoutId="tw"
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 10 }}
                  >
                    <div className="rounded bg-cyan-500/10 px-3 py-1 text-cyan-400">
                      Tailwind
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {bootstrapPlugin && (
                  <motion.div
                    layoutId="bs"
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 10 }}
                  >
                    <div className="rounded bg-violet-500/10 px-3 py-1 text-violet-400">
                      Bootstrap
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </LayoutGroup>
        ) : (
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
            className="rounded bg-rose-500/10 px-3 py-1 font-medium text-rose-400"
          >
            None
          </motion.div>
        )}
      </motion.div>
      <AnimatePresence>
        {currentEditor !== "" && (
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
          >
            <div
              data-tooltip="Active editor"
              className="tooltip tlt-br group flex w-max cursor-default items-center rounded-full rounded-md bg-subtle-bg p-1.5 pl-3 text-sm font-medium duration-200"
            >
              <div className="mr-3">
                <ActiveEditorIcon className="h-5 w-5 [&>g]:stroke-slate-500 group-hover:[&>g]:stroke-cyan-400" />
              </div>
              <div
                className={clsx(
                  "rounded px-3 py-1",
                  currentEditor === "html" && "bg-amber-500/10 text-amber-400",
                  currentEditor === "css" && "bg-sky-500/10 text-sky-400",
                  currentEditor === "js" && "bg-yellow-500/10 text-yellow-400"
                )}
              >
                <span className="uppercase">{currentEditor}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Indicator;
