/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/formContext";
import React from "react";

const PhoneNoField = ({ formStep, nextFormStep }: any) => {
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
      className={`${formStep === 6 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <label className="text-xl font-bold text-txtColor">
        What is your Mobile Number? *
      </label>
      <label className="text-md text-txtColor">We'll need this for later</label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            className="w-full p-4 mr-16 drop-shadow-md bg-primary bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
          />

          {errors.Mobile && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              Mobile Number is required
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

export default PhoneNoField;
