import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Stack, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClientDatePicker from "@/components/order-list/DatePicker";
import OrderType from "@/components/order-list/OrderType";
import OrderStatus from "@/components/order-list/OrderStatus";

const OrderListPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Order Lists" />

      <Stack
        sx={{
          backgroundColor: "#F9F9FB",
        }}
        flexDirection={"row"}
        border={"1px solid #D5D5D5"}
        borderRadius={"10px"}
        maxWidth={"818px"}
        height={"70px"}
        width={"100%"}
        alignItems={"center"}
      >
        <Stack
          sx={{ borderRight: "1px solid #D5D5D5", height: "100%" }}
          alignItems="center"
          justifyContent={"center"}
          padding={"0px 24px"}
        >
          <FilterListIcon />
        </Stack>
        <Stack
          sx={{ borderRight: "1px solid #D5D5D5", height: "100%" }}
          alignItems="center"
          justifyContent={"center"}
          padding={"0px 24px"}
        >
          <Typography variant="body1" fontWeight={700}>
            Filter By
          </Typography>
        </Stack>

        {/* Date picker */}
        <ClientDatePicker />

        {/* Order type */}
        <OrderType />

        {/* Order status */}
        <OrderStatus />
      </Stack>
    </DashboardLayout>
  );
};

export default OrderListPage;
