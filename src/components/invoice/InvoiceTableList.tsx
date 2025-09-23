"use client";
import { invoiceDetail } from "@/lib/_mock/invoiceDetail";
import { formatPrice } from "@/lib/helpers/formatPrice";
import { InvoiceDetailType } from "@/lib/types/types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Typography,
  TableBody,
  TableCell,
  TableFooter,
  styled,
} from "@mui/material";
import React from "react";

const HeadCell = styled(TableCell)(() => ({
  backgroundColor: "#F1F4F9",
  fontWeight: 600,
}));

const TABLE_HEAD = [
  "Serial No.",
  "Description",
  "Quantity",
  "Base Cost",
  "Total Cost",
];

const InvoiceTableList = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead
          sx={{ mx: "auto", borderRadius: "20px", borderBottom: "none" }}
        >
          <TableRow>
            {TABLE_HEAD.map((head: string, index: number) => (
              <HeadCell
                align="center"
                key={index}
                sx={{
                  borderTopLeftRadius: index === 0 ? "8px" : 0,
                  borderTopRightRadius:
                    index === TABLE_HEAD.length - 1 ? "8px" : 0,
                  borderBottomLeftRadius: index === 0 ? "8px" : 0,
                  borderBottomRightRadius:
                    index === TABLE_HEAD.length - 1 ? "8px" : 0,
                }}
              >
                <Typography
                  component={"span"}
                  variant="h6"
                  textTransform={"none"}
                >
                  {head}
                </Typography>
              </HeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ mx: "auto" }}>
          {invoiceDetail.map((detail: InvoiceDetailType) => (
            <TableRow
              key={detail.id}
              sx={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}
            >
              <TableCell align="center">
                <Typography component={"span"}>{detail.id}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography component={"span"}>{detail.description}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography component={"span"}>{detail.quantity}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography component={"span"}>
                  {formatPrice(detail.price)}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography component={"span"}>
                  {formatPrice(detail.totalCost)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={TABLE_HEAD.length}
              align="right"
              sx={{ borderBottom: "none" }}
            >
              <Typography
                component={"span"}
                variant="h6"
                color="primary"
                fontWeight={800}
              >
                Total =
                <Typography
                  component={"span"}
                  sx={{ pl: "5px" }}
                  variant="h6"
                  color="primary"
                  fontWeight={800}
                >
                  {formatPrice(
                    invoiceDetail.reduce((acc, item) => acc + item.totalCost, 0)
                  )}
                </Typography>
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default InvoiceTableList;
