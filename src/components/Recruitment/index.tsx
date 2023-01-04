import React, { useState } from "react";

import FormCard from "./FormCard";

import {
  BillingInfo,
  JobTypeFields,
  DevelopersFields,
  EmailFields,
  PersonFields,
  TypeOfDeveloper,
  PhoneNoField,
  RequiredSkills,
  HourlyRate,
  AboutCompany,
  FindUs,
} from "./Forms";
import FormCompleted from "./FormCompleted";
import Header from "../Header/Header";
import img from "../../assets/images/logo/NX black A.png";

const RecruitmentInfo = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <>
      <Header logourl={img} />
      <div className="bg-bgColor text-txtColor pt-20 h-full min-h-screen w-full flex justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center w-1/2">
          <h1 className="text-5xl">RHF Multi Step Form</h1>
          <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
            {formStep >= 0 && (
              <PersonFields formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 1 && (
              <EmailFields formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
              <BillingInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 3 && (
              <JobTypeFields formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 4 && (
              <DevelopersFields
                formStep={formStep}
                nextFormStep={nextFormStep}
              />
            )}
            {formStep >= 5 && (
              <TypeOfDeveloper
                formStep={formStep}
                nextFormStep={nextFormStep}
              />
            )}
            {formStep >= 6 && (
              <PhoneNoField formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 7 && (
              <RequiredSkills formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 8 && (
              <HourlyRate formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 9 && (
              <AboutCompany formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 10 && (
              <FindUs formStep={formStep} nextFormStep={nextFormStep} />
            )}

            {formStep >= 11 && <FormCompleted formStep={formStep} />}
          </FormCard>
        </div>
      </div>
    </>
  );
};

export default RecruitmentInfo;
