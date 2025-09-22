"use client";
import React from "react";
import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PricingCard from "@/components/pricing/PricingCard";
import { pricingPlans } from "@/lib/_mock/pricingPlan";
import { PricingPlan } from "@/lib/types/types";
import { Box } from "@mui/material";

const PricingPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Pricing" />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          mb: 4,
        }}
      >
        {pricingPlans.map((plan: PricingPlan) => (
          <PricingCard plan={plan} key={plan.name} />
        ))}
      </Box>
    </DashboardLayout>
  );
};

export default PricingPage;
