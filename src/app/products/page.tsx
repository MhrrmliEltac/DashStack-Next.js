import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LeftArrowButton from "@/components/ui/app-arrow-left-button";
import RightArrowButton from "@/components/ui/app-arrow-right-button";

const ProductPage = () => {
  return (
    <DashboardLayout key="product">
      <TitleHeader title="Products" />

      <Card
        sx={{
          height: "346px",
          width: "100%",
          backgroundColor: "#4880FF",
          backgroundImage: "url(/product-banner-pattern.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {/* Left arrow */}
        <LeftArrowButton />

        {/* Right arrow */}
        <RightArrowButton />

        <CardContent
          sx={{
            py: {
              lg: "50px",
            },
            pl: {
              lg: "130px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography variant="h6" color="#FFFFFF" lineHeight="30px">
              September 12-22
            </Typography>
            <Typography
              fontSize="37px"
              fontWeight={900}
              color="#FFFFFF"
              lineHeight="48px"
            >
              Enjoy free home <br /> delivery in this summer
            </Typography>
            <Typography variant="h6" color="#FFFFFF" lineHeight="30px">
              Designer Dresses - Pick from trendy Designer Dress.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default ProductPage;
