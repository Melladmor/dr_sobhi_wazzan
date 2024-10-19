"use client";
import { AboutUsI } from "../../../localdata/type";
import { motion } from "framer-motion";
type Props = Omit<AboutUsI, "image">;

const AboutDescription = ({ description, title }: Props) => {
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
      className="lg:w-[70%] md:w-full sm:w-full xs:w-full lg:text-start md:text-center sm:text-center xs:text-center">
      <h2 className="lg:text-[2.5rem] md:[2rem] sm:[1.5rem] xs:[1.5rem] text-bluePrimary font-[800]">
        {title}
      </h2>
      <p className="text-gray_2 lg:text-[1rem] md:text-[1rem] sm:text-[0.75rem] xs:text-[0.75rem] font-[500]">
        {description}
      </p>
    </motion.div>
  );
};

export default AboutDescription;
