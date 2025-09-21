"use client";
import { products } from "@/lib/_mock/products";
import { formatPrice } from "@/lib/helpers/formatPrice";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ProductCardProps } from "@/lib/types/types";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Box,
  Stack,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const ButtonElement = [
  {
    icon: EditSquareIcon,
    color: "#000000",
  },
  {
    icon: DeleteOutlineIcon,
    color: "#EF3826",
  },
];

const TABLE_HEAD = [
  "Image",
  "Product Name",
  "Category",
  "Price",
  "Available Color",
  "Action",
];

const StockTableList = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {TABLE_HEAD.map((head: string, index: number) => (
              <TableCell key={index}>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  sx={{ textTransform: "none" }}
                >
                  {head}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((product: ProductCardProps, index: number) => (
              <TableRow
                key={product.id}
                sx={{
                  opacity: 0,
                  animation: `fadeIn 0.4s ease forwards`,
                  animationDelay: `${index * 0.06}s`,
                  transition: "background-color 0.3s ease",
                  alignItems: "center",
                }}
              >
                <TableCell>
                  <Image
                    src={product.image}
                    alt={product.productName}
                    width={80}
                    height={60}
                  />
                </TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{formatPrice(product.price)}</TableCell>
                <TableCell>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    {product.availableColor?.map(
                      (color: string, index: number) => (
                        <Box
                          key={index}
                          sx={{
                            borderRadius: "50%",
                            backgroundColor: color,
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      )
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack
                    maxWidth={"96px"}
                    maxHeight={"32px"}
                    border={"1px solid #D5D5D5"}
                    flexDirection={"row"}
                    padding={"8px 16px"}
                    margin={"0px"}
                    borderRadius={"8px"}
                    justifyContent={"space-between"}
                    sx={{ backgroundColor: "#FAFBFD" }}
                  >
                    {ButtonElement.map((btn, index: number) => {
                      const Icon = btn.icon;

                      return (
                        <Button
                          disableElevation
                          disableFocusRipple
                          disableRipple
                          disableTouchRipple
                          key={index}
                          sx={{ p: 0, m: 0, minWidth: 0 }}
                        >
                          <Icon fontSize="small" htmlColor={btn.color} />
                        </Button>
                      );
                    })}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockTableList;
