"use client";
import { LABEL_STYLES } from "@/lib/constants/statusStyles";
import { Email } from "@/lib/types/types";
import {
  TableRow,
  TableCell,
  Typography,
  Table,
  TableBody,
  Box,
  Checkbox,
  IconButton,
} from "@mui/material";
import CustomOrderStatusButton from "../order-list/CustomOrderStatusButton";
import { StarOutline } from "@mui/icons-material";
import { useState } from "react";

interface Props {
  emails: Email[];
}

export default function EmailItem({ emails }: Props) {
  const [selectedItemId, setSelectedItemId] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedItemId((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <Table>
      <TableBody>
        {emails.map((email) => (
          <TableRow
            key={email.id}
            selected={selectedItemId.includes(email.id)}
            sx={{
              transition: "background-color 0.3s ease",
              borderBottom: "1px solid #E0E0E0",
              "&.Mui-selected": {
                backgroundColor: "rgba(72, 128, 255, 0.0617)",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "rgba(72, 128, 255, 0.0617)",
              },
              "&:hover": {
                backgroundColor: selectedItemId.includes(email.id)
                  ? "rgba(72, 128, 255, 0.0617)"
                  : "#F5F5F5",
              },
            }}
          >
            <TableCell
              sx={{
                backgroundColor: "inherit",
                padding: "22px 20px !important",
              }}
            >
              <Box>
                <Checkbox
                  value={selectedItemId.includes(email.id)}
                  onChange={() => toggleSelect(email.id)}
                />
                <IconButton>
                  <StarOutline />
                </IconButton>
              </Box>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "inherit",
                padding: "22px 20px !important",
              }}
            >
              <Typography variant="h6" fontWeight={700} color="primary">
                {email.sender}
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "inherit",
                padding: "22px 20px !important",
              }}
            >
              <CustomOrderStatusButton
                status={email.label}
                style={LABEL_STYLES[email.label]}
              />
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "inherit",
                padding: "22px 20px !important",
              }}
            >
              <Typography component={"span"} variant="h6" color="primary">
                {email.subject}
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "inherit",
                padding: "22px 20px !important",
              }}
            >
              <Typography
                component={"span"}
                variant="h6"
                color="rgba(32, 34, 36, 0.7)"
              >
                {email.time}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
