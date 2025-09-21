import { Box, Button, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import React from "react";

const AppAvatar = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        disableElevation
        disableFocusRipple
        disableRipple
        disableTouchRipple
        component="label"
        variant="contained"
        startIcon={<CameraAltIcon fontSize="large" htmlColor="#000000" />}
        sx={{
          backgroundColor: "#ECECEE",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.0001)",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiButton-startIcon": {
            margin: 0,
          },
          "&:hover": {
            boxShadow: "0px 13px 61px 0px rgba(169, 169, 169, 0.366)",
          },
        }}
      >
        <input type="file" accept=".csv" hidden />
      </Button>
      <Typography variant="body2" color="secondary">
        {title}
      </Typography>
    </Box>
  );
};

export default AppAvatar;
