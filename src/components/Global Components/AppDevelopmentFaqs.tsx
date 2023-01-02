import React from 'react'
import { Box, Grid, Typography, useTheme } from "@mui/material"
import FaqsSection from '../iphone-app-development/FaqsSection'
import { faqsDetails, faqsSummaries } from '../../assets/Strings/Services/LocationsStrings/NewYorkStrings'


const AppDevelopmentFaqs = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} padding={2} sx={{ width: { md: "90%", xl: "65%" } }}>
                <Typography variant='h4'>
                    How Mobile App Development Can Take Your Business To The Next Level?
                </Typography>
                <Typography mt={2} variant="subtitle1">
                    With over 4.57 billion mobile phone users around the world, you certainly do not want to miss out on the opportunity to get your brand on peoples’ devices. However, if you still doubt this won’t provide you with a goodenough ROI, then fathom this: In 2018, the global app store consumers spent $101 billion, signifying a 75% jump from 2016. At Tekrevol, our app development team uses the top development techniques and combine them with the latest technologies to create customer-driven mobile app solutions that boost engagement and enable businesses to meet their objectives.
                </Typography>
            </Box>
            <Box >
                <FaqsSection
                    faqsummaries={faqsSummaries}
                    faqDetails={faqsDetails} />

            </Box>
        </Box >
    )
}

export default AppDevelopmentFaqs