import { OpenType } from "@/store/useSidebar";
import { Box } from "@mui/material";
import React from "react";

interface SidebarContainerProps {
  isOpen: OpenType;
  children: React.ReactNode;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({
  children,
  isOpen,
}) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        height: "var(--app-height)",
        width: {
          xs: isOpen.mobileOpen ? "240px" : "0px",
          md: isOpen.desktopOpen ? "240px" : "0px",
        },
        minWidth: {
          xs: isOpen.mobileOpen ? "240px" : "0px",
          md: isOpen.desktopOpen ? "240px" : "0px",
        },
        maxWidth: {
          xs: isOpen.mobileOpen ? "240px" : "0px",
          md: isOpen.desktopOpen ? "240px" : "0px",
        },
        background: "#FFFFFF",
        zIndex: 1200,
        transition: "all 0.1s ease",
        overflowY: "scroll",
        overflowX: "hidden",
        visibility: {
          xs: isOpen.mobileOpen ? "visible" : "hidden",
          md: isOpen.desktopOpen ? "visible" : "hidden",
        },
        transform: {
          xs: isOpen.mobileOpen ? "translateX(0)" : "translateX(-100%)",
          md: isOpen.desktopOpen ? "translateX(0)" : "translateX(-100%)",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SidebarContainer;
