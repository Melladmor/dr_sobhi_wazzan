"use client";
import { useRouter } from "next/navigation";
import Button from "../Button";

const Consultation = () => {
  const router = useRouter();
  return (
    <div
      id="consultation"
      className="bg-blurGradient_normal custom_padding py-4">
      <div className="h-[60vh] text-white flex justify-center items-center flex-col text-center gap-[40px]">
        <div>
          <h2 className="capitalize lg:text-[2.5rem] md:[2.5rem] sm:[2rem] xs:[2rem] text-white font-[800] mb-[20px]">
            Get expert advice tailored to your needs
          </h2>
          <p className="text-gray_1 lg:text-[2rem] md:text-[2rem] sm:text-[1rem] xs:text-[1rem] font-[500]">
            Book your consultation with Dr. Wazzan
          </p>
        </div>
        <Button
          withArrow
          customClass="rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-blue-500"
          onClick={() => router.replace("/consultaion")}>
          Book Your Consultation.
        </Button>
      </div>
    </div>
  );
};

export default Consultation;
