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

const Header = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handleOpen = useSidebar((state) => state.handleOpen);

  const handleMediaQueryOpen = () => {
    if (isDesktop) {
      handleOpen("desktop");
    } else {
      handleOpen("mobile");
    }
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
          <IconButton sx={{ position: "relative" }}>
            <AppBadge value={0} />
            <NotificationsIcon htmlColor="#3D42DF" fontSize={"medium"} />
          </IconButton>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
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
    </header>
  );
};

export default Header;
