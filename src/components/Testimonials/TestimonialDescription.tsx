"use client";
import { motion } from "framer-motion";
type Props = {
  description?: string;
};

const TestimonialDescription = ({ description }: Props) => {
  return (
    <div className="flex items-end justify-between mb-[90px]">
      <div className="lg:block md:block sm:hidden xs:hidden lg:text-[100px] md:text-[80px] text-bluePrimary font-[800] font-mono">
        “
      </div>
      <motion.h5
        key={description}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="text-[16px] text-bluePrimary font-[400] max-w-[800px] fadeIn text-center">
        {description}
      </motion.h5>
      <div className="lg:block md:block sm:hidden xs:hidden lg:text-[100px] md:text-[80px] text-bluePrimary font-[800] font-mono">
        “
      </div>
    </div>
  );
};

export default TestimonialDescription;
