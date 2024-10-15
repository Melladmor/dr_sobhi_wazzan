"use client";
import React from "react";
import { expertiseData } from "../../../localdata/expertiseData";
import { expertiseI } from "../../../localdata/type";
import Button from "../Button";

type Props = {};

const ConsultationForm = (props: Props) => {
  return (
    <form className="lg:mb-[40px] md:mb-[30px] sm:mb-[15px] xs:mb-[10px]">
      <div className="form-control">
        <div className="flex items-center lg:gap-[20px] md:gap-[15px] sm:gap-[10px] xs:gap-[10px] lg:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px]">
          <div className="w-full">
            <label className="label label_form" htmlFor="firstname">
              <span className="label-text">First Name</span>
            </label>
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full input_form"
                name="firstname"
                id="firstname"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="label label_form" htmlFor="lastname">
              <span className="label-text">Last Name</span>
            </label>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full input_form"
                name="lastname"
                id="lastname"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center lg:gap-[20px] md:gap-[15px] sm:gap-[10px] xs:gap-[10px] lg:flex-nowrap md:flex-wrap sm:flex-wrap xs:flex-wrap lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px]">
          <div className="w-full">
            <label className="label label_form" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full input_form"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="label label_form" htmlFor="phone">
              <span className="label-text">Phone</span>
            </label>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full input_form"
                name="phone"
                id="phone"
              />
            </div>
          </div>
        </div>
        <div className="lg:mb-[30px] md:mb-[20px] sm:mb-[10px] xs:mb-[10px] w-full">
          <div>
            <label className="label label_form" htmlFor="category">
              <span className="label-text">Category</span>
            </label>
          </div>
          <select
            className="select select-bordered w-full input_form lg:select-md md:select-md sm:select-sm xs:select-sm"
            id="category"
            name="category">
            <option disabled selected>
              Category
            </option>
            {expertiseData?.expertise?.map((el: expertiseI) => {
              return <option value={el?.title}>{el?.title}</option>;
            })}
          </select>
        </div>
        <div className="w-full lg:mb-[30px] md:mb-[20px] sm:mb-[12px] xs:mb-[10px]">
          <div>
            <label className="label label_form" htmlFor="description">
              <span className="label-text">
                Description of the consultation
              </span>
            </label>
          </div>
          <div>
            <textarea
              placeholder="Description of the consultation..."
              rows={5}
              className="textarea textarea-bordered  placeholer_form lg:textarea-lg md:textarea-md sm:textarea-md xs-textarea-md w-full bg-transparent border border-black border-solid"
              name="description"
              id="description"></textarea>
          </div>
        </div>
      </div>
      <div>
        <Button
          customClass="w-full text-white border-none rounded-lg bg-bluePrimary"
          bg="bluePrimary">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ConsultationForm;
