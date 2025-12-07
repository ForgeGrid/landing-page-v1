import { DEFAULT_LANYARD_CONFIG } from "../../../constants";
import type { LanyardConfig, FloatingToggleConfig } from "../../../types";
import Lanyard from "../../ui/Lanyard/Lanyard";
import MagicBento from "../../ui/MagicBento/MagicBento";
import "../../ui/css/tooltTip.css";
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
  externalGravity?: boolean;
  onGravityToggle?: (state: boolean) => void;
}

export default function TeamMemberSection({
  member,
  sectionId = member.id,
  lanyardConfig = DEFAULT_LANYARD_CONFIG,
  className = "",
  externalGravity,
}: TeamMemberSectionProps) {
  
  const finalGravity = externalGravity ?? true;

  const finalLanyardConfig: LanyardConfig = {
    ...DEFAULT_LANYARD_CONFIG,
    ...lanyardConfig,
    gravity: finalGravity 
      ? lanyardConfig.gravity || DEFAULT_LANYARD_CONFIG.gravity
      : [0, 0, 0],
  };

  return (
    <section id="team-section" className={`team-slide about-section${className}`}>
      
      {/* 3D Lanyard */}
      <div className="lanyard-overlap">
        <Lanyard
          key={finalGravity ? "gravity-on" : "gravity-off"}
          position={finalLanyardConfig.position}
          gravity={finalLanyardConfig.gravity}
          fov={finalLanyardConfig.fov}
          transparent={finalLanyardConfig.transparent}
        />
      </div>

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
