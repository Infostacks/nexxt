/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/formContext";
import React from "react";

const AboutCompany = ({ formStep, nextFormStep }: any) => {
  const { setFormValues }: any = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values: any) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div
      className={`${formStep === 9 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <label className="text-xl font-bold text-txtColor">
        Anything else we should know? (optional)
      </label>
      <label className="text-md text-txtColor">
        Feel free to tell us about your company or anything else here
      </label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            id="about_company"
            name="about_company"
            placeholder="Write Here..."
            type="text"
            // defaultValue={formData.about_company}
            // onChange={handleChange}
            className="w-full p-4 drop-shadow-md bg-primary bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
          />

          {errors.about_company && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              About Company is required
            </p>
          )}
        </div>
        <div className="flex flex-row-reverse">
          <button
            className="text-xl font-bold bg-secondary shadow-lg shadow-secondary py-3 px-5 rounded-xl drop-shadow-md mt-10"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutCompany;
