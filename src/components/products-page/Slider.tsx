"use client";
import React from "react";
import BannerCard from "@/components/products-page/BannerCard";
import { CampaignBanner } from "@/lib/types/types";
import { campaignBanners } from "@/lib/_mock/campaingBanners";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full !m-0 !p-0"
    >
      {campaignBanners &&
        campaignBanners.length > 0 &&
        campaignBanners.map((campaignBanner: CampaignBanner) => (
          <SwiperSlide key={campaignBanner.id}>
            <BannerCard
              id={campaignBanner.id}
              title={campaignBanner.title}
              subtitle={campaignBanner.subtitle}
              description={campaignBanner.description}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
