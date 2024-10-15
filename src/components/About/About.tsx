import React from "react";
import { aboutUsData } from "../../../localdata/aboutUsData";
import Image from "next/image";

const About = () => {
  return (
    <div className="lg:py-[7.5rem] md:py-[6rem] sm:py-[4rem] xs:py-[3.5rem]">
      <div className="flex lg:flex-row-reverse md:flex-col sm:flex-col xs:flex-col  lg:justify-between lg:items-start md:items-center sm:items-center xs:items-center md:gap-4 sm:gap-4 xs:gap-4">
        <div className="">
          <Image
            src={aboutUsData?.image}
            alt="aboutusimage"
            width={100}
            height={100}
            objectFit="contain"
            className="w-[22rem] :h-[20rem] "
          />
        </div>
        <div className="lg:w-[70%] md:w-full sm:w-full xs:w-full lg:text-start md:text-center sm:text-center xs:text-center">
          <h2 className="lg:text-[2.5rem] md:[2rem] sm:[1.5rem] xs:[1.5rem] text-bluePrimary font-[800]">
            {aboutUsData?.title}
          </h2>
          <p className="text-gray_2 lg:text-[1rem] md:text-[1rem] sm:text-[0.75rem] xs:text-[0.75rem] font-[500]">
            {aboutUsData?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
