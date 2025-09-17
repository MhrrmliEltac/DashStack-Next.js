import { Container } from "@mui/material";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container sx={{ mb: "30px" }}>{children}</Container>;
};

export default DashboardLayout;
