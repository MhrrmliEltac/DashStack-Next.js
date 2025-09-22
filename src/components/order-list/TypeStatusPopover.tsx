import { Status } from "@/lib/types/types";
import {
  Popper,
  ClickAwayListener,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import Line from "../ui/app-line";

interface TypeStatusPopoverProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  orderElement: string[];
  selected: Set<string>;
  handleClose: () => void;
  handleOrder: (order: string | Status) => void;
  handleSubmit: () => void;
}

const TypeStatusPopover: React.FC<TypeStatusPopoverProps> = ({
  anchorEl,
  open,
  orderElement,
  selected,
  handleClose,
  handleOrder,
  handleSubmit,
}) => {
  return (
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
          <Typography variant="h5" mb={"24px"}>
            Select Order Type
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              mb: "24px",
            }}
          >
            {orderElement.map((order: string | Status, index: number) => {
              const isSelected = selected.has(order);

              return (
                <Button
                  variant="contained"
                  key={index}
                  onClick={() => handleOrder(order)}
                  sx={{
                    maxWidth: "147px",
                    width: "100%",
                    maxHeight: "34px",
                    borderRadius: "17px",
                    py: "8px",
                    px: "15px",
                    border: "1px solid #979797",
                    backgroundColor: isSelected ? "#4880FF" : "#fff",
                    color: isSelected ? "#FFFFFF" : "#282D32",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                >
                  <Typography component="span" variant="body2">
                    {order}
                  </Typography>
                </Button>
              );
            })}
          </Box>

          <Line bgColor="#979797" maxwidth="521px" height={"1px"} />

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
  );
};

export default TypeStatusPopover;
