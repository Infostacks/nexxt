import React from "react";
export default function FormCard({ children, currentStep, prevFormStep }: any) {
  return (
    <div
      className={`border-[2px] p-[2rem] rounded-3xl shadow-lg shadow-primary flex flex-col gap-8 w-full h-full`}
    >
      {currentStep < 10 && (
        <div className="flex flex-row gap-5 items-center justify-center">
          {currentStep > 0 && (
            <button
              className={`mr-[1rem] p-[0.3rem] cursor-pointer text-xl w-fit font-bold bg-secondary shadow-lg shadow-secondary  py-3 px-5 rounded-xl drop-shadow-md`}
              onClick={prevFormStep}
              type="button"
            >
              back
            </button>
          )}

          <span
            className={`inline-block mb-[1rem] text-txtColor text-[1.2rem]`}
          >
            Step {currentStep + 1} of 10
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
