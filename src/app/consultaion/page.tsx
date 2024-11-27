import ConsultationForm from "@/components/Consultation/PageComponents/ConsultationForm";
import React from "react";

const Consultaion = () => {
  return (
    <div className="min-h-[100vh] bg-blurGradient_normal lg:px-[6rem] md:px-[6rem] sm:px-[2rem] xs:px-[1rem] custom_box_padding pb-[240px]">
      <div className="bg-white border border-solid lg:p-[2rem] md:p-[2rem] sm:p-[1rem] xs:p-[1rem] lg:mt-[9rem] md:mt-[8rem] sm:mt-[6rem] xs:mt-[4rem] rounded-xl">
        <div>
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
};

export default Consultaion;
