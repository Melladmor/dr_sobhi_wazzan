import React from "react";
import { aboutUsData } from "../../../localdata/aboutUsData";
import AboutImage from "./AboutImage";
import AboutDescription from "./AboutDescription";

const About = () => {
  return (
    <div className="lg:py-[7.5rem] md:py-[6rem] sm:py-[4rem] xs:py-[3.5rem]">
      <div className="flex lg:flex-row-reverse md:flex-col sm:flex-col xs:flex-col  lg:justify-between lg:items-start md:items-center sm:items-center xs:items-center md:gap-4 sm:gap-4 xs:gap-4">
        <AboutImage imageLink={aboutUsData?.image} />
        <AboutDescription
          title={aboutUsData?.title}
          description={aboutUsData?.description}
        />
      </div>
    </div>
  );
};

export default About;
