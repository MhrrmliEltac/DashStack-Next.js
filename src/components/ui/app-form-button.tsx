"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface AppFormButtonProps {
  btnTitle: string;
}

const AppFormButton = ({ btnTitle }: AppFormButtonProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "60px",
      }}
    >
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{ borderRadius: "12px" }}
      >
        <Typography component={"span"} variant="h5">
          {btnTitle}
        </Typography>
      </Button>
    </Box>
  );
};

export default AppFormButton;
