import React from "react";
import { TitleI } from "../componetns";

type Props = {
  data: TitleI;
  customClass?: string;
  titleClass?: string;
  subTitleClass?: string;
};

const OurMissionTitle = ({
  data,
  customClass,
  titleClass,
  subTitleClass,
}: Props) => {
  return (
    <div
      className={`w-full lg:mb-[3.75rem] md:mb-[3rem] sm:mb-[2.5rem] xs:mb-[2rem] ${
        customClass
          ? customClass
          : "flex justify-between items-center lg:flex-row md:flex-col sm:flex-col xs:flex-col"
      }`}>
      <h2
        className={`${titleClass} lg:w-[25%] md:w-full sm:w-full xs:w-full lg:text-[2.5rem] md:[2rem] sm:[1.5rem] xs:[1.5rem] text-bluePrimary font-[800] mb-[12px]`}>
        {data?.title}
      </h2>
      <p
        className={`${subTitleClass} lg:w-[75%] md:w-full sm:w-full xs:w-full text-gray_2 lg:text-[1rem] md:text-[1rem] sm:text-[0.75rem] xs:text-[0.75rem] font-[500]`}>
        {data?.description}
      </p>
    </div>
  );
};

export default OurMissionTitle;
