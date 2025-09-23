"use client";
import { invoiceInfo } from "@/lib/_mock/invoiceInfo";
import { InvoiceInfoType } from "@/lib/types/types";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const InvoiceInfo = () => {
  return (
    <Grid container sx={{ maxWidth: "829px", mx: "auto", mb: "58px" }}>
      {invoiceInfo.map((invoice: InvoiceInfoType) => (
        <Grid size={{ xs: 12 }} key={invoice.id} mt={"40px"}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Stack alignItems={"center"}>
              <Typography component={"span"} variant="h6">
                Invoice From:
              </Typography>
              <Typography component={"span"} variant="h6" fontWeight={700}>
                {invoice.invoiceFrom}
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <Typography component={"span"} variant="h6">
                Invoice To:
              </Typography>
              <Typography component={"span"} variant="h6" fontWeight={700}>
                {invoice.invoiceTo}
              </Typography>
            </Stack>
            <Stack width={"100%"} maxWidth={"200px"}>
              <Stack flexDirection={"row"} maxWidth={"200px"}>
                <Typography component={"span"} variant="h6">
                  Invoice Date:
                </Typography>
                <Typography component={"span"} variant="h6">
                  {invoice.invoiceDate}
                </Typography>
              </Stack>
              <Stack flexDirection={"row"} maxWidth={"200px"}>
                <Typography component={"span"} variant="h6">
                  Due Date:
                </Typography>
                <Typography component={"span"} variant="h6">
                  {invoice.dueDate}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default InvoiceInfo;
