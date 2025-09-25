"use client";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { FolderType } from "./sidebar";

interface Props {
  folders: FolderType[];
  selectedId: number;
  onSelect: (id: number) => void;
  isCompact?: boolean;
}

export default function FolderList({
  folders,
  selectedId,
  onSelect,
  isCompact,
}: Props) {
  return (
    <List
      sx={{ p: 0, m: 0, display: "flex", flexDirection: "column", gap: "5px" }}
    >
      {folders.map(({ id, icon: Icon, title, count }) => (
        <ListItem key={id} sx={{ p: 0, m: 0 }}>
          <ListItemButton
            onClick={() => onSelect(id)}
            sx={{
              py: "12px",
              px: isCompact ? "8px" : "17px",
              display: "flex",
              justifyContent: isCompact ? "center" : "space-between",
              alignItems: "center",
              backgroundColor:
                id === selectedId ? "rgba(72, 128, 255, 0.13)" : "",
              borderRadius: "4px",
              "&:hover": {
                background: "rgba(72, 128, 255, 0.13)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: isCompact ? 0 : "12px",
              }}
            >
              <Icon htmlColor={id === selectedId ? "secondary" : ""} />
              {!isCompact && (
                <Typography
                  variant="body1"
                  color={id === selectedId ? "secondary" : "primary"}
                >
                  {title}
                </Typography>
              )}
            </Box>
            {!isCompact && (
              <Typography
                variant="body1"
                fontWeight={700}
                color={
                  id === selectedId ? "secondary" : "rgba(32, 34, 36, 0.6)"
                }
              >
                {count}
              </Typography>
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
