import {
  Settings,
  CalendarMonthOutlined,
  Person,
  PriorityHigh,
} from "@mui/icons-material";
import React from "react";
import { PopperElementType } from "../types/types";

export const NotificationList: PopperElementType[] = [
  {
    id: 1,
    title: "Settings",
    icon: <Settings fontSize="small" htmlColor="white" />,
  },
  {
    id: 2,
    title: "Event Update",
    icon: <CalendarMonthOutlined fontSize="small" htmlColor="white" />,
  },
  {
    id: 3,
    title: "Profile",
    icon: <Person fontSize="small" htmlColor="white" />,
  },
  {
    id: 4,
    title: "Application Error",
    icon: <PriorityHigh fontSize="small" htmlColor="white" />,
  },
];
