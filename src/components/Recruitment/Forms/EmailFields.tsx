/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/formContext";
import React from "react";

const EmailFields = ({ formStep, nextFormStep }: any) => {
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
      className={`${formStep === 1 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <label className="text-xl font-bold text-txtColor">
        What is your email? *
      </label>
      <label className="text-md text-txtColor">We'll need this for later</label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
            })}
            // defaultValue={formData.fullname}
            // onChange={handleChange}
            className="w-full p-4 mr-16 drop-shadow-md bg-primary bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
          />

          {errors.email && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              Email is required
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

export default EmailFields;
