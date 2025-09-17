import { create } from "zustand";

type DeviceType = "mobile" | "desktop";
export type OpenType = {
  mobileOpen: boolean;
  desktopOpen: boolean;
};

interface SidebarState {
  open: OpenType;
  handleOpen: (device: DeviceType) => void;
}

export const useSidebar = create<SidebarState>()((set) => ({
  open: {
    desktopOpen: true,
    mobileOpen: false,
  },
  handleOpen: (device) =>
    set((state) => {
      switch (device) {
        case "mobile":
          return {
            open: {
              ...state.open,
              mobileOpen: !state.open.mobileOpen,
            },
          };
        case "desktop":
          return {
            open: {
              ...state.open,
              desktopOpen: !state.open.desktopOpen,
            },
          };
        default:
          return state;
      }
    }),
}));
