"use client";
import { Email } from "@/lib/types/types";
import { Paper, TableContainer, Box } from "@mui/material";
import EmailItem from "./EmailItem";
import EmailHeader from "./EmailHeader";

interface Props {
  emails: Email[];
}

export default function EmailList({ emails }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
        width: "80%",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <EmailHeader />

        <Box sx={{ flex: 1, overflow: "auto" }}>
          <EmailItem emails={emails} />
        </Box>
      </TableContainer>
    </Box>
  );
}
