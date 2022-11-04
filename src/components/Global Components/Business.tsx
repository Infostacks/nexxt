import React from 'react'
import { Box, Typography, Stack } from "@mui/material"
import BusinessCustomCard from './BusinessCustomCard'
import CustomButton from './CustomButton'
import BuildAndVisualize from './BuildAndVisualize'
import EmergingTechnologies from './EmergingTechnologies'
const Business = () => {
    return (
        <Box sx={{ height: "auto", backgroundColor: "#F8F8FB", paddingY: 10, paddingX: 12, }}>
            <Box>
                <Typography variant='h4' sx={{ color: "#B2B2B2" }}>Industry-Leading Custom Software Development Solutions</Typography>
                <Typography variant='h6' sx={{ fontWeight: "bold", fontSize: "50px" }}>Enabling Businesses to Set Up & Expand Their <Typography variant='h6' sx={{ color: "#F57328", fontWeight: "bold", fontSize: "50px" }}>Digital Footprint</Typography> </Typography>
            </Box>
            <Stack spacing={2} sx={{}}>
                <Typography variant="subtitle1" sx={{}}>
                    Our dedicated team of iPhone app developers taps into the innovative world of iPhone mobile applications with the right development tools and technologies to enable you to thrive in the competitive iOS mega-market.
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                    At TekRevol, our custom software solutions are focused on providing modern businesses to set up their digital footprint and help established businesses and organizations expand their reach around the globe.
                </Typography>
                <Typography variant="subtitle1" sx={{}}>
                    Our experience with all these industries has made us understand the ever-changing demands in the private and public sectors. Our solutions have passed the test of time. We build software programs that ensure your success.
                </Typography>
            </Stack>

        </Box>
    )
}

export default Business