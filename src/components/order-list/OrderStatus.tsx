"use client";

import React from "react";
import CustomOrderStack from "./CustomOrderStack";
import CustomOrderButton from "./CustomOrderButton";
import { useAnchor } from "../hooks/useAnchor";

const OrderStatus = () => {
  const { open, handleOpen } = useAnchor();

  return (
    <CustomOrderStack>
      <CustomOrderButton
        onOpen={handleOpen}
        open={open}
        title="Order Status"
        endIcon
        color="primary"
      />
    </CustomOrderStack>
  );
};

export default OrderStatus;
