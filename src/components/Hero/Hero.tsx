"use client";
import { heroSectionData } from "../../../localdata/heroSectionData";
import Button from "../Button";
import Image from "next/image";
import HeroVideo from "./HeroVideo";

import { ourVisionData } from "../../../localdata/ourVisionData";
import { useState } from "react";

const Hero = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShowModal = () => {
    setShow(!show);
  };
  return (
    <div className="lg:flex lg:items-start lg:flex-row-reverse ">
      <div className="lg:w-[40%] flex items-center justify-center">
        <Image
          src={heroSectionData?.image}
          alt="hero"
          width={100}
          height={100}
          className="lg:w-[28rem] lg:h-[34rem] md-[28rem] md-[34rem] sm:w-[20rem] sm:h-[24rem] xs:w-[18rem] xs:h-[18rem]"
          loading="lazy"
        />
      </div>
      <div className="lg:w-[60%] md:w-full sm:w-full xs:w-full lg:pt-[66px] md:pt-[66px] lg:pb-[66px] md:pb-[66px]  lg:text-start md:text-center sm:text-center xs:text-center">
        <h1 className="lg:text-[3.75rem] md:text-[3rem] sm:text-[2rem] xs:text-[1.5rem] text-white font-[700] mb-[1.5rem]">
          {heroSectionData?.title}
        </h1>
        <p className="text-white font-normal lg:text-[1.25rem] md:text-[1.25rem] sm:text-[1rem] xs:text-[1rem] lg:mb-[6.6rem] md:mb-[4rem] sm:mb-[4rem] xs:mb-[2rem]">
          {heroSectionData?.subTitle}
        </p>
        <div className="flex items-center  lg:flex-row md:flex-col  sm:flex-col xs:flex-col lg:gap-[24px] md:gap-[24px] sm:gap-[20px] xs:gap-[18px] xs:pb-4">
          <Button customClass="lg:flex md:block lg:items-center md:items-center sm:block xs:block  lg:w-auto md:w-[310px] sx:w-[200px] xs:w-[200px]  text-center">
            Book your consultation now
          </Button>
          <HeroVideo
            videoLink={ourVisionData?.videoLink}
            modal_setting={{
              show: show,
              handleShowModal: handleShowModal,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
