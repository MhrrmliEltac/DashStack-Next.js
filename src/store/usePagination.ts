import { create } from "zustand";

interface PaginationState {
  prevPage: number;
  nextPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export const usePagination = create<PaginationState>((set) => ({
  prevPage: 0,
  nextPage: 10,
  totalPages: 12,

  handleNextPage() {
    set((state: PaginationState) => ({
      prevPage: state.prevPage + 10,
      nextPage: state.nextPage + 10,
    }));
  },
  handlePrevPage() {
    set((state: PaginationState) => ({
      prevPage: state.prevPage === 0 ? state.prevPage : state.prevPage - 10,
      nextPage: state.prevPage === 0 ? state.nextPage : state.nextPage - 10,
    }));
  },
}));
