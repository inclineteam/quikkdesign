import { IonIcon } from "@ionic/react";
import { usePreferencesStore } from "@/contexts/PreferencesContext";
import { colorWand } from "ionicons/icons";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEditorStore } from "@/contexts/EditorContext";
import { LayoutGroup } from "framer-motion";
import { ReactComponent as WandIcon } from "@/assets/wand-icon.svg";

const Indicator = () => {
  const { jQueryPlugin, bootstrapPlugin, tailwindPlugin } =
    usePreferencesStore();
  const { currentEditor } = useEditorStore();

  return (
    <div className="mt-4 flex items-center justify-between px-4">
      <motion.div className="flex w-max items-center space-x-3 rounded-full bg-subtle-bg py-2 pl-4 pr-2 text-sm text-[#EBEBF4]">
        <div
          data-tooltip="Active superpowers"
          className="tooltip tlt-bl group flex items-center"
        >
          <WandIcon className="h-6 w-6 [&>g]:fill-gray-500 group-hover:[&>g]:fill-purple-500" />
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
                    <div className="rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-500">
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
                    <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-400">
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
                    <div className="rounded-full bg-violet-500/10 px-3 py-1 text-violet-400">
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
            className="rounded-full bg-rose-500/10 px-3 py-1 text-rose-400"
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
            <div className="w-max items-center space-x-4 rounded-full rounded-full bg-subtle-bg px-3 py-2 text-sm font-medium text-[#EBEBF4] duration-200">
              Active: <span className="uppercase">{currentEditor}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Indicator;