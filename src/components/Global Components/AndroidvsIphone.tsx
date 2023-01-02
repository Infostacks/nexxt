import React from 'react'
import { Box, Typography } from "@mui/material"
import andIphImg from "../../assets/images/Locations/andoir-iphone.png"
const AndroidvsIphone = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={4} sx={{ backgroundColor: "black", color: "white" }} >
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ width: { md: "90%", xl: "65%" } }}>

                <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"}>
                    <Typography variant='h4'>iPhone App Development vs. Android App Development</Typography>
                    <Typography variant='subtitle1' my={2}>Nowadays, mobile apps have become a ubiquitous part of our modern lives and they are everywhere. Whether we want to hail a ride to our office or check-up what our friends are up to, we turn to different mobile apps every single time we need to get a task done.</Typography>
                    <Typography variant='subtitle1' my={2}>The market is currently being dominated in large part by Android phones. These Android phones are set to account for a whopping 87% of global mobile devices by 2020. So, if you want to develop a mobile app for your business, your best bet is to develop one based on Android OS, owing to the massive business opportunity that this OS presents.</Typography>
                    <Typography variant='subtitle1' my={2}>On the other hand, iOS is no slouch either as what this OS lacks is absolute audience numbers, it more than makes up for it through the ROI it generates. Even though holding a very small audience share, it generated approximately $46.6 billion from its App Store revenues in 2018. This is almost double of what the Google Play Store could muster at $24.8 billion in revenue from 2018.</Typography>
                    <Typography variant='subtitle1' my={2}>But whatever OS you want to base your app on, Tekrevol is capable of building it. Our teams are well versed in the requirements of each platform. Whether it’s localization, preferred coding languages, sandboxing requirements or handling permission, our team knows the features that characterize each platform incredibly well. Once you hand over your project to Tekrevol, we take care of each aspect of the app from start to finish and deliver a fully functioning app that has high chances of achieving success on both these popular mobile OS platforms.</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <img src={andIphImg} alt="" />
                </Box>
            </Box>
        </Box>
    )
}

export default AndroidvsIphone