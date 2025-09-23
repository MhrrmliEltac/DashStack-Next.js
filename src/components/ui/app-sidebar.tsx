"use client";

import { useEffect } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Inventory2 } from "@mui/icons-material";
import SpeedIcon from "@mui/icons-material/Speed";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { usePathname } from "next/navigation";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { NavElement, SidebarNav } from "@/lib/types/types";
import SidebarItem from "./app-sidebar-item";
import PaymentsIcon from "@mui/icons-material/Payments";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import GridOnIcon from "@mui/icons-material/GridOn";
import Logo from "../logo/logo";
import { useSidebar } from "@/store/useSidebar";
import SidebarContainer from "./app-sidebar-container";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import Line from "./app-line";

const sidebarNav: SidebarNav = {
  admin: [
    {
      navName: "Dashboard",
      icon: SpeedIcon,
      href: "/dashboard",
    },
    {
      navName: "Products",
      icon: GridViewIcon,
      href: "/products",
    },
    {
      navName: "Favorites",
      icon: FavoriteBorderIcon,
      href: "/favorites",
    },
    {
      navName: "Inbox",
      icon: MailOutlineIcon,
      href: "/inbox",
    },
    {
      navName: "Order Lists",
      icon: ChecklistIcon,
      href: "/order-list",
    },
    {
      navName: "Product Stock",
      icon: Inventory2,
      href: "/product-stock",
    },
  ],
  pages: [
    {
      navName: "Pricing",
      icon: CardGiftcardIcon,
      href: "/pricing",
    },
    {
      navName: "Calender",
      icon: CalendarMonthIcon,
      href: "/calendar",
    },
    {
      navName: "To-Do",
      icon: ContentPasteIcon,
      href: "/to-do",
    },
    {
      navName: "Contact",
      icon: PeopleOutlineIcon,
      href: "/contact",
    },
    {
      navName: "Invoice",
      icon: PaymentsIcon,
      href: "/invoice",
    },
    {
      navName: "Team",
      icon: PermIdentityIcon,
      href: "/team",
    },
    {
      navName: "Table",
      icon: GridOnIcon,
      href: "/table",
    },
  ],
  preferences: [
    {
      navName: "Settings",
      icon: SettingsIcon,
      href: "/settings",
    },
    {
      navName: "Logout",
      icon: PowerSettingsNewIcon,
      href: "/log-out",
    },
  ],
};

const Sidebar = () => {
  const pathname = usePathname();
  const isOpen = useSidebar((state) => state.open);

  useEffect(() => {
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <SidebarContainer isOpen={isOpen}>
      {/* Admin nav */}
      <List>
        <ListItem sx={{ paddingTop: "24px", paddingBottom: "30px" }}>
          <Logo />
        </ListItem>
        {sidebarNav.admin.map((navItem: NavElement) => (
          <SidebarItem
            key={navItem.navName}
            navItem={navItem}
            pathname={pathname}
          />
        ))}
      </List>

      {/* Line */}
      <Line bgColor="#E0E0E0" height={"1px"} />

      {/* Pages nav */}
      <List>
        <ListItem sx={{ pl: "35px", py: "16px" }}>
          <ListItemText
            sx={{ opacity: "60%", textTransform: "uppercase" }}
            primary="Pages"
          />
        </ListItem>
        {sidebarNav.pages.map((navItem: NavElement) => (
          <SidebarItem
            key={navItem.navName}
            navItem={navItem}
            pathname={pathname}
          />
        ))}
      </List>

      {/* Line */}
      <Line bgColor="#E0E0E0" height={"1px"} />

      {/* Preferences nav */}
      <List>
        {sidebarNav.preferences.map((navItem: NavElement) => (
          <SidebarItem
            key={navItem.navName}
            navItem={navItem}
            pathname={pathname}
          />
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
