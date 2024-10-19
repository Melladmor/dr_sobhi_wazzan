"use client";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  imageLink: string;
};

const AboutImage = ({ imageLink }: Props) => {
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
      }}>
      <Image
        src={imageLink}
        alt="aboutusimage"
        width={100}
        height={100}
        objectFit="contain"
        className="w-[22rem] :h-[20rem] "
      />
    </motion.div>
  );
};

export default AboutImage;
