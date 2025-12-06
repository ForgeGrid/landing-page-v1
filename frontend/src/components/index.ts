/**
 * Central export file for all components
 */

export { default as NavBar } from "./NavBar/NavBar";
export type { NavBarProps } from "./NavBar/NavBar";

export { default as Hero } from "./Sections/Hero/Hero";
export type { HeroProps } from "./Sections/Hero/Hero";

export { default as AboutUs } from "./Sections/AboutUs/AboutUs";
export type { AboutUsProps } from "./Sections/AboutUs/AboutUs";

export { default as WaveBackground } from "./Background/WaveBackground";
export type { WaveBackgroundProps } from "./Background/WaveBackground";

export { default as CardSwap } from "./ui/CardSwap/CardSwap";
export type { CardSwapProps, CardProps } from "./ui/CardSwap/CardSwap";

export { default as FloatingLines } from "./ui/FloatingLines/FloatingLines";

export { default as Lanyard } from "./ui/Lanyard/Lanyard";

export { default as FloatingToggle } from "./ui/ToogleSwitch/FloatingToogle";
export type { FloatingToggleProps } from "./ui/ToogleSwitch/FloatingToogle";

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./ui/tooltip/tooltip";

