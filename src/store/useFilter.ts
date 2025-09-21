import { create } from "zustand";
import { TABLE_BODY } from "@/lib/_mock/tableData";
import { OrdersType, Status } from "@/lib/types/types";
import { Dayjs } from "dayjs";
import { PickerValue } from "@mui/x-date-pickers/internals";

interface FilterState {
  orders: OrdersType[];
  originalOrders: OrdersType[];
  selectedTypes: Set<string>;
  selectedDate: Dayjs | null;
  setSelectedDate: (newValue: PickerValue) => void;
  setSelectedTypes: (type: Set<string>) => void;
  handleOrder: (status?: Set<Status | string>) => void;
  handleOrderDateFilter: (date: string | null) => void;
  resetFilter: () => void;
}

export const useFilter = create<FilterState>()((set, get) => ({
  orders: [...TABLE_BODY],
  originalOrders: [...TABLE_BODY],
  selectedTypes: new Set(),
  selectedDate: null,

  setSelectedTypes(type: Set<string>) {
    set({ selectedTypes: type });
  },

  setSelectedDate(newValue) {
    set({ selectedDate: newValue });
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

    set({ orders: finalFiltered, selectedDate: null });
  },

  handleOrderDateFilter: (date: string | null) => {
    const base = get().originalOrders;

    const filtered = date
      ? base.filter((order: OrdersType) => order.date === date)
      : base;
    set({ orders: filtered });
  },

  resetFilter: () =>
    set((state) => ({ orders: state.originalOrders, selectedDate: null })),
}));
