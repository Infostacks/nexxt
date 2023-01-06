/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/CompanyProfileFormContext";
import React from "react";
import { Button, useTheme } from "@mui/material";

const PhoneNoField = ({ formStep, nextFormStep }: any) => {
  const theme = useTheme();

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
      <label className="text-xl font-bold text-bgColor">
        What is your Company Mobile Number? *
      </label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="tel"
            id="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
            className="w-full p-4 mr-16 drop-shadow-md bg-opacity-75 text-bgColor placeholder:text-bgColor border-gray-200 rounded-lg border text-sm"
          />

          {errors.Mobile && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              Company Mobile Number is required
            </p>
          )}
        </div>
        <div className="flex flex-row-reverse mt-10">
          <Button
            sx={{
              fontWeight: "bold",
              padding: "10px",
              // borderRadius: "10px",
              color: "white",
              buttonSize: "7px 30px 7px 30px",
              background: `${theme.palette.background.default}`,
            }}
            // color="primary"

            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PhoneNoField;
