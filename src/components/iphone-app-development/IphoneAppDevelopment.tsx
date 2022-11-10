import React from "react";
import WhyUsSection from "../WhyUsSection";
import FaqsSection from "./FaqsSection";
import {
  faqsSummaries,
  faqsDetails,
  whyUsProps,
  buildAndVisualizeProps,
  workNumbersProps,
  customDevIndustriesProps,
} from "../../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment";
import CustomSoftware from "../Custom Software/CustomSoftware";
import BusinessCustomCard from "../Global Components/BusinessCustomCard";
import BuildAndVisualize from "../Global Components/BuildAndVisualize";
import EmergingTechnologies from "../Global Components/EmergingTechnologies";
import WorkNumbers from "../Global Components/WorkNumbers";
import Business from "../Global Components/Business";
import { businessProps, emergingTechnologiesProps } from "../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment";
import CustomDevIndustries from "../Custom Dev Industries/CustomDevIndustries";

const IphoneAppDevelopment = () => {
  return (
    <>
      <CustomSoftware />
      <CustomDevIndustries {...customDevIndustriesProps}/>
      <Business {...businessProps}/>
      <BusinessCustomCard />
      <WhyUsSection {...whyUsProps}></WhyUsSection>
      <BuildAndVisualize {...buildAndVisualizeProps}/>
      <EmergingTechnologies {...emergingTechnologiesProps}/>
      <WorkNumbers {...workNumbersProps}/>
      <FaqsSection
        faqsummaries={faqsSummaries}
        faqDetails={faqsDetails}
      ></FaqsSection>
    </>
  );
};

export default IphoneAppDevelopment;

