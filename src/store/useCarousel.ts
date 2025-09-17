// store/useCarousel.ts
import { create } from "zustand";

interface CarouselState {
  currentIndex: number;
  total: number;
  setTotal: (count: number) => void;
  next: () => void;
  prev: () => void;
  setIndex: (index: number) => void;
}

export const useCarousel = create<CarouselState>((set, get) => ({
  currentIndex: 0,
  total: 0,
  setTotal: (count) => set({ total: count }),
  next: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
    })),
  prev: () =>
    set((state) => ({
      currentIndex:
        state.currentIndex === 0 ? state.total - 1 : state.currentIndex - 1,
    })),
  setIndex: (index) => set({ currentIndex: index }),
}));
