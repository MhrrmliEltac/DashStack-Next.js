"use client";

import React from "react";
import CustomOrderStack from "./CustomOrderStack";
import CustomOrderButton from "./CustomOrderButton";
import { useAnchor } from "../hooks/useAnchor";

const OrderType = () => {
  const { open, anchorEl, handleOpen, handleClose } = useAnchor();

  return (
    <CustomOrderStack>
      <CustomOrderButton
        onOpen={handleOpen}
        open={open}
        title="Order Type"
        endIcon
        color="primary"
      />
    </CustomOrderStack>
  );
};

export default OrderType;
