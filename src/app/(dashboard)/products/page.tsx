import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Slider from "@/components/products-page/Slider";
import React from "react";

const ProductPage = () => {
  return (
    <DashboardLayout key="product">
      <TitleHeader title="Products" />

      {/* Banner slider */}
      <Slider />

    </DashboardLayout>
  );
};

export default ProductPage;
