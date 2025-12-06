import { useState } from "react";
import FloatingToggle from "../../ui/ToogleSwitch/FloatingToogle";
import Lanyard from "../../ui/Lanyard/Lanyard";
import MagicBento from "../../../components/ui/MagicBento/MagicBento";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../ui/tooltip/tooltip";
import "../../ui/css/tooltTip.css"
import type { LanyardConfig, FloatingToggleConfig } from "../../../types";
import { DEFAULT_LANYARD_CONFIG } from "../../../constants";

import "../../css/aboutUs.css";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description?: string;
  glowColor?: string;
}

export interface TeamMemberSectionProps {
  member: TeamMember;
  sectionId?: string;
  lanyardConfig?: LanyardConfig;
  toggleConfig?: FloatingToggleConfig;
  showToggle?: boolean;
  className?: string;
}

export default function TeamMemberSection({
  member,
  sectionId = member.id,           // Unique section for each member
  lanyardConfig = DEFAULT_LANYARD_CONFIG,
  toggleConfig,
  showToggle = true,
  className = "",
}: TeamMemberSectionProps) {

  const [gravityOn, setGravityOn] = useState(true);

  // Merge default lanyard config with overrides
  const finalLanyardConfig: LanyardConfig = {
    ...DEFAULT_LANYARD_CONFIG,
    ...lanyardConfig,
    gravity: gravityOn
      ? lanyardConfig.gravity || DEFAULT_LANYARD_CONFIG.gravity
      : [0, 0, 0],
  };

  return (
    <section id="team-section" className={`team-slide about-section${className}`}>
      
      {/* 3D Lanyard */}
      <div className="lanyard-overlap">
        <Lanyard
          key={gravityOn ? "gravity-on" : "gravity-off"}
          position={finalLanyardConfig.position}
          gravity={finalLanyardConfig.gravity}
          fov={finalLanyardConfig.fov}
          transparent={finalLanyardConfig.transparent}
        />
      </div>

      {/* Floating Gravity Toggle */}
      {showToggle && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="fixed bottom-12 right-11 z-[999999] flex items-center justify-center">
                <FloatingToggle
                  onToggle={setGravityOn}
                  sectionId="team-section"
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

      {/* Magic Bento UI */}
      <div className="bento-wrapper">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor={member.glowColor || "132, 0, 255"}
        />
      </div>

    </section>
  );
}
