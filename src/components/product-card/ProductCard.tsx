"use client";

import { Box, Typography,  Stack, CardMedia } from "@mui/material";
import { useCallback, useState } from "react";
import LeftArrowButton from "../ui/app-arrow-left-button";
import RightArrowButton from "../ui/app-arrow-right-button";

const images = [
  "https://static.vecteezy.com/system/resources/thumbnails/050/177/034/small_2x/smart-watch-isolated-on-transparent-background-png.png",
  "https://static.vecteezy.com/system/resources/previews/046/829/689/non_2x/smart-watch-isolated-on-transparent-background-png.png",
];

export default function ProductCard() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleIncrementIndex = useCallback(() => {
    if (currentIndex === 1) return;
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
      <LeftArrowButton onClick={handleDecrementIndex} />

      {/* Right arrow */}
      <RightArrowButton onClick={handleIncrementIndex} />

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
