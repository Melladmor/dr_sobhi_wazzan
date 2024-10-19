"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  imageLink: string;
};

const HeroImage = ({ imageLink }: Props) => {
  return (
    <motion.div
      initial={{
        y: -250,
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
      className="lg:w-[40%] flex items-center justify-center">
      <Image
        src={imageLink}
        alt="hero"
        width={100}
        height={100}
        className="lg:w-[28rem] lg:h-[34rem] md-[28rem] md-[34rem] sm:w-[20rem] sm:h-[24rem] xs:w-[18rem] xs:h-[18rem]"
        loading="lazy"
      />
    </motion.div>
  );
};

export default HeroImage;
