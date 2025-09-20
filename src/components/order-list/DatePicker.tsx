"use client";

import CustomOrderStack from "./CustomOrderStack";
import CustomOrderButton from "./CustomOrderButton";
import { useMemo, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, ClickAwayListener, Popper } from "@mui/material";
import { Dayjs } from "dayjs";
import { useAnchor } from "../hooks/useAnchor";

const ClientDatePicker = () => {
  const { open, anchorEl, handleOpen, handleClose } = useAnchor();

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const fullDate = useMemo(() => {
    if (!selectedDate) return "";
    const date = selectedDate.format("DD");
    const month = selectedDate.format("MMM");
    const year = selectedDate.format("YYYY");
    return `${date} ${month} ${year}`;
  }, [selectedDate]);

  return (
    <CustomOrderStack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CustomOrderButton
          fullDate={fullDate}
          selectedDate={selectedDate}
          onOpen={handleOpen}
          open={open}
          title="Date"
          endIcon
          color="primary"
        />

        <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
          <ClickAwayListener onClickAway={handleClose}>
            <Box sx={{ p: 2 }}>
              <DatePicker
                value={selectedDate}
                onChange={(newValue) => {
                  setSelectedDate(newValue);
                  handleClose();
                }}
              />
            </Box>
          </ClickAwayListener>
        </Popper>
      </LocalizationProvider>
    </CustomOrderStack>
  );
};

export default ClientDatePicker;
