import { ListItem, Typography } from "@mui/material";
import React from "react";
import RouterLink from "./app-router-link";
import { NavElement } from "@/lib/types/types";
import SidebarLine from "./app-sidebar-line";

interface SidebarItemProps {
  navItem: NavElement;
  pathname: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ navItem, pathname }) => {
  const Icon = navItem.icon;
  const isActive = navItem.href === pathname;

  return (
    <ListItem
      sx={{
        display: "flex",
        paddingLeft: "16px",
        position: "relative",
      }}
    >
      <SidebarLine href={navItem.href} />
      <RouterLink href={navItem.href}>
        <Icon fontSize="small" htmlColor={isActive ? "#fff" : "#202224"} />
        <Typography
          component="span"
          variant="body1"
          color={isActive ? "#fff" : "#202224"}
        >
          {navItem.navName}
        </Typography>
      </RouterLink>
    </ListItem>
  );
};

export default SidebarItem;
