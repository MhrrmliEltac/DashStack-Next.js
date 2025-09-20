import { STATUS_STYLES } from "@/lib/constants/statusStyles";
import { Status } from "@/lib/types/types";
import { Chip, TypographyProps } from "@mui/material";
import React, { FC } from "react";

interface ButtonProps {
  bgColor?: string;
  status: Status;
  color?: TypographyProps["color"];
}

const CustomOrderStatusButton: FC<ButtonProps> = ({ status }) => {
  const style = STATUS_STYLES[status];

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
