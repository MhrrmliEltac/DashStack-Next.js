import { Container } from "@mui/material";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default DashboardLayout;
