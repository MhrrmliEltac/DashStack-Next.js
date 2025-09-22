import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ContactPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Contact" btnTitle="Add New Contact" showBtn />
    </DashboardLayout>
  );
};

export default ContactPage;
