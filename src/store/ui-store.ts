import { create } from "zustand";

type UiState = {
  isMobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;
};

/** Ephemeral UI state — not for server data. */
export const useUiStore = create<UiState>((set, get) => ({
  isMobileNavOpen: false,
  openMobileNav: () => set({ isMobileNavOpen: true }),
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  toggleMobileNav: () => set({ isMobileNavOpen: !get().isMobileNavOpen }),
}));
