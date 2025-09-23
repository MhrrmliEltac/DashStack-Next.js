import { PopperElementType, Props } from "@/lib/types/types";
import { Key, LogoutOutlined, Loop, ManageAccounts } from "@mui/icons-material";
import {
  Box,
  Card,
  ClickAwayListener,
  List,
  ListItem,
  ListItemButton,
  Popper,
  Typography,
} from "@mui/material";
import React from "react";
import Line from "../ui/app-line";

const Profile: PopperElementType[] = [
  {
    id: 1,
    title: "Manage Account",
    icon: <ManageAccounts fontSize="medium" htmlColor="#6DB6FE" />,
  },
  {
    id: 2,
    title: "Change Password",
    icon: <Key fontSize="medium" htmlColor="#9E8FFF" />,
  },
  {
    id: 3,
    title: "Activity Log",
    icon: <Loop fontSize="medium" htmlColor="#EBCBFF" />,
  },
  {
    id: 4,
    title: "Log out",
    icon: <LogoutOutlined fontSize="medium" htmlColor="#FF8F8F" />,
  },
];

const ProfilePopper = ({ open, anchorEl, handleClose }: Props) => {
  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
      <ClickAwayListener onClickAway={handleClose}>
        <Card
          sx={{
            m: 0,
            p: 0,
            border: "none",
            borderRadius: "14px",
          }}
        >
          <List sx={{ width: "100%", maxWidth: "254px", p: 0, m: 0 }}>
            {Profile.map((profile: PopperElementType, index: number) => (
              <Box key={profile.id}>
                <ListItem
                  key={profile.id}
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
                      height: "32px",
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    {profile.icon}
                    <Typography>{profile.title}</Typography>
                  </ListItemButton>
                </ListItem>
                {Profile[index + 1] ? (
                  <Line bgColor="#979797" height={"2px"} />
                ) : null}
              </Box>
            ))}
          </List>
        </Card>
      </ClickAwayListener>
    </Popper>
  );
};

export default ProfilePopper;
