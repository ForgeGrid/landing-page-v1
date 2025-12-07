import type {
  NavItem,
  SocialLink,
  HeroContent,
  WaveConfig,
  LanyardConfig,
} from "../types";

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "home-section" },
  { label: "Team", href: "team-section" },
  { label: "Services", href: "services-section" },
  { label: "Product", href: "product-section" },
  { label: "Contact", href: "contact-section" },
];

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
    targetId: "team-section",
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
  ABOUT: "home-section",
  HERO: "team-section",
} as const;

export const TEAM_MEMBERS = [
  {
    id: "member-sukesh",
    name: "Sukesh",
    role: "AI & Full-Stack Developer",
    description:
      "Specializes in RAG systems, frontend performance, and product architecture.",
    glowColor: "132, 0, 255",
  },
  {
    id: "member-xyz",
    name: "John Doe",
    role: "Backend Engineer",
    description: "Expert in scalable APIs, security, and cloud architecture.",
    glowColor: "0, 180, 255",
  },
  {
    id: "member-abc",
    name: "Sarah Lee",
    role: "UI/UX Designer",
    description: "Designs modern, clean UI experiences.",
    glowColor: "255, 120, 0",
  }
];
