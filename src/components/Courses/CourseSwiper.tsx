"use client";
import { Swiper as SwiperType } from "swiper";

import { CoursesT } from "../../../localdata/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import CourseCard from "./CourseCard";
import { RefObject } from "react";
import useMediaScreen from "@/hooks/useMediaScreen";
import { NavigationOptions } from "swiper/types";

type Props = {
  coursesData: CoursesT[];
  nextRef: RefObject<HTMLButtonElement>;
  backRef: RefObject<HTMLButtonElement>;
  handleSlideChange: (e: number) => void;
};

const CourseSwiper = ({
  coursesData,
  backRef,
  nextRef,
  handleSlideChange,
}: Props) => {
  const isSmallScreen = useMediaScreen(426);
  const isMeduimScreen = useMediaScreen(1025);

  return (
    <Swiper
      slidesPerView={isSmallScreen ? 1 : isMeduimScreen ? 2 : 3}
      slidesPerGroup={isSmallScreen ? 1 : isMeduimScreen ? 2 : 3}
      spaceBetween={30}
      freeMode={false}
      modules={[FreeMode, Navigation]}
      navigation={{
        prevEl: backRef.current,
        nextEl: nextRef.current,
      }}
      onSwiper={(swiper: SwiperType) => {
        const navigation = swiper.params.navigation as NavigationOptions;

        if (navigation) {
          navigation.prevEl = backRef.current; 
          navigation.nextEl = nextRef.current; 
          swiper.navigation.update(); 
        }
      }}
      onSlideChange={(el: SwiperType) => handleSlideChange(el?.activeIndex)}
      className="mySwiper">
      {coursesData?.map((el: CoursesT) => {
        return (
          <SwiperSlide key={el?.id}>
            <CourseCard key={el?.id} {...el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CourseSwiper;
