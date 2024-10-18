import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  isTextArea?: boolean;
}

const Input = ({
  id,
  label,
  placeholder,
  register,
  error,
  type,
}: InputProps) => {
  return (
    <div className="w-full">
      <label className="label label_form" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={`${
            error ? "input_form_error" : "input_form"
          } input input-bordered w-full `}
          id={id}
          {...register}
        />
        {error && (
          <span className="text-red-500 text-[12px] mt-2">{error.message}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
