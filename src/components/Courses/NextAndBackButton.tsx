"use client";

import { RefObject } from "react";

type Props = {
  nextRef: RefObject<HTMLButtonElement>;
  backRef: RefObject<HTMLButtonElement>;
};

const NextAndBackButton = ({ backRef, nextRef }: Props) => {
  return (
    <div className="flex items-center lg:gap-[35px] md:gap-[30px] sm:gap-[20px] xs:gap-[10px] ">
      <button
        className="lg:size-[60px] md:size-[40px] sm:size-[35px] xs:size-[30px] rounded-[50%] bg-bluePrimary text-white flex justify-center items-center disabled:bg-gray_1 disabled:cursor-not-allowed"
        ref={backRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:size-[24px] md:size-[22px] sm:size-[18px] xs:size-[16px]"
          viewBox="0 0 24 25"
          fill="none">
          <path
            d="M2.08 13.0397C2.13333 13.093 2.16 13.1464 2.16 13.1997L2.32 13.3597L8.32 19.3597C8.48 19.573 8.69333 19.6797 8.96 19.6797C9.22667 19.6797 9.46667 19.573 9.68 19.3597C9.89333 19.1464 10 18.9064 10 18.6397C10 18.373 9.89333 18.133 9.68 17.9197L5.36 13.6797H20.96C21.28 13.6797 21.5333 13.5864 21.72 13.3997C21.9067 13.213 22 12.9597 22 12.6397C22 12.3197 21.9067 12.0797 21.72 11.9197C21.5333 11.7597 21.28 11.6797 20.96 11.6797H5.36L9.68 7.35969C9.89333 7.14635 10 6.90635 10 6.63969C10 6.37302 9.90667 6.14635 9.72 5.95969C9.53333 5.77302 9.29333 5.67969 9 5.67969C8.70667 5.67969 8.48 5.75969 8.32 5.91969L2.32 11.9197C2.16 12.0797 2.08 12.1864 2.08 12.2397C2.02667 12.5064 2.02667 12.773 2.08 13.0397Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        className="lg:size-[60px] md:size-[40px] sm:size-[35px] xs:size-[30px] rounded-[50%] bg-bluePrimary text-white flex justify-center items-center disabled:bg-gray_1 disabled:cursor-not-allowed"
        ref={nextRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:size-[24px] md:size-[22px] sm:size-[18px] xs:size-[16px]"
          viewBox="0 0 24 25"
          fill="none">
          <path
            d="M21.92 12.2416C21.8667 12.1882 21.84 12.1349 21.84 12.0816L21.68 11.9216L15.68 5.92156C15.52 5.70823 15.3067 5.60156 15.04 5.60156C14.7733 5.60156 14.5333 5.70823 14.32 5.92156C14.1067 6.1349 14 6.3749 14 6.64156C14 6.90823 14.1067 7.14823 14.32 7.36156L18.64 11.6016H3.04C2.72 11.6016 2.46667 11.6949 2.28 11.8816C2.09333 12.0682 2 12.3216 2 12.6416C2 12.9616 2.09333 13.2016 2.28 13.3616C2.46667 13.5216 2.72 13.6016 3.04 13.6016H18.64L14.32 17.9216C14.1067 18.1349 14 18.3749 14 18.6416C14 18.9082 14.0933 19.1349 14.28 19.3216C14.4667 19.5082 14.7067 19.6016 15 19.6016C15.2933 19.6016 15.52 19.5216 15.68 19.3616L21.68 13.3616C21.84 13.2016 21.92 13.0949 21.92 13.0416C21.9733 12.7749 21.9733 12.5082 21.92 12.2416Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default NextAndBackButton;
