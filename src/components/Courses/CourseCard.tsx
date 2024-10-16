import React from "react";
import { CoursesT } from "../../../localdata/type";
import Image from "next/image";
import Button from "../Button";

type Props = CoursesT;

const CourseCard = ({ description, image, title }: Props) => {
  return (
    <div className="max-w-[400px] ">
      <Image
        src={image}
        alt={image}
        width={100}
        height={100}
        objectFit="cover"
        loading="lazy"
        className="lg:h-[240px] lg:w-[400px] md:h-[220px] md:w-full sm:h-[180px] sm:w-full xs:h-[180px] xs:w-full lg:mb-[32px] md:mb-[28px] sm:mb-[25px] xs:mb-[20px] custom_course_image_border"
      />
      <h6 className="text-black lg:text-[24px] md:text-[20px] sm:text-[18px] xs:text-[16px] font-[800] mb-[12px]">
        {title}
      </h6>
      <p className="text-gray_2 lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] font-[400] lg:mb-[32px] md:mb-[28px] sm:mb-[25px] xs:mb-[20px]">
        {description}
      </p>
      <Button customClass="bg-button_card_gradient text-white shadow-button_card_shadow border-[3px] border-white text-[16px] w-full">
        Contact Support
      </Button>
    </div>
  );
};

export default CourseCard;
