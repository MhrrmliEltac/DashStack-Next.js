"use client";

import React, { useState } from "react";
import CustomOrderStack from "./CustomOrderStack";
import CustomOrderButton from "./CustomOrderButton";
import { useAnchor } from "../hooks/useAnchor";
import { Status } from "@/lib/types/types";
import { useFilter } from "@/store/useFilter";
import TypeStatusPoppper from "./TypeStatusPopover";

const orderStatusElement: Status[] = [
  Status.Completed,
  Status.Processing,
  Status.Rejected,
  Status.OnHold,
  Status.InTransit,
];

const OrderStatus = () => {
  const { open, anchorEl, handleOpen, handleClose } = useAnchor();

  // zustand state
  const filterState = useFilter();

  const [selectedStatus, setSelectedStatus] = useState<Set<Status | string>>(
    new Set()
  );

  const handleOrderStatus = (orderType: Status | string) => {
    const updated = new Set(selectedStatus);
    if (updated.has(orderType)) {
      updated.delete(orderType);
    } else {
      updated.add(orderType);
    }
    setSelectedStatus(updated);
  };

  const handleSubmit = () => {
    filterState.handleOrder(selectedStatus);
    handleClose();
  };

  return (
    <CustomOrderStack>
      <CustomOrderButton
        onOpen={handleOpen}
        open={open}
        title="Order Status"
        endIcon
        color="primary"
      />

      {/* Order status popover */}
      <TypeStatusPoppper
        anchorEl={anchorEl}
        open={open}
        orderElement={orderStatusElement}
        selected={selectedStatus}
        handleOrder={handleOrderStatus}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </CustomOrderStack>
  );
};

export default OrderStatus;
