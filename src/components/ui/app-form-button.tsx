import { Box, Button, Typography } from "@mui/material";
import React from "react";

const AppFormButton = ({ btnTitle }: { btnTitle: string }) => {
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
