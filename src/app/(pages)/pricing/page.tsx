"use client";
import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PricingCard from "@/components/pricing/PricingCard";
import Line from "@/components/ui/app-line";
import { pricingPlans } from "@/lib/_mock/pricingPlan";
import { formatPrice } from "@/lib/helpers/formatPrice";
import { Feature, PricingPlan } from "@/lib/types/types";
import { theme } from "@/theme/theme";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

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
