import React from 'react'
import { Box, Grid, Typography, useTheme } from "@mui/material"
import CustomButton from './CustomButton'
import ContactDialog from './ContactDialog'
import mobileAppDevelopmentImg from "../../assets/images/Locations/MobileAppDevelopment.png"
const RevolutionaryDevelopment = () => {
    const theme = useTheme()
    return (
        <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} py={5}>
            <Grid item md={5} xl={4} display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} ml={5}>
                <Box>
                    <Typography variant='h4'>
                        Revolutionary Mobile App Development In New York City
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Typography variant='subtitle1'>
                        Tekrevol provides quality-driven mobile app development solutions in New York City. Developing digital products and brands that demand attention and engage your audience, our teams are dedicated to mobile app development and app marketing strategists, we at Tekrevol collaborate globally and help start-ups and enterprises find their mark in the digital space.
                    </Typography>
                </Box>
                <Box mt={1}>
                    <ContactDialog bgColor={`${theme.palette.background.default}`} />
                </Box>
            </Grid>
            <Grid item md={5} xl={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <img src={mobileAppDevelopmentImg} alt="" />
            </Grid>

        </Grid>
    )
}

export default RevolutionaryDevelopment