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
import BusinessCustomCard from "../Global Components/BusinessCustomCard";
import BuildAndVisualize from "../Global Components/BuildAndVisualize";
import EmergingTechnologies from "../Global Components/EmergingTechnologies";
import WorkNumbers from "../Global Components/WorkNumbers";
import Business from "../Global Components/Business";

const IphoneAppDevelopment = () => {
  return (
    <>
      <CustomSoftware />
      <CustomDevCard
        devCardTitles={devCardTitles}
        devCardDetails={devCardDetails}
      ></CustomDevCard>
      <WhyUsSection></WhyUsSection>
      <Business />
      <BusinessCustomCard />
      <BuildAndVisualize />
      <EmergingTechnologies />
      <WorkNumbers />
      <FaqsSection
        faqsummaries={faqsSummaries}
        faqDetails={faqsDetails}
      ></FaqsSection>
    </>
  );
};

export default IphoneAppDevelopment;
