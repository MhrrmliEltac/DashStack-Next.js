import { Box, Typography } from "@mui/material";
import React from "react";

const TitleHeader = ({ title }: { title: string }) => {
  return (
    <Box sx={{ mb: "23px" }}>
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
};

export default TitleHeader;
