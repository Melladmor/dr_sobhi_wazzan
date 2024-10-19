"use client";
import React from "react";
import { expertiseData } from "../../../localdata/expertiseData";
import Button from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { ConsultaionDataI } from "../componetns";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "./Inputs/Input";
import Select from "./Inputs/Select";
import TextArea from "./Inputs/TextArea";
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
        <div className="flex items-center lg:gap-[20px] md:gap-[15px] sm:gap-[10px] xs:gap-[10px] lg:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px]">
          <Input
            id="firstname"
            label="First Name"
            placeholder="First Name"
            error={errors.firstname}
            register={register("firstname")}
            motionProps={{
              initial: {
                y: -150,
                opacity: 0,
                scale: 0.5,
              },
              whileInView: {
                y: 0,
                opacity: 1,
                scale: 1,
              },
              transition: {
                duration: 0.75,
              },
            }}
          />
          <Input
            id="lastname"
            label="Last Name"
            placeholder="Last Name"
            error={errors.lastname}
            register={register("lastname")}
            motionProps={{
              initial: {
                y: -175,
                opacity: 0,
                scale: 0.5,
              },
              whileInView: {
                y: 0,
                opacity: 1,
                scale: 1,
              },
              transition: {
                duration: 1,
              },
            }}
          />
        </div>
        <div className="flex items-center lg:gap-[20px] md:gap-[15px] sm:gap-[10px] xs:gap-[10px] lg:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px]">
          <Input
            id="email"
            label="Email"
            placeholder="Email"
            error={errors.email}
            register={register("email")}
            motionProps={{
              initial: {
                y: -200,
                opacity: 0,
                scale: 0.5,
              },
              whileInView: {
                y: 0,
                opacity: 1,
                scale: 1,
              },
              transition: {
                duration: 1.25,
              },
            }}
          />
          <Input
            id="phone"
            label="Phone"
            placeholder="Phone"
            error={errors.phone}
            register={register("phone")}
            motionProps={{
              initial: {
                y: -225,
                opacity: 0,
                scale: 0.5,
              },
              whileInView: {
                y: 0,
                opacity: 1,
                scale: 1,
              },
              transition: {
                duration: 1.5,
              },
            }}
          />
        </div>
        <div className="lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px] w-full">
          <Select
            id="category"
            label="Category"
            options={expertiseData?.expertise}
            placeholder="Category"
            register={register("category")}
            error={errors.category}
            motionProps={{
              initial: {
                y: -250,
                opacity: 0,
                scale: 0.5,
              },
              whileInView: {
                y: 0,
                opacity: 1,
                scale: 1,
              },
              transition: {
                duration: 1.75,
              },
            }}
          />
        </div>
        <div className="w-full lg:mb-[30px] md:mb-[20px] sm:mb-[12px] xs:mb-[10px]">
          <TextArea
            id="description"
            label="Description of the consultation..."
            placeholder="Description of the consultation..."
            register={register("description")}
            error={errors.description}
            motionProps={{
              initial: {
                y: -275,
                opacity: 0,
                scale: 0.5,
              },
              whileInView: {
                y: 0,
                opacity: 1,
                scale: 1,
              },
              transition: {
                duration: 2,
              },
            }}
          />
        </div>
      </div>
      <div>
        <Button
          motionProps={{
            initial: {
              y: 200,
              opacity: 0,
              scale: 0.5,
            },
            whileInView: {
              y: 0,
              opacity: 1,
              scale: 1,
            },
            transition: {
              duration: 1.75,
            },
          }}
          customClass="w-full text-white border-none rounded-lg bg-bluePrimary"
          bg="bluePrimary"
          type="submit">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ConsultationForm;
