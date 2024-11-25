import Image from "next/image";
import React from "react";
import { TestimnialsCardI } from "../componetns";

type Props = {
  tesimonialsData: TestimnialsCardI;
};

const TestimonialCard = ({ tesimonialsData }: Props) => {
  return (
    <div className="max-w-[500px] lg:min-h-[250px] md:min-h-[200px] sm:min-h-[150px] xs:min-h-[150px] bg-white shadow-custom_shaow_card px-4 py-1 relative   rounded-md mb-[80px]">
      <Image
        src={tesimonialsData?.image}
        width={100}
        height={100}
        objectFit="cover"
        alt={tesimonialsData?.image}
        className="lg:size-[114px] md:size-[100px] sm:size-[70px] xs:size-[70px] lg:border-[5px] md:border-[4px] sm:border-[3px] xs:border-[3px] p-1 border-solid border-bluePrimary rounded-[50%] absolute top-[-30%] translate-y-[18%] left-[50%] translate-x-[-50%]"
        loading="lazy"
      />
      <div className="lg:min-h-[200px] md:min-h-[170px] sm:min-h-[140px] xs:min-h-[140px] flex flex-col justify-end ">
        <div className="text-center mb-3">
          <p className="lg:text-[18px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-[400] text-gray_1">
            {tesimonialsData?.role}
          </p>
          <h4 className="lg:text-[24px] md:text-[22px] sm:text-[16px] xs:text-[14px] font-[700] text-bluePrimary">
            {tesimonialsData?.name}
          </h4>
        </div>
        <div>
          <h5 className="lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-[#2E3E5C] font-[400] max-w-[800px] fadeIn text-center">
            {tesimonialsData?.description}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

{
  /* <div className="flex justify-center items-center gap-[10px] flex-col">
<div>
  <Image
    src={tesimonialsData?.image}
    width={100}
    height={100}
    objectFit="cover"
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
</div> */
}
