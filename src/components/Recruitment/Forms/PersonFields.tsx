import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/formContext";
import React from "react";

const PersonFields = ({ formStep, nextFormStep }: any) => {
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
      className={`${formStep === 0 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <label className="text-xl font-bold text-txtColor">
        What’s your name? *
      </label>
      <label className="text-md text-txtColor">Nice to meet you!</label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("fullname", {
              required: true,
            })}
            id="fullname"
            name="fullname"
            placeholder="Your Name"
            type="text"
            // defaultValue={formData.fullname}
            // onChange={handleChange}
            className="w-full p-4 mr-16 drop-shadow-md bg-primary bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
          />

          {errors.fullname && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              Please enter your name
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

export default PersonFields;
