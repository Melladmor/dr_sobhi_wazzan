"use client";
import React, { useRef, useState } from "react";
import NextAndBackButton from "./NextAndBackButton";
import CourseSwiper from "./CourseSwiper";
import { CoursesT } from "../../../localdata/type";
import Pagination from "./Pagination";
import useMediaScreen from "@/hooks/useMediaScreen";

type Props = {
  coursesData: CoursesT[];
};

const CourseSlider = ({ coursesData }: Props) => {
  const isSmallScreen = useMediaScreen(426);
  const isMeduimScreen = useMediaScreen(1025);
  const backRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalNumberCalc = isSmallScreen ? 1 : isMeduimScreen ? 2 : 3;
  const totalSlides = Math.ceil(coursesData.length / totalNumberCalc);

  const handleSlideChange = (swiper: number) => {
    setActiveIndex(Math.floor(swiper / totalNumberCalc));
  };
  return (
    <div>
      <CourseSwiper
        coursesData={coursesData}
        backRef={backRef}
        nextRef={nextRef}
        handleSlideChange={handleSlideChange}
      />
      <div className="flex items-center justify-between w-full lg:mt-[58px] md:mt-[40px] sm:mt-[35px] xs:mt-[30px]">
        <Pagination activeIndex={activeIndex} totalSlides={totalSlides} />
        <NextAndBackButton backRef={backRef} nextRef={nextRef} />
      </div>
    </div>
  );
};

export default CourseSlider;
