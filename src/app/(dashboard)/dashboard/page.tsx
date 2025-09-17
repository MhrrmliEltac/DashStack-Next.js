import CustomerCard from "@/components/dashboard/CustomerCard";
import FeaturedProductCard from "@/components/dashboard/FeaturedProductCard";
import RevenueCard from "@/components/dashboard/RevenueCard";
import SalesAnalyticsCard from "@/components/dashboard/SalesAnalyticsCard";
import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Grid } from "@mui/material";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Dashboard" key={"dashboard"} />
      <RevenueCard />

      <Grid
        container
        spacing={{
          xs: 5,
          md: 3,
          lg: 10,
        }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <CustomerCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <FeaturedProductCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SalesAnalyticsCard />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default DashboardPage;
