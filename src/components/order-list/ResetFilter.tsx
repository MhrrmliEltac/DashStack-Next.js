import React from "react";
import CustomOrderStack from "./CustomOrderStack";
import CustomOrderButton from "./CustomOrderButton";

const ResetFilter = () => {
  return (
    <CustomOrderStack>
      <CustomOrderButton title="Reset Filter" color="#EA0234" startIcon />
    </CustomOrderStack>
  );
};

export default ResetFilter;
