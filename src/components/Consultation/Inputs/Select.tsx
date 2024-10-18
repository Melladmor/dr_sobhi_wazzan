import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type options = {
  id: number;
  title: string;
};
interface InputSelectProps {
  label: string;
  id: string;
  options: options[];
  register: UseFormRegisterReturn;
  placeholder: string;
  error?: FieldError;
}

const Select: React.FC<InputSelectProps> = ({
  label,
  id,
  options,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <label className="label label_form" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
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
    </div>
  );
};

export default Select;
