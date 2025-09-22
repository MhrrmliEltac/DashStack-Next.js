import { products } from "@/lib/_mock/products";
import { ProductType } from "@/lib/types/types";
import { create } from "zustand";

interface StockState {
  query: string;
  stockData: ProductType[];
  originalStockData: ProductType[];
  setQuery: (query: string) => void;
  editItem: (id: ProductType["id"]) => void;
  deleteItem: (id: ProductType["id"]) => void;
}

export const useStock = create<StockState>((set, get) => ({
  stockData: [...products],
  originalStockData: [...products],
  query: "",
  setQuery: (query: string) => {
    const base = get().originalStockData;

    set({
      query,
      stockData: base.filter((item) =>
        item.productName.toLowerCase().includes(query.toLowerCase())
      ),
    });
  },

  editItem(id) {
    // added edit functionality here later
    console.log("edit item", id);
  },

  deleteItem: (id: string) => {
    const base = get().originalStockData;
    const newStock = base.filter((item) => item.id !== id);
    set({ originalStockData: newStock, stockData: newStock });
  },
}));
