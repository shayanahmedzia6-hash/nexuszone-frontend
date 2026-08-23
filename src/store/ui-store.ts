import { create } from "zustand";



export type PendingScrollTarget = {

  path: string;

  sectionId: string;

};



type UiState = {

  isMobileNavOpen: boolean;

  pendingScroll: PendingScrollTarget | null;

  openMobileNav: () => void;

  closeMobileNav: () => void;

  toggleMobileNav: () => void;

  setPendingScroll: (target: PendingScrollTarget | null) => void;

};



/** Ephemeral UI state — not for server data. */

export const useUiStore = create<UiState>((set, get) => ({

  isMobileNavOpen: false,

  pendingScroll: null,

  openMobileNav: () => set({ isMobileNavOpen: true }),

  closeMobileNav: () => set({ isMobileNavOpen: false }),

  toggleMobileNav: () => set({ isMobileNavOpen: !get().isMobileNavOpen }),

  setPendingScroll: (target) => set({ pendingScroll: target }),

}));

