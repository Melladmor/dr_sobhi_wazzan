import ConsultationForm from "@/components/Consultation/PageComponents/ConsultationForm";
import React from "react";

const Consultaion = () => {
  return (
    <div className="min-h-[100vh] bg-blurGradient_normal px-[6rem] custom_box_padding">
      <div className="bg-white border border-solid p-[2rem] mt-[9rem] rounded-xl">
        <div className="">
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
};

export default Consultaion;
