"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ConsultaionDataI } from "@/components/componetns";
import Input from "../Inputs/Input";
import Select from "../Inputs/Select";
import { expertiseData } from "../../../../localdata/expertiseData";
import TextArea from "../Inputs/TextArea";
import Button from "@/components/Button";
import Radio from "../Inputs/Radio";
import ConsultationTiltes from "./ConsultationTiltes";

const ConsultationForm = () => {
  const schema = yup.object().shape({
    firstname: yup
      .string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters long"),
    lastname: yup
      .string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters long"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^\+[0-9]{10,15}$/,
        "Phone number must start with a country code and be 10-15 digits long"
      ),
    category: yup
      .string()
      .required("Please select a category")
      .notOneOf(["Category"], "Please choose a valid category"),
    description: yup
      .string()
      .required("Description is required")
      .test(
        "word-count",
        "Description must be between 10 and 100 words",
        (value) => {
          const wordCount = value ? value.split(/\s+/).length : 0;
          return wordCount >= 10 && wordCount <= 100;
        }
      ),
    duration: yup.string().required("Please select a duration"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultaionDataI>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ConsultaionDataI> = (data) => {
    console.log({ data });
    localStorage.setItem("consultationData", JSON.stringify(data));
  };

  return (
    <form
      className="lg:mb-[40px] md:mb-[30px] sm:mb-[15px] xs:mb-[10px]"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <div className="mb-[4rem]">
          <ConsultationTiltes title="Consultation Duration" />
          <Radio
            id="duration"
            options={[
              { value: "30", label: "30 Minutes", price: "100" },
              { value: "60", label: "1 Hour", price: "150" },
              { value: "120", label: "2 Houres", price: "300" },
            ]}
            register={register("duration")}
            error={errors.duration}
          />
        </div>
        <div>
          <ConsultationTiltes title="Personal Information" />
          <div className="px-2 mt-[12px]">
            <div className="flex items-center lg:gap-[20px] md:gap-[15px] sm:gap-[10px] xs:gap-[10px] lg:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px]">
              <Input
                id="firstname"
                placeholder="First Name"
                error={errors.firstname}
                register={register("firstname")}
              />
              <Input
                id="lastname"
                placeholder="Last Name"
                error={errors.lastname}
                register={register("lastname")}
              />
            </div>
            <div className="flex items-center lg:gap-[20px] md:gap-[15px] sm:gap-[10px] xs:gap-[10px] lg:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px]">
              <Input
                id="email"
                placeholder="Email"
                error={errors.email}
                register={register("email")}
              />
              <Input
                id="phone"
                placeholder="Phone"
                error={errors.phone}
                register={register("phone")}
              />
            </div>
            <div className="lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px] w-full">
              <Select
                id="category"
                options={expertiseData?.expertise}
                placeholder="Category"
                register={register("category")}
                error={errors.category}
              />
            </div>
            <div className="w-full lg:mb-[30px] md:mb-[20px] sm:mb-[12px] xs:mb-[10px]">
              <TextArea
                id="description"
                placeholder="Description of the consultation..."
                register={register("description")}
                error={errors.description}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          customClass="w-full text-white border-none rounded-lg bg-bluePrimary"
          bg="bluePrimary"
          type="submit">
          Proceed to Payment
        </Button>
      </div>
    </form>
  );
};

export default ConsultationForm;
