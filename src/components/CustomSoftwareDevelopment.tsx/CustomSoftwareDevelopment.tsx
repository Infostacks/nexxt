import React from 'react'
import { buildAndVisualizeProps, faqsDetails, faqsSummaries, whyUsProps, workNumbersProps } from '../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment'
import CustomDevIndustries from '../Custom Dev Industries/CustomDevIndustries'
import CustomSoftware from '../Custom Software/CustomSoftware'
import BuildAndVisualize from '../Global Components/BuildAndVisualize'
import Business from '../Global Components/Business'
import BusinessCustomCard from '../Global Components/BusinessCustomCard'
import EmergingTechnologies from '../Global Components/EmergingTechnologies'
import WorkNumbers from '../Global Components/WorkNumbers'
import FaqsSection from '../iphone-app-development/FaqsSection'
import WhyUsSection from '../WhyUsSection'
import { businessProps, emergingTechnologiesProps } from '../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment'

const CustomSoftwareDevelopment = () => {
    return (
        <>
            <CustomSoftware />
            <CustomDevIndustries />
            <Business {...businessProps} />
            <BusinessCustomCard />
            <WhyUsSection {...whyUsProps}></WhyUsSection>
            <BuildAndVisualize {...buildAndVisualizeProps} />
            <EmergingTechnologies {...emergingTechnologiesProps} />
            <WorkNumbers {...workNumbersProps} />
            <FaqsSection
                faqsummaries={faqsSummaries}
                faqDetails={faqsDetails}
            ></FaqsSection>
        </>
    )
}

export default CustomSoftwareDevelopment