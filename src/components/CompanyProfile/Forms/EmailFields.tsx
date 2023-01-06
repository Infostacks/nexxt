/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/formContext";
import React from "react";
import { Button, useTheme } from "@mui/material";

const EmailFields = ({ formStep, nextFormStep }: any) => {
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
      className={`${formStep === 1 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <label className="text-xl font-bold text-bgColor">
        What is your email? *
      </label>
      {/* <label className="text-md text-bgColor">We'll need this for later</label> */}

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
            className="w-full p-4 mr-16 drop-shadow-md  bg-opacity-75 text-bgColor placeholder:text-bgColor border-gray-200 rounded-lg border text-sm"
          />

          {errors.email && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              Email is required
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

export default EmailFields;
