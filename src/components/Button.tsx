"use client";

import { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
type Props = {
  bg?: string;
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
  withArrow?: boolean;
  customClass?: string;
  type?: "button" | "submit";
  motionProps?: MotionProps;
};

const Button = ({
  bg,
  color,
  children,
  onClick,
  withArrow,
  customClass,
  type,
  motionProps,
}: Props) => {
  return (
    <motion.button
      {...motionProps}
      type={type ? type : "button"}
      className={`btn btn-sm ${customClass} ${bg ? `bg-${bg}` : "bg-white"} ${
        color ? `text-${color}` : "text-black"
      }    lg:text-[1rem] md:text-[1rem] sm:text-[0.75rem] xs:text-[0.7rem] text-nowrap rounded-[30px] shadow-custom px-[1.5rem] lg:h-[3rem] md:h-[3rem] sm:h-[2.5rem] xs:h-[2.5rem]  font-[500] `}
      onClick={onClick}>
      <div
        className={`${
          withArrow ? "flex justify-between items-center gap-3" : ""
        }`}>
        <div>{children}</div>
        {withArrow ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 22"
              strokeWidth="1.5"
              stroke="currentColor"
              className="lg:size-5 md:size-4 sm:size-3 xs:size-3">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>
    </motion.button>
  );
};

export default Button;
