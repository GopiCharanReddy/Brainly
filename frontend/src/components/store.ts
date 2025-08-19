import { create } from "zustand";

type ShareState = {
  shareUrl: string;
  setShareUrl: (url: string) => void;
};

type FilterState = {
  filterContent: string | null;
  setFilterContent: (type: string) => void;
};

export const useStore = create<ShareState>()((set) => ({
  shareUrl: "",
  setShareUrl: (url: string) => set({ shareUrl: url }),
}));

export const useFilter = create<FilterState>()((set) => ({
  filterContent: null,
  setFilterContent: (type: string) => set({ filterContent: type }),
}));