import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProductCard from "@/components/product-card/ProductCard";
import SalesAnalytics from "@/components/sales-analytics-chart/SalesAnalytics";
import CustomersDonut from "@/components/ui/app-customer-donut-chart";
import AppLineChart from "@/components/ui/app-line-chart";
import CustomSelect from "@/components/ui/app-select";
import { Box, Card, CardHeader, Grid, Typography } from "@mui/material";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Dashboard" key={"dashboard"} />
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

      <Grid
        container
        spacing={{
          xs: 5,
          md: 10,
          lg: 15,
          xl: 35,
        }}
      >
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card
            sx={{
              maxWidth: {
                xs: "100%",
                md: "360px",
              },
              width: "100%",
              maxHeight: "365px",
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
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card
            sx={{
              maxWidth: {
                xs: "100%",
                md: "360px",
              },
              width: "100%",
              maxHeight: "365px",
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
                    Featured Product
                  </Typography>
                </Box>
              }
            />
            <ProductCard />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Card
            sx={{
              maxWidth: {
                xs: "100%",
                md: "360px",
              },
              width: "100%",
              maxHeight: "365px",
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
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default DashboardPage;
