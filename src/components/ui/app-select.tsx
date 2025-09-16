"use client";
import { FormControl, Select, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useMonth } from "@/store/useMonth";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CustomSelect = () => {
  const month = useMonth((state) => state.month);
  const handleChangeMonth = useMonth((state) => state.handleChangeMonth);

  return (
    <FormControl sx={{ minWidth: 150 }}>
      <Select
        value={month}
        onChange={(e) => handleChangeMonth(e.target.value)}
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          borderRadius: "8px",
          height: "40px",
          px: 2,
          bgcolor: "#FAFAFA",
          border: "1px solid #D0D0D0",
          color: "#A0A0A0",
          fontWeight: 600,
          fontSize: "14px",
          "& .MuiSelect-icon": {
            color: "#A0A0A0",
            right: "10px",
          },
          "& fieldset": {
            border: "none",
          },
          "&:hover": {
            bgcolor: "#FAFAFA",
          },
          "&.Mui-focused": {
            bgcolor: "#FAFAFA",
          },
        }}
        displayEmpty
      >
        {months.map((item) => (
          <MenuItem key={item} value={item}>
            <Typography fontWeight={600} color="#A0A0A0">
              {item}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
