import React from "react";

type Props = {
  title: string;
};

const ConsultationTiltes = ({ title }: Props) => {
  return (
    <div>
      <h6 className="px-2 capitalize lg:text-[1.5rem] md:[1.5rem] sm:[1rem] xs:[1rem] text-gray_2 font-[800]  mb-[12px]">
        {title}
      </h6>
      <div className="mx-2 w-[200px] h-[3.7px] bg-blueSecondary rounded-[1.8px]lg:mt-[20px] md:mt-[15px] sm:mt-[10px] xs:mt-[5px]"></div>
    </div>
  );
};

export default ConsultationTiltes;
