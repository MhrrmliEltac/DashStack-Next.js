"use client";

import {
  Box,
  Typography,
  IconButton,
  Stack,
  Card,
  CardMedia,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useCallback, useState } from "react";

const images = [
  "https://static.vecteezy.com/system/resources/thumbnails/050/177/034/small_2x/smart-watch-isolated-on-transparent-background-png.png",
  "https://static.vecteezy.com/system/resources/previews/046/829/689/non_2x/smart-watch-isolated-on-transparent-background-png.png",
];

export default function ProductCard() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleIncrementIndex = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, [currentIndex]);

  const handleDecrementIndex = useCallback(() => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 2,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      {/* Left arrow */}
      <IconButton
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#f4f4f4",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
        onClick={handleDecrementIndex}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      {/* Right arrow */}
      <IconButton
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#f4f4f4",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
        onClick={handleIncrementIndex}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* Image */}
      <CardMedia
        component="img"
        image={images[currentIndex]}
        alt="Beats Headphone"
        sx={{
          width: 180,
          height: 180,
          objectFit: "contain",
          mt: 2,
        }}
      />

      {/* Title & Price */}
      <Stack alignItems="center" spacing={0.5} pb={2}>
        <Typography variant="h5">Beats Headphone 2019</Typography>
        <Typography variant="h6" fontWeight={700} color="secondary">
          $89.00
        </Typography>
      </Stack>
    </Box>
  );
}
