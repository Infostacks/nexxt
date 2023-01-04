import { useForm } from "react-hook-form";
import { useFormData } from "../../../hooks/formContext";
import React from "react";

const DevelopersFields = ({ formStep, nextFormStep }: any) => {
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
      className={`${formStep === 4 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <label className="text-xl font-bold text-txtColor">
        How many developers are you looking for? *
      </label>
      <label className="text-md text-txtColor">
        You can start with 1 or 10. We have the talent ready!
      </label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="relative">
            <input
              className="hidden group peer"
              {...register("developerNeeded", {
                required: true,
              })}
              type="radio"
              name="developerNeeded"
              value="UI/UX"
              id="UI/UX"
              //   defaultValue={formData.developerNeeded}
              //   onChange={handleChange}
            />

            <label
              className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-primary   peer-checked:ring-1 peer-checked:ring-blue-500"
              htmlFor="UI/UX"
            >
              <span className="text-lg">1-2</span>
            </label>

            <svg
              className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="relative">
            <input
              className="hidden group peer"
              {...register("developerNeeded", {
                required: true,
              })}
              type="radio"
              name="developerNeeded"
              value="Frontend"
              id="Frontend"
              //   defaultValue={formData.developerNeeded}
              //   onChange={handleChange}
            />

            <label
              className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-primary   peer-checked:ring-1 peer-checked:ring-blue-500"
              htmlFor="Frontend"
            >
              <span className="text-lg">2-5</span>
            </label>

            <svg
              className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="relative">
            <input
              className="hidden group peer"
              {...register("developerNeeded", {
                required: true,
              })}
              type="radio"
              name="developerNeeded"
              value="Backend"
              id="Backend"
              //   defaultValue={formData.developerNeeded}
              //   onChange={handleChange}
            />

            <label
              className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-primary   peer-checked:ring-1 peer-checked:ring-blue-500"
              htmlFor="Backend"
            >
              <span className="text-lg">Backend</span>
            </label>

            <svg
              className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {errors.developerNeeded && (
            <p
              className={`text-redColor text-[1.2rem] mt-[0.4rem] inline-block`}
            >
              Select 1 Developer Type
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

export default DevelopersFields;
