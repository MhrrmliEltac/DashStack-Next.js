import { STATUS_STYLES } from "@/lib/constants/statusStyles";
import { Status } from "@/lib/types/types";
import { Chip, TypographyProps } from "@mui/material";
import React, { FC } from "react";

interface Style {
  bgColor: string;
  color: string;
}
interface ButtonProps {
  status: string;
  style: Style;
}

const CustomOrderStatusButton: FC<ButtonProps> = ({ status, style }) => {
  return (
    <Chip
      sx={{
        backgroundColor: style.bgColor,
        color: style.color,
        borderRadius: "4.5px",
        width: "93px",
        height: "27px",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: style.bgColor,
        },
        cursor: "pointer",
      }}
      label={status}
    />
  );
};

export default CustomOrderStatusButton;
