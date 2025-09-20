import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Stack, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ClientDatePicker from "@/components/order-list/DatePicker";
import OrderType from "@/components/order-list/OrderType";
import OrderStatus from "@/components/order-list/OrderStatus";
import ResetFilter from "@/components/order-list/ResetFilter";
import CustomOrderStack from "@/components/order-list/CustomOrderStack";
import OrderListTable from "@/components/order-list/OrderListTable";

const OrderListPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Order Lists" />

      {/* Order list header */}
      <Stack
        sx={{
          backgroundColor: "#F9F9FB",
        }}
        flexDirection={"row"}
        border={"1px solid #D5D5D5"}
        borderRadius={"10px"}
        maxWidth={"868px"}
        height={"70px"}
        width={"100%"}
        alignItems={"center"}
        mb={"24px"}
        overflow={"auto"}
      >
        {/* Filter icon */}
        <CustomOrderStack>
          <FilterListIcon />
        </CustomOrderStack>

        {/* Filter by */}
        <CustomOrderStack>
          <Typography variant="body1" fontWeight={700}>
            Filter By
          </Typography>
        </CustomOrderStack>

        {/* Date picker */}
        <ClientDatePicker />

        {/* Order type */}
        <OrderType />

        {/* Order status */}
        <OrderStatus />

        {/* Reset filter */}
        <ResetFilter />
      </Stack>

      {/* Order list body */}
      <OrderListTable />
    </DashboardLayout>
  );
};

export default OrderListPage;
