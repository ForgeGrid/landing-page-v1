import { useState } from "react";
import FloatingToggle from "../../ui/ToogleSwitch/FloatingToogle";
import Lanyard from "../../ui/Lanyard/Lanyard";
import "../../css/aboutUs.css";
import "../../ui/css/tooltTip.css";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../ui/tooltip/tooltip";
import type { LanyardConfig, FloatingToggleConfig } from "../../../types";
import { DEFAULT_LANYARD_CONFIG, DEFAULT_SECTION_IDS } from "../../../constants";

export interface AboutUsProps {
  sectionId?: string;
  lanyardConfig?: LanyardConfig;
  toggleConfig?: FloatingToggleConfig;
  showToggle?: boolean;
  className?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({
  sectionId = DEFAULT_SECTION_IDS.ABOUT,
  lanyardConfig = DEFAULT_LANYARD_CONFIG,
  toggleConfig,
  showToggle = true,
  className,
}) => {
  const [gravityOn, setGravityOn] = useState(true);

  const finalLanyardConfig: LanyardConfig = {
    ...DEFAULT_LANYARD_CONFIG,
    ...lanyardConfig,
    gravity: gravityOn
      ? lanyardConfig.gravity || DEFAULT_LANYARD_CONFIG.gravity
      : [0, 0, 0],
  };

  return (
    <section id={sectionId} className={`about-section ${className || ""}`}>
      <div className="lanyard-overlap">
        <Lanyard
          key={gravityOn ? "gravity-on" : "gravity-off"}
          position={finalLanyardConfig.position}
          gravity={finalLanyardConfig.gravity}
          fov={finalLanyardConfig.fov}
          transparent={finalLanyardConfig.transparent}
        />
      </div>

      {showToggle && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="fixed bottom-12 right-11 z-[999999] flex items-center justify-center">
                <FloatingToggle
                  onToggle={setGravityOn}
                  sectionId={toggleConfig?.sectionId || sectionId}
                  threshold={toggleConfig?.threshold}
                  defaultChecked={toggleConfig?.defaultChecked}
                />
              </div>
            </TooltipTrigger>

            <TooltipContent side="top" align="center">
              {gravityOn ? "Anti-Gravity" : "Gravity"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <div className="space"></div>
    </section>
  );
};

export default AboutUs;
