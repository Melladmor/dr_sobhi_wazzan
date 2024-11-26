"use client";

import { TestimnialsCardI } from "../componetns";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import style from "./swiper.module.css";
type Props = {
  tesimonialsData: TestimnialsCardI[];
};

const TestimonialSwiper = ({ tesimonialsData }: Props) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className={style.mySwiper1}>
      {tesimonialsData?.map((el: TestimnialsCardI) => {
        return (
          <SwiperSlide className={style.mySwiper2} key={el?.id}>
            <TestimonialCard tesimonialsData={el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSwiper;
