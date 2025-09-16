"use client";

import { Box, Typography, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import NumberFlow from "@number-flow/react";

const newCustomers = 34249;
const repeatedCustomers = 1420;

export default function CustomersDonut() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Donut Chart */}
      <PieChart
        series={[
          {
            data: [
              {
                id: 0,
                value: newCustomers,
                color: "#1976d2",
              },
              {
                id: 1,
                value: repeatedCustomers,
                color: "#90caf9",
              },
            ],
            innerRadius: 60,
            outerRadius: 80,
          },
        ]}
        width={200}
        height={200}
      />

      {/* Statistik göstəricilər */}
      <Stack direction="row" spacing={4}>
        <Stack alignItems="center">
          <Typography variant="h2" color="primary">
            <NumberFlow value={newCustomers} />
          </Typography>
          <Typography variant="h6" color="textPrimary">
            New Customers
          </Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography variant="h2" color="primary">
            <NumberFlow value={repeatedCustomers} />
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Repeated
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
