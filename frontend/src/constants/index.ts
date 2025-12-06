/**
 * Default configuration constants for the ForgeGrid landing page
 */

import type { NavItem, SocialLink, HeroContent, WaveConfig, LanyardConfig } from "../types";

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Product", href: "#" },
  { label: "Contact", href: "#" },
];

// Note: Social links icons should be imported in components that use them
// This provides the structure - actual icon imports are handled in NavBar component
export const DEFAULT_SOCIAL_LINKS: Omit<SocialLink, "icon">[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/forge-grid/",
  },
  {
    label: "Email",
    href: "mailto:sukesh.official.2006@gmail.com",
  },
  {
    label: "Discord",
    href: "https://discord.gg/",
  },
];

export const DEFAULT_HERO_CONTENT: HeroContent = {
  badge: {
    dot: true,
    label: "Welcome to ForgeGrid",
    newLabel: "NEW",
  },
  title: "We Build What the World Needs Next.",
  subtitle:
    "We turn your ideas into fully-functional SaaS products — fast, reliable, and engineered with clean, future-ready architecture.",
  primaryButton: {
    label: "Our Projects",
    href: "#projects",
  },
  secondaryButton: {
    label: "Learn more",
    href: "#learn",
  },
  scrollButton: {
    enabled: true,
    targetId: "next-section",
    icon: "/src/assets/arrow.png",
  },
};

export const DEFAULT_WAVE_CONFIG: WaveConfig = {
  enabledWaves: ["top", "middle", "bottom"],
  lineCount: [5, 5, 5],
  lineDistance: [5, 5, 5],
  bendRadius: 5.0,
  bendStrength: -0.5,
  interactive: true,
  parallax: true,
};

export const DEFAULT_LANYARD_CONFIG: LanyardConfig = {
  position: [0, 0, 30],
  gravity: [0, -40, 0],
  fov: 20,
  transparent: true,
};

export const DEFAULT_SECTION_IDS = {
  ABOUT: "next-section",
  HERO: "hero-section",
} as const;

