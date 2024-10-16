import Title from "../Title/Title";
import ConsultationForm from "./ConsultationForm";

const Consultation = () => {
  return (
    <div>
      <Title
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt  fames quisque mauris at diam."
        title="Request a consultation"
      />
      <div className="w-full rounded-[10px] shadow-consultation_shadow lg:px-[70px] md:px-[40px] sm:px-[40px] xs:px-[20px] py-[20px] bg-white">
        <div className="lg:mb-[35px] md:mb-[30px] sm:mb-[25px] xs:mb-[20px]">
          <h3 className="text-[#0D0D0D] lg:text-[23px] md:text-[21px] sm:text-[19px] xs:text-[17px] font-[500] lg:mb-[10px] md:mb-[10px] sm:mb-[8px] xs:mb-[8px]">
            Discover our solutions
          </h3>
          <p className="text-gray_2 text-[14px] font-[275]">
            We will get back to you as soon as we can
          </p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  );
};

export default Consultation;
