import React from "react";
import CustomButton from "../CustomButton";
import CustomDevCard from "../Card/CustomDevCard";
import WhyUsSection from "../WhyUsSection";
import FaqsSection from "./FaqsSection";
import {
  faqsSummaries,
  faqsDetails,
  devCardTitles,
  devCardDetails,
} from "../../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment";
import CustomSoftware from "../Custom Software/CustomSoftware";

const IphoneAppDevelopment = () => {
  return (
    <>
      <CustomSoftware/>
      <CustomDevCard
        devCardTitles={devCardTitles}
        devCardDetails={devCardDetails}
      ></CustomDevCard>
      <WhyUsSection></WhyUsSection>
      <FaqsSection
        faqsummaries={faqsSummaries}
        faqDetails={faqsDetails}
      ></FaqsSection>{" "}
    </>
  );
};

export default IphoneAppDevelopment;
