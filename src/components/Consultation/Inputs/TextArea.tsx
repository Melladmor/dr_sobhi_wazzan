import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputTextareaProps {
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const TextArea: React.FC<InputTextareaProps> = ({
  label,
  id,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="w-full">
      <label className="label label_form" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
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
    </div>
  );
};

export default TextArea;
