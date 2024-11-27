"use client";
import { MotionProps } from "framer-motion";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface RadioButtonProps {
  id: string;
  options: { value: string; label: string; price: string }[];
  register: UseFormRegisterReturn;
  error?: FieldError;
  motionProps?: MotionProps;
}

const Radio = ({
  id,
  options,
  register,
  error,
  motionProps,
}: RadioButtonProps) => {
  return (
    <motion.div
      {...motionProps}
      className="w-full lg:text-[14px] md:text-[12px] sm:text-[12px] xs:text-[12px]">
      <div className="flex flex-col space-y-1">
        {options?.map((option) => (
          <label key={option.value} className="px-2 py-3 rounded-md">
            <div
              className={`${
                error ? "radio_error" : "radio_normal"
              } flex items-center justify-between lg:px-2 md:px-2 sm:px-1 xs:px-1  lg:py-3 md:py-3 sm:py-2 xs:py-2 rounded-md`}>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id={`${id}-${option.value}`}
                  value={option.value}
                  {...register}
                  className="radio lg:radio md:radio-md sm:radio-sm xs:radio-sm"
                />
                <span>{option.label}</span>
              </div>
              <div>{option.price} $</div>
            </div>
          </label>
        ))}
      </div>
      {error && (
        <span className="text-red-500 text-[12px] mt-2 px-2">
          {error.message}
        </span>
      )}
    </motion.div>
  );
};

export default Radio;
