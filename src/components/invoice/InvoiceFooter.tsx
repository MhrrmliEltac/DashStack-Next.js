"use client";
import { Print, Telegram } from "@mui/icons-material";
import { Box, IconButton, Button, Typography } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";

const InvoiceFooter = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleSend = () => {
    toast.success("File send successfully");
  };

  return (
    <Box
      sx={{
        mt: "60px",
        display: "flex",
        justifyContent: "end",
        gap: "16px",
      }}
    >
      <IconButton
        disableTouchRipple
        sx={{
          backgroundColor: "#FAFBFD",
          border: "1px solid #D5D5D5",
          borderRadius: "12px",
          height: "54px",
          px: "16px",
        }}
        onClick={handlePrint}
      >
        <Print htmlColor="primary" />
      </IconButton>
      <Button
        disableTouchRipple
        variant="contained"
        color="secondary"
        sx={{ height: "54px", display: "flex", gap: "16px" }}
        onClick={handleSend}
      >
        <Typography component={"span"} variant="h6">
          Send
        </Typography>
        <Box
          sx={{
            height: "38px",
            backgroundColor: "#6E9AFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            py: "12px",
            px: "16px",
          }}
        >
          <Telegram fontSize="small" />
        </Box>
      </Button>
    </Box>
  );
};

export default InvoiceFooter;
