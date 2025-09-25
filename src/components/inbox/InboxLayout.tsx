"use client";

import EmailList from "./EmailList";
import { Box, useMediaQuery } from "@mui/material";
import { Email } from "@/lib/types/types";
import AppPagination from "../ui/app-pagination";
import { theme } from "@/theme/theme";
import Sidebar from "./InboxSidebar";

interface Props {
  emails: Email[];
}

export default function InboxLayout({ emails }: Props) {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Sidebar />
        <EmailList emails={emails} />
      </Box>

      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box sx={{ maxWidth: isDesktop ? "320px" : "64px", width: "100%" }} />
        <AppPagination />
      </Box>
    </Box>
  );
}
