"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  ClickAwayListener,
  List,
  ListItem,
  ListItemButton,
  Box,
  Typography,
  Popper,
  Button,
} from "@mui/material";
import Line from "../ui/app-line";
import { NotificationList } from "@/lib/_mock/notification";
import { PopperElementType, Props } from "@/lib/types/types";

const NotificationPopper: React.FC<Props> = ({
  open,
  anchorEl,
  handleClose,
}) => {
  const getBackground = (id: number) => {
    switch (id) {
      case 1:
        return "linear-gradient(to right, #4E96FF 0%, #80C9FC 100%)";
      case 2:
        return "linear-gradient(to right, #F97FD9 0%, #FFC1E6 100%)";
      case 3:
        return "linear-gradient(to right, #9E8FFF 0%, #EBCBFF 100%)";
      case 4:
        return "linear-gradient(to right, #FF8F8F 0%, #FFC1C1 100%)";
      default:
        return "#ccc";
    }
  };

  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
      <ClickAwayListener onClickAway={handleClose}>
        <Card
          sx={{
            m: 0,
            p: 0,
            border: "none",
          }}
        >
          <CardHeader title="Notification" />
          <Line bgColor="#979797" height={1} />
          <CardContent sx={{ p: 0, m: 0 }}>
            <List sx={{ width: "100%", maxWidth: "254px", p: 0, m: 0 }}>
              {NotificationList.map((item: PopperElementType) => (
                <ListItem
                  key={item.id}
                  alignItems="flex-start"
                  sx={{ py: "12px", px: "20px" }}
                >
                  <ListItemButton
                    disableGutters
                    disableRipple
                    disableTouchRipple
                    sx={{
                      gap: "12px",
                      p: 0,
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    <Box
                      sx={{
                        py: "10px",
                        px: "11px",
                        borderRadius: "50%",
                        width: 32,
                        height: 32,
                        background: getBackground(item.id),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      component="span"
                      variant="button"
                      color="primary"
                    >
                      {item.title}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardContent>
          <Line bgColor="#979797" height={1} />
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography component={"span"} color="#A8A8A8">
              See all notification
            </Typography>
          </Button>
        </Card>
      </ClickAwayListener>
    </Popper>
  );
};

export default NotificationPopper;
