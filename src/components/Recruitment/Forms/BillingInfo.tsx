import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/formContext";
import React from "react";

export default function BillingInfo({ formStep, nextFormStep }: any) {
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
      className={`${formStep === 2 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <h2>Billing Info</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`flex flex-col gap-3 mb-[1.5rem] text-xl`}>
          <label htmlFor="address">Address</label>
          <input
            className="w-full p-4 mr-16 drop-shadow-md bg-primary bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
            type="address"
            id="address"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              Address is required
            </p>
          )}
        </div>
        <div className="flex flex-row-reverse">
          <button className="text-xl font-bold bg-secondary shadow-lg shadow-secondary py-3 px-5 rounded-xl drop-shadow-md">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
