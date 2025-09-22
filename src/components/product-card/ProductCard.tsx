"use client";
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import LeftArrowButton from "../ui/app-arrow-left-button";
import RightArrowButton from "../ui/app-arrow-right-button";
import { ProductType } from "@/lib/types/types";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { formatPrice } from "@/lib/helpers/formatPrice";
import { useState } from "react";

const ProductCard = ({
  price,
  productName,
  rating,
  ratingCount,
  image,
}: ProductType) => {
  const [clickedFavorite, setClickedFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    setClickedFavorite((prev: boolean) => !prev);
  };

  return (
    <Card sx={{ width: "100%", maxWidth: "100%" }}>
      <Box
        sx={{
          borderRadius: 2,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        {/* Card media */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left arrow */}
          <LeftArrowButton />

          {/* Right arrow */}
          <RightArrowButton />

          {/* Image */}
          <CardMedia
            component="img"
            image={image}
            alt="Beats Headphone"
            sx={{
              width: 180,
              height: 180,
              objectFit: "contain",
              mt: 2,
            }}
          />
        </Box>

        {/* Title & Price */}
        <Stack
          alignItems="start"
          justifyContent="space-between"
          spacing={0.5}
          pb={2}
          flexDirection="row"
          width="100%"
        >
          <Stack>
            <Typography variant="h5">{productName}</Typography>
            <Typography variant="h6" fontWeight={700} color="secondary">
              {formatPrice(price)}
            </Typography>
            <Stack flexDirection="row" gap={1} alignItems="center">
              <Rating value={rating} size="small" />
              <Typography
                component="span"
                variant="body1"
                color="#000"
                sx={{ opacity: 0.4 }}
              >
                ({ratingCount})
              </Typography>
            </Stack>
          </Stack>
          <IconButton
            onClick={handleFavorite}
            sx={{
              width: "44px",
              height: "44px",
              px: "13px",
              py: "15px",
              backgroundColor: "#F9F9F9",
              borderRadius: "50%",
            }}
          >
            {clickedFavorite ? (
              <Favorite fontSize="medium" htmlColor="#F93C65" />
            ) : (
              <FavoriteBorderOutlined fontSize="medium" htmlColor="#000" />
            )}
          </IconButton>
        </Stack>

        {/* Edit product button */}
        <Stack width="100%">
          <Button
            sx={{
              backgroundColor: "rgba(226, 234, 248, 0.7)",
              px: "22px",
              py: "5px",
              borderRadius: "12px",
              maxWidth: "150px",
            }}
          >
            <Typography
              component="span"
              variant="body1"
              fontWeight={700}
              lineHeight="28px"
              color="primary"
              sx={{ opacity: 1 }}
            >
              Edit Product
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProductCard;
