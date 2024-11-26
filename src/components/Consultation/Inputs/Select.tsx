"use client";
import { MotionProps } from "framer-motion";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { motion } from "framer-motion";
type options = {
  id: number;
  title: string;
};
interface InputSelectProps {
  label?: string;
  id: string;
  options: options[];
  register: UseFormRegisterReturn;
  placeholder: string;
  error?: FieldError;
  motionProps?: MotionProps;
}

const Select: React.FC<InputSelectProps> = ({
  label,
  id,
  options,
  register,
  error,
  placeholder,
  motionProps,
}) => {
  return (
    <motion.div {...motionProps} className="w-full">
      {label && (
        <label className="label label_form" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <select
        className={`${
          error ? "input_form_error" : "input_form"
        } select select-bordered w-full  lg:select-md md:select-md sm:select-sm xs:select-sm`}
        id={id}
        {...register}>
        <option defaultValue={placeholder} disabled selected>
          {placeholder}
        </option>
        {options.map((el) => (
          <option value={el.title} key={el.id}>
            {el.title}
          </option>
        ))}
      </select>
      <span className="text-red-500 text-[12px] mt-2">{error?.message}</span>
    </motion.div>
  );
};

export default Select;
