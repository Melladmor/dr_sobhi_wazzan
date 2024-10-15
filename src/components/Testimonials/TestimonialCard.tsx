import Image from "next/image";
import React from "react";

type Props = {
  isActive: boolean;
  image: string;
  name: string;
  role: string;
};

const TestimonialCard = ({ image, isActive, name, role }: Props) => {
  return (
    <div>
      <div className="mb-[12px]">
        <Image
          src={image}
          width={100}
          height={100}
          objectFit="contain"
          alt={image}
          className="size-[114px] rounded-[50%]"
        />
      </div>
      <h4 className="lg:text-[24px] md:text-[22px] sm:text-[18px] xs:text-[16px] font-[700] text-bluePrimary mb-[9px]">
        {name}
      </h4>
      <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px] font-[400] text-[#2E3E5C]">
        {role}
      </p>
    </div>
  );
};

export default TestimonialCard;
