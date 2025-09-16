import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AppLineChart from "@/components/ui/app-line-chart";
import CustomSelect from "@/components/ui/app-select";
import { Box, Card, CardHeader, Typography } from "@mui/material";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Dashboard" key={"dashboard"} />
      <Card>
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
    </DashboardLayout>
  );
};

export default DashboardPage;
