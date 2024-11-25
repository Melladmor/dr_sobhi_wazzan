"use client";

import { TestimnialsCardI } from "../componetns";
import TestimonialSwiper from "./TestimonialSwiper";

type Props = {
  tesimonialsData: TestimnialsCardI[];
};

const TestimonialSlider = ({ tesimonialsData }: Props) => {
  return <TestimonialSwiper tesimonialsData={tesimonialsData} />;
};

export default TestimonialSlider;
