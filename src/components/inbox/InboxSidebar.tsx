"use client";
import {
  Button,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import FolderList from "./FolderList";
import LabelList from "./LabelList";
import { folders, labels } from "./sidebar";

export default function Sidebar() {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState<number>(1);
  const [selectedLabelId, setSelectedLabelId] = useState<number | null>(null);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Drawer
      open
      variant="persistent"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          width: isDesktop ? "320px" : "64px",
          maxHeight: "100%",
          position: "relative",
          boxSizing: "border-box",
          px: isDesktop ? "48px" : "8px",
          py: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: isDesktop ? "center" : "flex-start",
          borderRadius: "14px",
          transition: "width 0.3s ease",
          overflowX: "hidden",
        },
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        sx={{
          mb: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minWidth: "10px",
          p: 0,
        }}
      >
        <Add />
        {isDesktop && (
          <Typography component="span" sx={{ ml: 1 }}>
            Compose
          </Typography>
        )}
      </Button>

      <Stack sx={{ mb: "32px", width: "100%" }}>
        {isDesktop && (
          <Typography variant="h6" fontWeight={800} sx={{ mb: "16px" }}>
            My Email
          </Typography>
        )}
        <FolderList
          folders={folders}
          selectedId={selectedId}
          onSelect={setSelectedId}
          isCompact={!isDesktop} // FolderList içində icon-only göstərə bilərsən
        />
      </Stack>

      <Stack sx={{ mb: "32px", width: "100%" }}>
        {isDesktop && (
          <Typography variant="h6" fontWeight={800} sx={{ mb: "16px" }}>
            Labels
          </Typography>
        )}
        <LabelList
          labels={labels}
          selectedLabelId={selectedLabelId}
          onSelectLabel={setSelectedLabelId}
          isCompact={!isDesktop} // LabelList içində icon-only göstərə bilərsən
        />
      </Stack>
    </Drawer>
  );
}
