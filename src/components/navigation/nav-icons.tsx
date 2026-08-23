import { createElement } from "react";
import {
  Award,
  BadgeCheck,
  BookMarked,
  BookOpen,
  Briefcase,
  Building,
  Building2,
  Calculator,
  CircleHelp,
  ClipboardList,
  FileCheck,
  FolderKanban,
  GitBranch,
  Globe,
  Globe2,
  Handshake,
  Headset,
  Home,
  IdCard,
  Info,
  Landmark,
  LayoutGrid,
  Lightbulb,
  type LucideIcon,
  Newspaper,
  Receipt,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  UserCircle,
  Users,
  Wallet,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "badge-check": BadgeCheck,
  "book-marked": BookMarked,
  "book-open": BookOpen,
  briefcase: Briefcase,
  building: Building,
  "building-2": Building2,
  calculator: Calculator,
  "circle-help": CircleHelp,
  "clipboard-list": ClipboardList,
  "file-check": FileCheck,
  "folder-kanban": FolderKanban,
  "git-branch": GitBranch,
  globe: Globe,
  "globe-2": Globe2,
  handshake: Handshake,
  headset: Headset,
  home: Home,
  "id-card": IdCard,
  info: Info,
  landmark: Landmark,
  "layout-grid": LayoutGrid,
  lightbulb: Lightbulb,
  newspaper: Newspaper,
  receipt: Receipt,
  scale: Scale,
  "search-check": SearchCheck,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  "user-circle": UserCircle,
  users: Users,
  wallet: Wallet,
};

export function getNavIcon(name?: string): LucideIcon | undefined {
  if (!name) return undefined;
  return iconMap[name];
}

type DynamicIconProps = {
  name?: string;
  className?: string;
  strokeWidth?: number;
};

/**
 * Renders a named icon from iconMap by reference (createElement) rather than
 * a dynamically-named JSX tag, so lookups don't read as "creating a
 * component during render".
 */
export function DynamicIcon({ name, className, strokeWidth }: DynamicIconProps) {
  const Icon = getNavIcon(name);
  if (!Icon) return null;
  return createElement(Icon, { className, strokeWidth, "aria-hidden": true });
}

type SocialIconProps = {
  className?: string;
};

export function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.15V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23h-4V8.5z" />
    </svg>
  );
}

export function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

export function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

export function getSocialIcon(name: string) {
  switch (name) {
    case "linkedin":
      return LinkedInIcon;
    case "facebook":
      return FacebookIcon;
    case "instagram":
      return InstagramIcon;
    case "youtube":
      return YouTubeIcon;
    default:
      return undefined;
  }
}
