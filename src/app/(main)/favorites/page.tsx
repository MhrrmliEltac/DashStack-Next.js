import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProductCard from "@/components/product-card/ProductCard";
import { products } from "@/lib/_mock/products";
import { ProductCardProps } from "@/lib/types/types";
import { Grid } from "@mui/material";
import React from "react";

const FavoritePage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Favorites" />

      <Grid container spacing={3}>
        {products &&
          products.map((product: ProductCardProps) => (
            <Grid key={product.id} size={{ xs: 12, md: 6, xl: 4 }}>
              <ProductCard
                id={product.id}
                image={product.image}
                price={product.price}
                productName={product.productName}
                rating={product.rating}
                ratingCount={product.ratingCount}
              />{" "}
            </Grid>
          ))}
      </Grid>
    </DashboardLayout>
  );
};

export default FavoritePage;
