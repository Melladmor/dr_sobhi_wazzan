"use client";

import { TestimnialsCardI } from "../componetns";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper/modules";

type Props = {
  tesimonialsData: TestimnialsCardI[];
  handleSlideChange: (el: any) => void;
  activeId?: number;
};

const TestimonialSwiper = ({ tesimonialsData, handleSlideChange }: Props) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 50,
        depth: 200,
        modifier: 1,
      }}
      modules={[EffectCoverflow]}
      className="swiper_container"
      onSlideChange={(el) => handleSlideChange(el?.realIndex)}>
      {tesimonialsData?.map((el: TestimnialsCardI) => {
        return (
          <SwiperSlide key={el?.id}>
            <TestimonialCard tesimonialsData={el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSwiper;
