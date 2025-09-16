"use client";

import { MonthKey, monthlyData } from "@/_mock/monthlyData";
import { useMonth } from "@/store/useMonth";
import { LineChart } from "@mui/x-charts";
import React from "react";

const data = [
  { name: "10k", uv: 4000, pv: 2400 },
  { name: "20k", uv: 3000, pv: 1398 },
  { name: "30k", uv: 2000, pv: 9800 },
  { name: "40k", uv: 2780, pv: 3908 },
  { name: "50k", uv: 1890, pv: 4800 },
  { name: "60k", uv: 2390, pv: 3800 },
];

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
          color: "rgba(255, 143, 109, 0.8)",
          area: true,
        },
        {
          data: profitData,
          label: "Profit",
          color: "rgba(219, 165, 255, 1)",
          area: true,
        },
      ]}
      height={300}
    />
  );
};

export default AppLineChart;
