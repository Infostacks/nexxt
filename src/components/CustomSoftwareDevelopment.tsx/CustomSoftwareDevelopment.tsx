import React from 'react'
import { buildAndVisualizeProps, BusinessCustomCardprops, faqsDetails, faqsSummaries, introBannerProps, whyUsProps, workNumbersProps } from '../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment'
import CustomDevIndustries from '../Custom Dev Industries/CustomDevIndustries'
import CustomSoftware from '../Custom Software/CustomSoftware'
import BuildAndVisualize from '../Global Components/BuildAndVisualize'
import Business from '../Global Components/Business'
import BusinessCustomCard from '../Global Components/BusinessCustomCard'
import EmergingTechnologies from '../Global Components/EmergingTechnologies'
import WorkNumbers from '../Global Components/WorkNumbers'
import FaqsSection from '../iphone-app-development/FaqsSection'
import WhyUsSection from '../WhyUsSection'
import { businessProps, emergingTechnologiesProps, customDevIndustriesProps } from '../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment'
import Header from '../Header/Header'
import img from "../../assets/images/logo/NX black A.png"
import SideBanner from '../Global Components/SideBanner'
import { Box } from '@mui/material'
import IntroBanner from '../Global Components/IntroBanner'
import ConsultForm from '../Global Components/ConsultForm'
// import CustomDevIndustriesBanner from '../../assets/Strings/CustomDevIndustriesStrings'

const CustomSoftwareDevelopment = () => {
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
                heading1="Want to know more about custom software development?"
                heading2="Here Are Our Answers To Your Frequently Asked Questions"
                faqsummaries={faqsSummaries}
                faqDetails={faqsDetails}
            ></FaqsSection>
            <SideBanner />
        </>
    )
}

export default CustomSoftwareDevelopment