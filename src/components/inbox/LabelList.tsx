"use client";
import { Box, List, ListItemButton, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { LabelType } from "./sidebar";

interface Props {
  labels: LabelType[];
  selectedLabelId: number | null;
  onSelectLabel: (id: number) => void;
  isCompact?: boolean; // yeni prop
}

export default function LabelList({
  labels,
  selectedLabelId,
  onSelectLabel,
  isCompact,
}: Props) {
  return (
    <List
      sx={{ p: 0, m: 0, display: "flex", flexDirection: "column", gap: "5px" }}
    >
      {labels.map(({ id, title, color }) => {
        const isSelected = id === selectedLabelId;

        return (
          <ListItemButton
            key={id}
            onClick={() => onSelectLabel(id)}
            sx={{
              gap: isCompact ? 0 : "10px",
              py: "12px",
              px: isCompact ? "8px" : "17px",
              m: 0,
              borderRadius: "4px",
              backgroundColor: isSelected ? "rgba(72, 128, 255, 0.13)" : "",
              "&:hover": {
                backgroundColor: "rgba(72, 128, 255, 0.13)",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: isCompact ? "center" : "flex-start",
              transition: "all 0.3s ease",
            }}
          >
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: "4px",
                border: `2px solid ${color}`,
                backgroundColor: isSelected ? color : "transparent",
              }}
            />
            {!isCompact && (
              <Typography variant="body1" color="primary">
                {title}
              </Typography>
            )}
          </ListItemButton>
        );
      })}

      {!isCompact && (
        <ListItemButton sx={{ gap: "10px", alignItems: "center" }}>
          <Add />
          <Typography variant="body1" color="primary">
            Create New Label
          </Typography>
        </ListItemButton>
      )}
    </List>
  );
}
