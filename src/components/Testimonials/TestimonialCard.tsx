import Image from "next/image";
import React from "react";
import { TestimnialsCardI } from "../componetns";

type Props = {
  tesimonialsData: TestimnialsCardI;
};

const TestimonialCard = ({ tesimonialsData }: Props) => {
  return (
    <div className="flex justify-center items-center gap-[10px] flex-col">
      <div>
        <Image
          src={tesimonialsData?.image}
          width={100}
          height={100}
          objectFit="contain"
          alt={tesimonialsData?.image}
          className={`lg:size-[114px] md:size-[100px] sm:size-[60px] xs:size-[60px] rounded-[50%]`}
          loading="lazy"
        />
      </div>
      <h4 className="lg:text-[24px] md:text-[22px] sm:text-[16px] xs:text-[14px] font-[700] text-bluePrimary">
        {tesimonialsData?.name}
      </h4>
      <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] xs:text-[12px] font-[400] text-[#2E3E5C]">
        {tesimonialsData?.role}
      </p>
    </div>
  );
};

export default TestimonialCard;
