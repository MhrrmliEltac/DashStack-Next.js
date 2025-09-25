"use client";

import {
  Avatar,
  Box,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppBadge from "../ui/app-badge";
import { useSidebar } from "@/store/useSidebar";
import NotificationPopper from "./NotificationPopper";
import ProfilePopper from "./ProfilePopper";
import React, { useReducer } from "react";
import { State } from "@/lib/types/types";
import { reducer } from "@/utils/reducer";

const Header = () => {
  const initialState: State = {
    openProfile: false,
    anchorProfile: null,
    openNotification: false,
    anchorNotification: null,
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSidebarOpen = useSidebar((state) => state.handleOpen);

  const handleMediaQueryOpen = () => {
    if (isDesktop) {
      handleSidebarOpen("desktop");
    } else {
      handleSidebarOpen("mobile");
    }
  };

  const handleOpenMenu = (
    menu: "profile" | "notification",
    e: React.MouseEvent<HTMLElement>
  ) => {
    dispatch({ type: "TOGGLE_MENU", menu, anchor: e.currentTarget });
  };

  return (
    <header className="w-full px-[31px] py-[16px] bg-white h-[70px]">
      <nav className="flex justify-between w-full">
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            maxWidth: "388px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <IconButton
            disableFocusRipple
            disableRipple
            disableTouchRipple
            onClick={handleMediaQueryOpen}
          >
            <MenuIcon />
          </IconButton>
          <TextField
            type="search"
            placeholder="Search"
            variant="outlined"
            sx={{
              maxWidth: "388px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "19px",
              },
            }}
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <IconButton
            sx={{ position: "relative" }}
            onClick={(e) => handleOpenMenu("notification", e)}
          >
            <AppBadge value={0} />
            <NotificationsIcon htmlColor="#3D42DF" fontSize={"medium"} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(e) => handleOpenMenu("profile", e)}
          >
            <Avatar src="https://cdn.dribbble.com/userupload/30931998/file/original-878d353d1ea2f9271189f988a97717a1.jpg?resize=752x&vertical=center" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                component="span"
                variant="body1"
                fontWeight={700}
                color="#404040"
              >
                Moni Roy
              </Typography>
              <Typography component="span" variant="body2" color="#565656">
                Admin
              </Typography>
            </Box>
            <Box
              sx={{
                width: "18px",
                height: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "1px solid #5C5C5C",
                py: "7px",
                px: "6px",
              }}
            >
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
      </nav>

      <NotificationPopper
        open={state.openNotification}
        anchorEl={state.anchorNotification}
        handleClose={() =>
          dispatch({ type: "CLOSE_MENU", menu: "notification" })
        }
      />

      <ProfilePopper
        open={state.openProfile}
        anchorEl={state.anchorProfile}
        handleClose={() => dispatch({ type: "CLOSE_MENU", menu: "profile" })}
      />
    </header>
  );
};

export default Header;
