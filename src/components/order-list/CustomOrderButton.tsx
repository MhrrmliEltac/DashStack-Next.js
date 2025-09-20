import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import React from "react";

interface CustomButtonProps {
  onOpen?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  fullDate?: string;
  selectedDate?: Dayjs | null;
  open?: boolean;
  startIcon?: boolean;
  endIcon?: boolean;
  color?: string;
}

const CustomOrderButton: React.FC<CustomButtonProps> = ({
  onOpen,
  title,
  fullDate,
  selectedDate,
  open,
  endIcon,
  startIcon,
  color,
}) => {
  return (
    <Button
      onClick={onOpen}
      disableTouchRipple
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
      endIcon={
        <KeyboardArrowDown
          sx={{
            display: endIcon ? "block" : "none",
            marginLeft: "10px",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
          htmlColor={open ? "#979797" : color}
        />
      }
      startIcon={
        <KeyboardArrowDown
          sx={{
            display: startIcon ? "block" : "none",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            marginLeft: "10px",
          }}
          htmlColor={open ? "#979797" : color}
        />
      }
    >
      <Typography
        component={"span"}
        fontWeight={700}
        variant="body1"
        color={open ? "#979797" : color}
      >
        {selectedDate ? fullDate : title}
      </Typography>
    </Button>
  );
};

export default CustomOrderButton;
