"use client";
import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SearchInput from "@/components/product-stock/SearchInput";
import StockTableList from "@/components/product-stock/StockTableList";
import { Box } from "@mui/material";

const ProductStockPage = () => {
  return (
    <DashboardLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleHeader title="Product Stock" />
        <SearchInput />
      </Box>

      {/* Product stock table */}
      <StockTableList />
    </DashboardLayout>
  );
};

export default ProductStockPage;
