"use client";

import { Box } from "@mui/material";
import React from "react";
import TitleHeader from "../dashboard-heading/TitleHeader";
import SearchInput from "./SearchInput";
import { useStock } from "@/store/useStock";

const StockHeader = () => {
  const stockStore = useStock();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    stockStore.setQuery(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TitleHeader title="Product Stock" />
      <SearchInput
        value={stockStore.query}
        placeholder="Search product name"
        onChange={handleChange}
      />
    </Box>
  );
};

export default StockHeader;
