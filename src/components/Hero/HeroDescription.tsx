"use client";
import { HeroSectionI } from "../../../localdata/type";
import { motion } from "framer-motion";
import Button from "../Button";
import { useState } from "react";
import HeroVideo from "./HeroVideo";
type Props = HeroSectionI;

const HeroDescription = ({ subTitle, title, videoLink }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShowModal = () => {
    setShow(!show);
  };
  return (
    <motion.div
      initial={{
        y: 250,
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="lg:w-[60%] md:w-full sm:w-full xs:w-full lg:pt-[66px] md:pt-[66px] lg:pb-[66px] md:pb-[66px]  lg:text-start md:text-center sm:text-center xs:text-center">
      <h1 className="lg:text-[3.75rem] md:text-[3rem] sm:text-[2rem] xs:text-[1.5rem] text-white font-[700] mb-[1.5rem]">
        {title}
      </h1>
      <p className="text-white font-normal lg:text-[1.25rem] md:text-[1.25rem] sm:text-[1rem] xs:text-[1rem] lg:mb-[6.6rem] md:mb-[4rem] sm:mb-[4rem] xs:mb-[2rem]">
        {subTitle}
      </p>
      <div className="flex items-center  lg:flex-row md:flex-col  sm:flex-col xs:flex-col lg:gap-[24px] md:gap-[24px] sm:gap-[20px] xs:gap-[18px] xs:pb-4">
        <Button customClass="lg:flex md:block lg:items-center md:items-center sm:block xs:block  lg:w-auto md:w-[310px] sx:w-[222px] xs:w-[222px] lg:h-[3.5rem] md:h-[3rem] sm:h-[2.5rem] xs:h-[2.5rem]  text-center">
          Book your consultation now
        </Button>
        <HeroVideo
          videoLink={videoLink}
          modal_setting={{
            show: show,
            handleShowModal: handleShowModal,
          }}
        />
      </div>
    </motion.div>
  );
};

export default HeroDescription;
