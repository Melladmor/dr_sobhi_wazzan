import React from "react";
import Title from "../Title/Title";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div>
      <Title title="Let's Hear What They Says" />
      <div>
        <div className="lg:block md:block sm:hidden xs:hidden lg:text-[100px] md:text-[80px] text-bluePrimary font-[800] font-mono">
          “
        </div>
        <div className="lg:block md:block sm:hidden xs:hidden lg:text-[100px] md:text-[80px] text-bluePrimary font-[800] font-mono">
          “
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
