import { Stack } from "@mui/material";
import React from "react";

const CustomOrderStack = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{ borderLeft: "1px solid #D5D5D5", height: "100%" }}
      alignItems="center"
      justifyContent={"center"}
      padding={"0px 24px"}
    >
      {children}
    </Stack>
  );
};

export default CustomOrderStack;
