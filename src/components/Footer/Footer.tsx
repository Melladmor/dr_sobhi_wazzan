import React from "react";
import CustomBox from "../CustomBox";
import FooterLogo from "./FooterLogo";
import Navs from "../Header/Navs";
import FooterSectionTitle from "./FooterSectionTitle";
import Button from "../Button";
import { footerData } from "../../../localdata/footerData";
import { SocialMediaT } from "../../../localdata/type";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <CustomBox className="bg-blurGradient_normal pt-[108px]">
      <div className="flex flex-col lg:gap-[40px] md:gap-[30px] sm:gap-[20px] xs:gap-[20px]">
        <div>
          <FooterLogo />
        </div>
        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between">
          <FooterSectionTitle title="sections" />
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-[16px]">
            <Navs data={footerData?.sections} />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between">
          <FooterSectionTitle title="Contact Support" />
          <Button
            withArrow
            customClass="text-bluePrimary lg:w-[284px] md:w-full sm:w-full xs:w-full lg:rounded-[30px] md:rounded-lg sm:rounded-lg xs:rounded-lg sm:h-[2rem] xs:h-[2rem] sm:mt-3 xs:mt-3">
            Send Us Message
          </Button>
        </div>
        <div>
          <FooterSectionTitle title="Find us on social media" />
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between">
            <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] font-[400] sm:mt-2 xs:mt-2 text-white capitalize">
              Follow us on social media to get our latest news and updates
            </p>
            <div className="flex sm:justify-between xs:justify-between md:justify-start lg:justify-start gap-[16px] sm:mt-2 xs:mt-2">
              {footerData?.socialMedia?.map((el: SocialMediaT) => {
                return <FooterSocial key={el?.id} {...el} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </CustomBox>
  );
};

export default Footer;
