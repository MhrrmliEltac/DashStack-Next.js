"use client";
import { Inbox, Warning, Delete } from "@mui/icons-material";
import { Stack, IconButton } from "@mui/material";
import React from "react";
import SearchInput from "../product-stock/SearchInput";

const EmailHeader = () => {
  return (
    <Stack
      flexDirection={{
        xs: "column",
        sm: "row",
      }}
      justifyContent="space-between"
      p="24px"
      mb={"8px"}
      width={"100%"}
      maxWidth={"100%"}
      gap={"10px"}
    >
      <SearchInput value="" placeholder="Search mail" onChange={() => {}} />
      <Stack
        flexDirection="row"
        borderRadius={"12px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ backgroundColor: "#FAFBFD", border: "1px solid #D5D5D5" }}
      >
        <IconButton
          disableTouchRipple
          aria-label="Inbox"
          sx={{
            borderRight: "1px solid #D5D5D5",
            borderRadius: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: "14px",
          }}
        >
          <Inbox fontSize="small" />
        </IconButton>
        <IconButton
          disableTouchRipple
          aria-label="Spam"
          sx={{
            borderRight: "1px solid #D5D5D5",
            borderRadius: "0px",
            display: "flex",
            alignItems: "center",
            px: "14px",
          }}
        >
          <Warning fontSize="small" />
        </IconButton>
        <IconButton
          disableTouchRipple
          aria-label="Delete"
          sx={{
            borderRadius: "0px",
            display: "flex",
            alignItems: "center",
            px: "14px",
          }}
        >
          <Delete fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default EmailHeader;
