import { MonthKey } from "@/lib/_mock/monthlyData";
import { create } from "zustand";

interface MonthState {
  month: MonthKey;
  handleChangeMonth: (month: MonthKey) => void;
}

export const useMonth = create<MonthState>()((set) => ({
  month: "October",
  handleChangeMonth(month) {
    set(() => ({ month: month }));
  },
}));
