import { create } from "zustand";
import { TABLE_BODY } from "@/lib/_mock/tableData";
import { OrdersType, Status } from "@/lib/types/types";

interface FilterState {
  orders: OrdersType[];
  originalOrders: OrdersType[];
  selectedTypes: Set<string>;
  setSelectedTypes: (type: Set<string>) => void;
  handleOrder: (status?: Set<Status | string>) => void;
  resetFilter: () => void;
}

export const useFilter = create<FilterState>()((set, get) => ({
  orders: [...TABLE_BODY],
  originalOrders: [...TABLE_BODY],
  selectedTypes: new Set(),

  setSelectedTypes(type: Set<string>) {
    set({ selectedTypes: type });
  },

  handleOrder(status) {
    const base = get().originalOrders;
    const type = get().selectedTypes;

    const typeFiltered = type.size
      ? base.filter((order) => type.has(order.type))
      : base;

    const finalFiltered = status?.size
      ? typeFiltered.filter((order) => status.has(order.status))
      : typeFiltered;

    set({ orders: finalFiltered });
  },

  resetFilter: () => set((state) => ({ orders: state.originalOrders })),
}));
