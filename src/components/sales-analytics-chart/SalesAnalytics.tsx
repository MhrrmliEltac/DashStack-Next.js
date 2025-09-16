"use client";

import { salesAnalyticsData } from "@/_mock/salesAnalyticsData";
import { LineChart } from "@mui/x-charts";

const SalesAnalytics = () => {
  const years = salesAnalyticsData.map((item) => item.year);
  const productAData = salesAnalyticsData.map((item) => item.productA);
  const productBData = salesAnalyticsData.map((item) => item.productB);

  return (
    <LineChart
      xAxis={[{ data: years, label: "Year" }]}
      series={[
        {
          data: productAData,
          label: "Product A",
          color: "#1976d2",
          showMark: true,
        },
        {
          data: productBData,
          label: "Product B",
          color: "#2e7d32",
          showMark: true,
        },
      ]}
      height={300}
    />
  );
};

export default SalesAnalytics;
