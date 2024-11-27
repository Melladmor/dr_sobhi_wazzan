import React from "react";
import Button from "../Button";

type Props = {};

const FooterBanner = (props: Props) => {
  return (
    <div className="lg:h-[200px] md:h-[200px] sm:h-[150px] xs:h-[150px] w-[85%] bg-blueGradient_dark absolute lg:top-[-25%] md:top-[-25%] sm:top-[-13%] xs:top-[-13%] translate-y-[18%] left-[50%] translate-x-[-50%] rounded-[20px] lg:px-[62px] md:px-[50px] sm:px-[35px] xs:px-[25px] flex  items-center">
      <div className="flex justify-between items-center lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-[15px]">
        <h5 className="lg:text-[40px] md:text-[22px] sm:text-[22px] xs:text-[16px] font-[800] text-white lg:w-[60%] md:w-[80%] lg:text-start md:text-start sm:text-center xs:text-center">
          Be part of innovation in the world of accounting
        </h5>
        <Button customClass="lg:h-[100px] lg:w-[300px] md:h-[60px] md:w-[200px] sm:h-[40px] sm:w-[200px] xs:h-[40px] xs:w-[200px] text-bluePrimary lg:rounded-[20px] md:rounded-[18px] sm:rounded-lg xs:rounded-lg">
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default FooterBanner;
