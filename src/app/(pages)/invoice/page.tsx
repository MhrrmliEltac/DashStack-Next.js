import React from "react";
import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import InvoiceFooter from "@/components/invoice/InvoiceFooter";
import InvoiceInfo from "@/components/invoice/InvoiceInfo";
import InvoiceTableList from "@/components/invoice/InvoiceTableList";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@mui/material";

const InvoicePage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Invoice" />
      <Card>
        {/* Invoice from and to information */}
        <InvoiceInfo />

        {/* Invoice detail list */}
        <InvoiceTableList />

        {/* Invoice info and detail send and print button */}
        <InvoiceFooter />
      </Card>
    </DashboardLayout>
  );
};

export default InvoicePage;
