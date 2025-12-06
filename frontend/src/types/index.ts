/**
 * Shared TypeScript types and interfaces for the ForgeGrid landing page
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface HeroContent {
  badge?: {
    dot?: boolean;
    label: string;
    newLabel?: string;
  };
  title: string;
  subtitle: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  scrollButton?: {
    enabled: boolean;
    targetId?: string;
    icon?: string;
  };
}

export interface WaveConfig {
  enabledWaves?: Array<"top" | "middle" | "bottom">;
  lineCount?: number | number[];
  lineDistance?: number | number[];
  bendRadius?: number;
  bendStrength?: number;
  interactive?: boolean;
  parallax?: boolean;
}

export interface LanyardConfig {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export interface FloatingToggleConfig {
  sectionId?: string;
  threshold?: number;
  defaultChecked?: boolean;
  position?: {
    bottom?: string;
    right?: string;
  };
}

