"use client";

import { Fragment, useState } from "react";
import { TestimnialsCardI } from "../componetns";
import TestimonialSwiper from "./TestimonialSwiper";
import TestimonialDescription from "./TestimonialDescription";

type Props = {
  tesimonialsData: TestimnialsCardI[];
};

const TestimonialSlider = ({ tesimonialsData }: Props) => {
  const [activeId, setActiveId] = useState<number>(1);
  const [activeSlide, setActiveSlide] = useState<TestimnialsCardI>(
    tesimonialsData[0]
  );

  const handleSlideChange = (swiper: any) => {
    const activeSlide = tesimonialsData[swiper];
    const activeId = activeSlide?.id;
    setActiveId(activeId);
    setActiveSlide(activeSlide);
  };
  return (
    <Fragment>
      <TestimonialDescription description={activeSlide?.description} />
      <TestimonialSwiper
        tesimonialsData={tesimonialsData}
        handleSlideChange={handleSlideChange}
      />
    </Fragment>
  );
};

export default TestimonialSlider;
