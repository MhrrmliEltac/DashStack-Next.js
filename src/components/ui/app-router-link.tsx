"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface RouterLinkProps {
  href: string;
  children: React.ReactNode;
}

const RouterLink: React.FC<RouterLinkProps> = ({ children, href, ...rest }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant="contained"
      color={isActive ? "secondary" : "info"}
      disableFocusRipple
      disableTouchRipple
      disableRipple
      disableElevation
      sx={{
        gap: "8px",
        paddingLeft: "16px",
        display: "flex",
        justifyContent: "start",
        boxShadow: "none",
      }}
      LinkComponent={Link}
      href={href}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default RouterLink;
