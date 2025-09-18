"use client";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";
import Sidebar from "../ui/app-sidebar";
import Container from "../ui/app-container";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Container>{children}</Container>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default AppLayout;
