import React, { Fragment } from "react";
import Title from "../Title/Title";
import TestimonialSlider from "./TestimonialSlider";
import { testimonialsData } from "../../../localdata/testimonialsData";
import Clients from "./Clients/Clients";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div>
      <Title title="Let's Hear What They Says" />
      <TestimonialSlider tesimonialsData={testimonialsData?.tesimoials} />
      <div>
        <Clients />
      </div>
    </div>
  );
};

export default Testimonials;
