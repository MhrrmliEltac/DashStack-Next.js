"use client";

import React from "react";
import CustomOrderStack from "./CustomOrderStack";
import CustomOrderButton from "./CustomOrderButton";
import { useFilter } from "@/store/useFilter";

const ResetFilter = () => {
  const filterState = useFilter();

  return (
    <CustomOrderStack>
      <CustomOrderButton
        title="Reset Filter"
        color="#EA0234"
        startIcon
        onOpen={filterState.resetFilter}
      />
    </CustomOrderStack>
  );
};

export default ResetFilter;
