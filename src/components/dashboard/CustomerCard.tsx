import { Card, CardHeader, Box, Typography } from "@mui/material";
import CustomersDonut from "../ui/app-customer-donut-chart";

const CustomerCard = () => {
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
              Customers
            </Typography>
          </Box>
        }
      />
      <CustomersDonut />
    </Card>
  );
};

export default CustomerCard;
