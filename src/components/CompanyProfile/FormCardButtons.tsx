import { Button, useTheme } from "@mui/material";
import React from "react";
export default function FormCard({ children, currentStep, prevFormStep }: any) {
  const theme = useTheme();
  return (
    <div
      className={`border-[2px] p-[2rem] rounded-3xl flex flex-col gap-8 w-full h-full`}
    >
      {currentStep < 4 && (
        <div className="flex flex-row gap-5 items-center justify-center">
          {currentStep > 0 && (
            <Button
              sx={{
                fontWeight: "bold",
                // borderRadius: "10px",
                color: "white",
                padding: "10px",
                buttonSize: "7px 30px 7px 30px",
                background: `${theme.palette.background.default}`,
              }}
              // color="primary"
              className="font-bold"
              // className={`mr-[1rem] p-[0.3rem] cursor-pointer text-xl w-fit font-bold bg-secondary shadow-lg shadow-secondary  py-3 px-5 rounded-xl drop-shadow-md`}
              onClick={prevFormStep}
              type="button"
            >
              back
            </Button>
          )}

          <span className={`inline-block mb-[1rem] text-bgColor text-[1.2rem]`}>
            Step {currentStep + 1} of 4
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
