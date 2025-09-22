"use client";

import CustomOrderStack from "./CustomOrderStack";
import CustomOrderButton from "./CustomOrderButton";
import { useMemo } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Popper,
  Typography,
} from "@mui/material";
import { useAnchor } from "../hooks/useAnchor";
import { useFilter } from "@/store/useFilter";

const ClientDatePicker = () => {
  const { open, anchorEl, handleOpen, handleClose } = useAnchor();
  const dateState = useFilter();

  const fullDate = useMemo(() => {
    if (!dateState.selectedDate) return "";
    const date = dateState.selectedDate.format("DD");
    const month = dateState.selectedDate.format("MMM");
    const year = dateState.selectedDate.format("YYYY");
    return `${date} ${month} ${year}`;
  }, [dateState.selectedDate]);

  const handleSubmit = () => {
    if (fullDate) dateState.handleOrderDateFilter(fullDate);
    handleClose();
  };

  return (
    <CustomOrderStack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CustomOrderButton
          fullDate={fullDate}
          selectedDate={dateState.selectedDate}
          onOpen={handleOpen}
          open={open}
          title="Date"
          endIcon
          color="primary"
        />

        <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
          <ClickAwayListener onClickAway={handleClose}>
            <Box
              sx={{
                p: "24px",
                borderRadius: "26px",
                backgroundColor: "white",
                boxShadow: "0px 13px 61px 0px rgba(169, 169, 169, 0.366)",
                width: "100%",
                maxWidth: "521px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  mb: "24px",
                }}
              >
                <DatePicker
                  value={dateState.selectedDate}
                  onChange={(newValue) => {
                    dateState.setSelectedDate(newValue);
                  }}
                />
              </Box>

              <Divider
                sx={{
                  backgroundColor: "#979797",
                  width: "100%",
                  maxWidth: "521px",
                  height: "1px",
                  opacity: 0.5,
                }}
              />

              <Box>
                <Typography component={"span"} variant="body1" fontWeight={300}>
                  *You can choose multiple Order status
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mt: "16px",
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      height: "34px",
                      maxWidth: "129px",
                      borderRadius: "6px",
                      mt: "26px",
                    }}
                    onClick={handleSubmit}
                  >
                    <Typography component={"span"}>Apply Now</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </ClickAwayListener>
        </Popper>
      </LocalizationProvider>
    </CustomOrderStack>
  );
};

export default ClientDatePicker;
