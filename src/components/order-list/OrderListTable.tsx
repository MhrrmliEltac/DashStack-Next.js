"use client";
import { TABLE_HEAD } from "@/lib/_mock/tableData";
import { OrdersType, Status } from "@/lib/types/types";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
} from "@mui/material";
import React from "react";
import CustomOrderStatusButton from "./CustomOrderStatusButton";
import { useFilter } from "@/store/useFilter";

const OrderListTable = () => {
  const filterState = useFilter();

  const renderStatusButton = (status: Status) => {
    return <CustomOrderStatusButton status={status} />;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {TABLE_HEAD.map((head: string, index: number) => (
              <TableCell key={index}>
                <Typography variant="body1" fontWeight={700}>
                  {head}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filterState.orders.map((body: OrdersType, index: number) => (
            <TableRow
              key={body.id}
              sx={{
                opacity: 0,
                animation: `fadeIn 0.4s ease forwards`,
                animationDelay: `${index * 0.06}s`,
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <TableCell>{body.id}</TableCell>
              <TableCell>{body.name}</TableCell>
              <TableCell>{body.address}</TableCell>
              <TableCell>{body.date}</TableCell>
              <TableCell>{body.type}</TableCell>
              <TableCell>{renderStatusButton(body.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderListTable;
