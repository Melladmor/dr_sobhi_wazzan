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
    <motion.div {...motionProps} className="w-full">
      <div className="flex flex-col space-y-1">
        {options?.map((option) => (
          <label key={option.value} className="px-2 py-3 rounded-md">
            <div
              className={`${
                error ? "radio_error" : "radio_normal"
              } flex items-center justify-between px-2 py-3 rounded-md`}>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id={`${id}-${option.value}`}
                  value={option.value}
                  {...register}
                  className="radio"
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