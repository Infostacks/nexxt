import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
} from "@mui/material";
import CustomButton from "../CustomButton";
import CustomDevCard from "../Card/CustomDevCard";
import WhyUsSection from "../WhyUsSection";
import FaqsSection from "./FaqsSection";
import { faqsSummaries, faqsDetails, devCardTitles, devCardDetails } from "../../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment";

const IntroBanner = () => {
  return (
    <>
      <Box mt="90px" height="413px" width="555px">
        <Typography variant="h3" mb="20px">
          iOS App Development Company That Builds
          <Link to="#">
            <Typography
              variant="h3"
              sx={{ color: "#f37a20", textDecoration: "underline" }}
            >
              Disruptive Apps
            </Typography>
          </Link>
        </Typography>

        <Typography mb="20px">
          Tekrevol develops next-gen iOS apps for businesses that ensure market
          disruption, growth, and scalability.
        </Typography>
        <Typography mb="20px" fontWeight="bold">
          Building enterprise-grade iOS apps since 2014, our app developers are
          well-versed in standardized technology stacks, and offer end-to-end
          iOS app development solutions that ensure leading-edge performance,
          features, and experiences.
        </Typography>

        <CustomButton
          text={"BUILD MY IOS App!"}
          buttonSize={"6px 35px"}
        ></CustomButton>
      </Box>

      <CustomDevCard devCardTitles={devCardTitles} devCardDetails={devCardDetails}></CustomDevCard>
      <WhyUsSection></WhyUsSection>
      <FaqsSection faqsummaries={faqsSummaries} faqDetails={faqsDetails}></FaqsSection>
    </>
  );
};

export default IntroBanner;
function handleChange(isExpanded: boolean, index: number): void {
  throw new Error("Function not implemented.");
}
