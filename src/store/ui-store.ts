import { create } from "zustand";

type UiState = {
  isMobileNavOpen: boolean;
  pendingSectionId: string | null;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;
  setPendingSectionId: (sectionId: string | null) => void;
};

/** Ephemeral UI state — not for server data. */
export const useUiStore = create<UiState>((set, get) => ({
  isMobileNavOpen: false,
  pendingSectionId: null,
  openMobileNav: () => set({ isMobileNavOpen: true }),
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  toggleMobileNav: () => set({ isMobileNavOpen: !get().isMobileNavOpen }),
  setPendingSectionId: (sectionId) => set({ pendingSectionId: sectionId }),
}));
