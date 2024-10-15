import React from "react";
import { TitleI } from "../componetns";

type Props = TitleI;

const Title = ({ title, description }: Props) => {
  return (
    <div className="w-full text-center lg:mb-[3.75rem] md:mb-[3rem] sm:mb-[2.5rem] xs:mb-[2rem]">
      <h2 className="lg:text-[2.5rem] md:[2.5rem] sm:[2rem] xs:[2rem] text-bluePrimary font-[800] mb-[12px]">
        {title}
      </h2>
      {description ? (
        <p className="text-gray_2 lg:text-[1rem] md:text-[1rem] sm:text-[0.75rem] xs:text-[0.75rem] font-[500]">
          {description}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Title;
