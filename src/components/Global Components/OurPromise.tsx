import React from 'react'
import { Box, Typography } from "@mui/material"
import OurPromiseImg from "../../assets/images/Locations/OurPromiseImg.png"
import { Link } from 'react-router-dom'
const OurPromise = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} py={4}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ width: { md: "90%", xl: "65%" } }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
                    <img src={OurPromiseImg} alt="" />
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} mx={2}>
                    <Typography variant='h4'>What Does Tekrevol New York Promise?</Typography>
                    <Typography variant='subtitle1' my={2}>If you have an entrepreneur hidden inside you or if you own a startup, small business, or you represent an enterprise company in NYC, then we can help you scale and grow your business into a more recognized brand that’s ready to expand on the global stage.</Typography>
                    <Typography variant='subtitle1' my={2}>Any questions? Our team is always available to assist you, whether it’s an app development project, a query about NYC’s mobile app development market, or an ambiguity that you would like our experts opinion to help you make up your mind, please do not hesitate in reaching out to us.</Typography>
                    <Link to={"#"} style={{ color: "black" }}>
                        <Typography variant='h6'>Let’s discuss your project </Typography> </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default OurPromise