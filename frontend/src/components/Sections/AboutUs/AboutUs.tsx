// import { useState } from "react";
// import FloatingToggle from "../../ui/ToogleSwitch/FloatingToogle";
// import Lanyard from "../../ui/Lanyard/Lanyard";
// import "../../css/aboutUs.css";
// import "../../ui/css/tooltTip.css";
// import {
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
//   TooltipProvider,
// } from "../../ui/tooltip/tooltip";
// import type { LanyardConfig, FloatingToggleConfig } from "../../../types";
// import { DEFAULT_LANYARD_CONFIG } from "../../../constants";
// import MagicBento from "../../../components/ui/MagicBento/MagicBento";

// export interface AboutUsProps {
//   sectionId?: string;
//   lanyardConfig?: LanyardConfig;
//   toggleConfig?: FloatingToggleConfig;
//   showToggle?: boolean;
//   className?: string;
// }

// const AboutUs: React.FC<AboutUsProps> = ({
//   lanyardConfig = DEFAULT_LANYARD_CONFIG,
//   toggleConfig,
//   showToggle = true,
//   className,
// }) => {
//   const [gravityOn, setGravityOn] = useState(true);

//   const finalLanyardConfig: LanyardConfig = {
//     ...DEFAULT_LANYARD_CONFIG,
//     ...lanyardConfig,
//     gravity: gravityOn
//       ? lanyardConfig.gravity || DEFAULT_LANYARD_CONFIG.gravity
//       : [0, 0, 0],
//   };

//   return (
//     <section id="team-section" className={`about-section ${className || ""}`}>
//       {/* 3D Lanyard */}
//       <div className="lanyard-overlap">
//         <Lanyard
//           key={gravityOn ? "gravity-on" : "gravity-off"}
//           position={finalLanyardConfig.position}
//           gravity={finalLanyardConfig.gravity}
//           fov={finalLanyardConfig.fov}
//           transparent={finalLanyardConfig.transparent}
//         />
//       </div>

//       {/* Floating Gravity Toggle */}
//       {showToggle && (
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <div className="fixed bottom-12 right-11 z-[999999] flex items-center justify-center">
//                 <FloatingToggle
//                   onToggle={setGravityOn}
//                   sectionId="team-section"
//                   threshold={toggleConfig?.threshold}
//                   defaultChecked={toggleConfig?.defaultChecked}
//                 />
//               </div>
//             </TooltipTrigger>

//             <TooltipContent side="top" align="center">
//               {gravityOn ? "Anti-Gravity" : "Gravity"}
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       )}

//       {/* Magic Bento */}
//       <div className="bento-wrapper">
//         <MagicBento
//           textAutoHide={true}
//           enableStars={true}
//           enableSpotlight={true}
//           enableBorderGlow={true}
//           enableTilt={true}
//           enableMagnetism={true}
//           clickEffect={true}
//           spotlightRadius={300}
//           particleCount={12}
//           glowColor="132, 0, 255"
//         />
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import TeamPage from "./TeamPage";
import FloatingToggle from "../../ui/ToogleSwitch/FloatingToogle";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../ui/tooltip/tooltip";

import { useState } from "react";

export default function AboutUs() {
  const [gravityOn, setGravityOn] = useState(true);

  return (
    <>
      {/* Floating toggle now belongs here */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="fixed bottom-12 right-11 z-[999999] flex items-center justify-center">
              <FloatingToggle
                sectionId="team-section"
                onToggle={(value) => setGravityOn(value)}
                defaultChecked={true}
                threshold={0.3}
              />
            </div>
          </TooltipTrigger>

          <TooltipContent side="top" align="center">
            {gravityOn ? "Anti-Gravity" : "Gravity"}
          </TooltipContent>
        </Tooltip>

      </TooltipProvider>

      {/* Pass the toggle state to children */}
      <TeamPage gravityOn={gravityOn} />
    </>
  );
}

