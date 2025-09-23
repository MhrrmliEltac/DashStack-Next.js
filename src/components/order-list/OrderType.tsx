"use client";

import React, { useState } from "react";
import CustomOrderStack from "./CustomOrderStack";
import CustomOrderButton from "./CustomOrderButton";
import { useAnchor } from "../hooks/useAnchor";
import { useFilter } from "@/store/useFilter";
import TypeStatusPoppper from "./TypeStatusPopover";

const orderTypeElement: string[] = [
  "Health & Medicine",
  "Book & Stationary",
  "Services & Industry",
  "Fashion & Beauty",
  "Home & Living",
  "Mobile & Phone",
  "Accessories",
  "Electric",
  "Water",
  "Gas",
  "Internet",
];

const OrderType = () => {
  const { open, anchorEl, handleOpen, handleClose } = useAnchor();

  // zustand state
  const filterState = useFilter();

  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

  const handleOrderType = (orderType: string) => {
    const updated = new Set(selectedTypes);
    if (updated.has(orderType)) {
      updated.delete(orderType);
    } else {
      updated.add(orderType);
    }
    setSelectedTypes(updated);
  };

  const handleSubmit = () => {
    filterState.setSelectedTypes(selectedTypes);
    filterState.handleOrder();
    handleClose();
  };

  return (
    <CustomOrderStack>
      <CustomOrderButton
        onOpen={handleOpen}
        open={open}
        title="Order Type"
        endIcon
        color="primary"
      />

      {/* Order type popover */}
      <TypeStatusPoppper
        anchorEl={anchorEl}
        open={open}
        orderElement={orderTypeElement}
        selected={selectedTypes}
        handleClose={handleClose}
        handleOrder={handleOrderType}
        handleSubmit={handleSubmit}
      />
    </CustomOrderStack>
  );
};

export default OrderType;
