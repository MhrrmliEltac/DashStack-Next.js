import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProductCard from "@/components/product-card/ProductCard";
import Slider from "@/components/products-page/Slider";
import { products } from "@/lib/_mock/products";
import { ProductCardProps } from "@/lib/types/types";
import { Grid } from "@mui/material";
import React from "react";

const ProductPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Products" />

      {/* Banner slider */}
      <Slider />

      {/* Products */}
      <Grid container spacing={10} mt="30px">
        {products &&
          products.slice(3, 6).map((product: ProductCardProps) => (
            <Grid key={product.id} size={{ xs: 12, md: 4 }}>
              <ProductCard
                id={product.id}
                image={product.image}
                price={product.price}
                productName={product.productName}
                rating={product.rating}
                ratingCount={product.ratingCount}
              />
            </Grid>
          ))}
      </Grid>
    </DashboardLayout>
  );
};

export default ProductPage;
