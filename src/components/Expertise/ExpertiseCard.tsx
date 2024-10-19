"use client";
import { expertiseI } from "../../../localdata/type";
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";
type Props = expertiseI;

const ExpertiseCard = ({ id, title, description, image }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: id === 1 ? id : id - 0.5,
      }}
      className="py-[2.5rem] px-[1.5rem] bg-white  shadow-custom_shaow_card rounded-[12px] lg:w-[18.5rem] md:w-full sm:w-full xs:w-full ">
      <div className="lg:mb-[24px] md:mb-[24px] sm:mb-[20px] xs:mb-[18px]">
        <Image
          src={image}
          alt={image}
          width={100}
          height={100}
          objectFit="contain"
          loading="lazy"
          className="lg:w-[69px] lg:h-[63px] md:w-[66px] md:h-[60px] sm:w-[63px] sm:h-[57px] xs:w-[63px] xs:h-[57px]"
        />
      </div>
      <div className="lg:mb-[24px] md:mb-[24px] sm:mb-[20px] xs:mb-[18px]">
        <h1 className="text-blueSecondary font-[500] uppercase lg:text-[20px] md:text-[20px] sm:text-[18px] xs:text-[18px] lg:mb-[25px] md:mb-[25px] sm:mb-[20px] xs:mb-[18px]">
          {title}
        </h1>
        <p className="text-custom_gray  font-[500] lg:text-[16px] md:text-[16px] sm:text-[14px] xs:text-[14px]">
          {description}
        </p>
      </div>
      <div>
        <Button customClass="bg-button_card_gradient text-white shadow-button_card_shadow border-[3px] border-white text-[16px] lg:w-[257px] md:w-full xs:w-full sm:w-full">
          Book your consultation now
        </Button>
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;
