import { Card, CardContent, Box, Typography, Button } from "@mui/material";
import React from "react";
import LeftArrowButton from "../ui/app-arrow-left-button";
import RightArrowButton from "../ui/app-arrow-right-button";
import { CampaignBanner } from "@/lib/types/types";
import { useSwiper } from "swiper/react";

interface BannerCardProps {
  id: CampaignBanner["id"];
  title: CampaignBanner["title"];
  subtitle?: CampaignBanner["subtitle"];
  description: CampaignBanner["description"];
}

const BannerCard: React.FC<BannerCardProps> = ({
  title,
  subtitle,
  description,
}) => {
  const slider = useSwiper();
  const splitTitle = title.split("\n");

  return (
    <Card
      sx={{
        height: "346px",
        width: "100%",
        backgroundColor: "#4880FF",
        backgroundImage: "url(/product-banner-pattern.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        py: {
          lg: "50px",
        },
      }}
    >
      {/* Left arrow */}
      <LeftArrowButton onClick={() => slider.slidePrev()} />

      {/* Right arrow */}
      <RightArrowButton onClick={() => slider.slideNext()} />

      <CardContent
        sx={{
          p: 0,
          pl: {
            xs: "50px",
            lg: "130px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography variant="h6" color="#FFFFFF" lineHeight="30px">
            {subtitle}
          </Typography>
          <Typography
            fontSize="37px"
            fontWeight={900}
            color="#FFFFFF"
            lineHeight="48px"
          >
            {splitTitle[0]} <br /> {splitTitle[1]}
          </Typography>
          <Typography variant="h6" color="#FFFFFF" lineHeight="30px">
            {description}
          </Typography>
          <Button
            sx={{
              maxWidth: "156px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF8743",
              borderRadius: "11px",
            }}
          >
            <Typography variant="button" color="#FFFFFF">
              Get Started
            </Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BannerCard;
