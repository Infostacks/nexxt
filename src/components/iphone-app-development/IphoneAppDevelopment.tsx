import React from "react";
import CustomButton from "../CustomButton";
import CustomDevCard from "../Card/CustomDevCard";
import WhyUsSection from "../WhyUsSection";
import FaqsSection from "./FaqsSection";
import {
  faqsSummaries,
  faqsDetails,
  whyUsProps,
  buildAndVisualizeProps,
  workNumbersProps,
} from "../../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment";
import CustomSoftware from "../Custom Software/CustomSoftware";
import BusinessCustomCard from "../Global Components/BusinessCustomCard";
import BuildAndVisualize from "../Global Components/BuildAndVisualize";
import EmergingTechnologies from "../Global Components/EmergingTechnologies";
import WorkNumbers from "../Global Components/WorkNumbers";
import Business from "../Global Components/Business";
import CustomDevIndustries from "../Custom Dev Industries/CustomDevIndustries";

const IphoneAppDevelopment = () => {
  return (
    <>
      <CustomSoftware />
      <CustomDevIndustries/>
      <Business heading1="Industry-Leading Custom Software Development Solutions" heading2="Enabling Businesses to Set Up & Expand Their" heading3="Digital Footprint" subtitle1="Our dedicated team of iPhone app developers taps into the innovative world of iPhone mobile applications with the right development tools and technologies to enable you to thrive in the competitive iOS mega-market." subtitle2="At TekRevol, our custom software solutions are focused on providing modern businesses to set up their digital footprint and help established businesses and organizations expand their reach around the globe." subtitle3="Our experience with all these industries has made us understand the ever-changing demands in the private and public sectors. Our solutions have passed the test of time. We build software programs that ensure your success."/>
      <BusinessCustomCard />
      <WhyUsSection></WhyUsSection>
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
