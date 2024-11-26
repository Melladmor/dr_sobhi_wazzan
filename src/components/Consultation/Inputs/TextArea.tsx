import { MotionProps } from "framer-motion";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { motion } from "framer-motion";
interface InputTextareaProps {
  label?: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  motionProps?: MotionProps;
}

const TextArea: React.FC<InputTextareaProps> = ({
  label,
  id,
  placeholder,
  register,
  error,
  motionProps,
}) => {
  return (
    <motion.div {...motionProps} className="w-full">
      {label && (
        <label className="label label_form" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <textarea
        placeholder={placeholder}
        rows={5}
        className={`${
          error ? "textarea_error_from" : "textarea_from"
        } textarea textarea-bordered w-full`}
        id={id}
        {...register}></textarea>
      {error && (
        <span className="text-red-500 text-[12px] mt-2">{error.message}</span>
      )}{" "}
    </motion.div>
  );
};

export default TextArea;
