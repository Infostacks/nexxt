import React from "react";
import WhyUsSection from "../WhyUsSection";
import FaqsSection from "./FaqsSection";
import {
  businessProps,
  faqsSummaries,
  faqsDetails,
  whyUsProps,
  buildAndVisualizeProps,
  workNumbersProps,
  customDevIndustriesProps,
  introBannerProps,
} from "../../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment";
import CustomSoftware from "../Custom Software/CustomSoftware";
import BusinessCustomCard from "../Global Components/BusinessCustomCard";
import BuildAndVisualize from "../Global Components/BuildAndVisualize";
import EmergingTechnologies from "../Global Components/EmergingTechnologies";
import WorkNumbers from "../Global Components/WorkNumbers";
import Business from "../Global Components/Business";
import { BusinessCustomCardprops, emergingTechnologiesProps } from "../../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment";
import CustomDevIndustries from "../Custom Dev Industries/CustomDevIndustries";
import img from "../../assets/images/logo/NX black A.png"
import Header from "../Header/Header";
import SideBanner from "../Global Components/SideBanner";
import Box from "@mui/material/Box";
import IntroBanner from "../Global Components/IntroBanner";
import ConsultForm from "../Global Components/ConsultForm";

const IphoneAppDevelopment = () => {
  return (
    <>
      <Header logourl={img} />
      <Box
        // border={2}
        sx={{
          pt: { xs: "0px", md: "50px", xl: "100px" },
          pb: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // bgcolor: "#f8f8fb",
          backgroundColor: "#f8f8fb",
          flexDirection: { xs: "column", md: "row", xl: "row" }
        }}
      >

        <IntroBanner {...introBannerProps} />
        <ConsultForm />

      </Box>
      {/* <CustomSoftware /> */}
      <CustomDevIndustries {...customDevIndustriesProps} />
      <Business {...businessProps} />
      <BusinessCustomCard {...BusinessCustomCardprops} />
      <WhyUsSection {...whyUsProps}></WhyUsSection>
      <BuildAndVisualize {...buildAndVisualizeProps} />
      <EmergingTechnologies {...emergingTechnologiesProps} />
      <WorkNumbers {...workNumbersProps} />
      <FaqsSection
        heading1="Concerns Regarding Cross Platform App Development?"
        heading2="Our responses to your frequently asked questions are provided below "
        faqsummaries={faqsSummaries}
        faqDetails={faqsDetails}
      ></FaqsSection>
      <SideBanner />
    </>
  );
};

export default IphoneAppDevelopment;

