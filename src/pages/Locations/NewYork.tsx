import React from 'react'
import { Box } from "@mui/material"
import img from "../../assets/images/logo/NX black A.png"
import Header from '../../components/Header/Header'
import IntroBanner from '../../components/Global Components/IntroBanner'
import ConsultForm from '../../components/Global Components/ConsultForm'
import { faqsDetails, faqsSummaries, introBannerProps } from '../../assets/Strings/Services/LocationsStrings/NewYorkStrings'
import RevolutionaryDevelopment from '../../components/Global Components/RevolutionaryDevelopment'
import OurClients from '../../components/Global Components/OurClients'
import AppDevelopmentFaqs from '../../components/Global Components/AppDevelopmentFaqs'
import HowDevelopmentWorks from '../../components/Global Components/HowDevelopmentWorks'
import LaunchSuccessfulApp from '../../components/Global Components/LaunchSuccessfulApp'
import LocationOnMap from '../../components/Global Components/LocationOnMap'
import AppDevelopmentProcess from '../../components/Global Components/AppDevelopmentProcess'
import AppDevelopmentNyc from '../../components/Global Components/AppDevelopmentNyc'
import AndroidAppDevNyc from '../../components/Global Components/AndroidAppDevNyc'
import AndroidvsIphone from '../../components/Global Components/AndroidvsIphone'
import OurPromise from '../../components/Global Components/OurPromise'
import AppDevTeam from '../../components/Global Components/AppDevTeam'
import FaqsSection from '../../components/iphone-app-development/FaqsSection'

const NewYork = () => {
    return (
        <>
            <Header logourl={img} />
            <Box
                // border={2}
                sx={{
                    pt: { xs: "0px", md: "70px", xl: "100px" },
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
            <RevolutionaryDevelopment />
            <OurClients />
            <AppDevelopmentFaqs />
            <HowDevelopmentWorks />
            <LaunchSuccessfulApp />
            <LocationOnMap />
            <AppDevelopmentProcess />
            <AppDevelopmentNyc />
            <AndroidAppDevNyc />
            <AndroidvsIphone />
            <OurPromise />
            <AppDevTeam />
            <FaqsSection
                heading2='Here your frequently asked questions'
                faqsummaries={faqsSummaries}
                faqDetails={faqsDetails}
            ></FaqsSection>
        </>
    )
}

export default NewYork