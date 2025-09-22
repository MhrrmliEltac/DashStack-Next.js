import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import OrderListTable from "@/components/order-list/OrderListTable";
import StockTableList from "@/components/product-stock/StockTableList";
import Line from "@/components/ui/app-line";
import React from "react";

const TablePage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Table" />

      <OrderListTable />

      <Line bgColor="#E0E0E0" height={"2px"} sx={{ my: "24px" }} />

      <StockTableList />
    </DashboardLayout>
  );
};

export default TablePage;
