"use client"
import { Drawer, Box } from "@mui/material";
import { OpenType, useSidebar } from "@/store/useSidebar";
import React from "react";

interface SidebarContainerProps {
  isOpen: OpenType;
  children: React.ReactNode;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ children, isOpen }) => {

  const closeMobileSidebar = useSidebar((state) => state.closeMobileSidebar)

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={isOpen.mobileOpen}
        variant="temporary"
        onClose={closeMobileSidebar}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        {children}
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "sticky",
          top: 0,
          left: 0,
          height: "var(--app-height)",
          width: isOpen.desktopOpen ? "240px" : "0px",
          minWidth: isOpen.desktopOpen ? "240px" : "0px",
          maxWidth: isOpen.desktopOpen ? "240px" : "0px",
          background: "#FFFFFF",
          zIndex: 1200,
          transition: "all 0.1s ease",
          overflowY: "scroll",
          overflowX: "hidden",
          visibility: isOpen.desktopOpen ? "visible" : "hidden",
          transform: isOpen.desktopOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default SidebarContainer;