import { useFormData } from "../../hooks/formContext";
import React from "react";
export default function FormCompleted({ formStep }: any) {
  const data = useFormData();

  return (
    <div
      className={`${formStep === 11 ? "block" : "hidden"} flex flex-col gap-10`}
    >
      <h2 className="text-5xl">Thank you For Fill Up Form!</h2>

      {/* <pre className="text-2xl">{JSON.stringify(data)}</pre> */}
    </div>
  );
}
