"use client";

import { MonthKey, monthlyData } from "@/lib/_mock/monthlyData";
import { useMonth } from "@/store/useMonth";
import { LineChart } from "@mui/x-charts";
import React from "react";

const AppLineChart = () => {
  const month: MonthKey = useMonth((state) => state.month);

  const xLabels = monthlyData[month].map((item) => item.name);
  const salesData: number[] = monthlyData[month].map((item) => item.sales);
  const profitData: number[] = monthlyData[month].map((item) => item.profit);

  return (
    <LineChart
      xAxis={[{ scaleType: "point", data: xLabels }]}
      series={[
        {
          data: salesData,
          label: "Sales",
          color: "rgba(255, 143, 109, 1)",
          area: true,
          showMark: false,
        },
        {
          data: profitData,
          label: "Profit",
          color: "rgba(219, 165, 255, 0.7)",
          area: true,
          showMark: false,
        },
      ]}
      height={300}
    />
  );
};

export default AppLineChart;
