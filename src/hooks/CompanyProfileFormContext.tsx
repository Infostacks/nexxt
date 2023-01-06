import React from "react";
import { useState, createContext, useContext } from "react";

export const FormContext = createContext({} as any);

export default function CompanyFormProvider({ children }: any) {
  const [data, setData] = React.useState({});

  const setFormValues = (values: any) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };
  console.log("Form Data", data);
  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
