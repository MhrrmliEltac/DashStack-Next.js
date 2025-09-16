import { Divider } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

const Line = ({ href }: { href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Divider
      sx={{
        position: "absolute",
        top: 8,
        left: 0,
        transform: "translate(-50%,0%)",
        width: "9px",
        height: "50px",
        background: isActive ? "#4880FF" : "#FFFFFF",
        borderRadius: "4px",
      }}
    />
  );
};

export default Line;
