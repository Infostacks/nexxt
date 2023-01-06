import React, { useState } from "react";

import FormCard from "./FormCardButtons";
import CompanyName from "./Forms/CompanyName";
import CompanyUrl from "./Forms/CompanyUrl";
import PhoneNoField from "./Forms/PhoneNoField";
import EmailFields from "./Forms/EmailFields";
import Header from "../Header/Header";
import img from "../../assets/images/logo/NX black A.png";

const CompanyInfoIndex = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <>
      <Header logourl={img} />
      <div className="text-bgColor pt-20 h-full min-h-screen w-full flex justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center w-1/2">
          <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
            {formStep >= 0 && (
              <CompanyName formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 1 && (
              <EmailFields formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
              <PhoneNoField formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 3 && <CompanyUrl formStep={formStep} />}
          </FormCard>
        </div>
      </div>
    </>
  );
};

export default CompanyInfoIndex;
