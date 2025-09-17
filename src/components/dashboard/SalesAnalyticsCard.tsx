import { Card, CardHeader, Box, Typography } from "@mui/material";
import SalesAnalytics from "../sales-analytics-chart/SalesAnalytics";

const SalesAnalyticsCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        width: "100%",
        height: "365px",
        p: "24px !important",
      }}
    >
      <CardHeader
        sx={{ p: 0 }}
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="primary">
              Sales Analytics
            </Typography>
          </Box>
        }
      />
      <Box sx={{ width: "100%" }}>
        <SalesAnalytics />
      </Box>
    </Card>
  );
};

export default SalesAnalyticsCard;
