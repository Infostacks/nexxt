import React from 'react'
import { Box, Typography, Grid } from "@mui/material"
import successfullAppImg from "../../assets/images/Locations/successfulApp.png"
const LaunchSuccessfulApp = () => {
    return (
        <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} py={5} spacing={1}>
            <Grid item md={6} xl={4} display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"}>
                <Typography variant='h5' mt={5}>How to Launch a Successful App?</Typography>
                <Typography variant='subtitle1' mt={3}>
                    The goal of our mobile app development team in NYC is to launch your app in the market and ensure it drives consistent downloads, maintains high user engagement, and retention rates
                </Typography>
                <Typography variant='subtitle1' mt={3}>
                    Attracting attention of potentials users and standing out in the app world can be challenging, especially when its your first product. Hence, Nexxt team guides you at every step of the way to help you upload your app to Google Play Store or App Store. We prepare a launch strategy for your app, creating multiple touchpoints, building awareness, and powering a compelling first impression.
                </Typography>

            </Grid>
            <Grid item md={4} xl={4}>
                <img src={successfullAppImg} alt="" />
            </Grid>
        </Grid>
    )
}

export default LaunchSuccessfulApp