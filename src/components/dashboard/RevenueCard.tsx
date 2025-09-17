import { Card, CardHeader, Box, Typography } from "@mui/material";
import AppLineChart from "../ui/app-line-chart";
import CustomSelect from "../ui/app-select";

const RevenueCard = () => {
  return (
    <Card sx={{ mb: "30px" }}>
      <CardHeader
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="primary">
              Revenue
            </Typography>
            <CustomSelect />
          </Box>
        }
      />
      <AppLineChart />
    </Card>
  );
};

export default RevenueCard;
