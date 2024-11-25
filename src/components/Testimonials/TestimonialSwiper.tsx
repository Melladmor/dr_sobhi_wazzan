"use client";

import { TestimnialsCardI } from "../componetns";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow } from "swiper/modules";
import style from "./swiper.module.css";
import useMediaScreen from "@/hooks/useMediaScreen";
type Props = {
  tesimonialsData: TestimnialsCardI[];
};

const TestimonialSwiper = ({ tesimonialsData }: Props) => {
  const isSmallScreen = useMediaScreen(768);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={isSmallScreen ? 1 : 2}
      coverflowEffect={{
        rotate: 0,
        stretch: 50,
        depth: 200,
        modifier: 1,
      }}
      modules={[EffectCoverflow]}
      className={isSmallScreen ? style.mySwiper2 : style.mySwiper1}>
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
