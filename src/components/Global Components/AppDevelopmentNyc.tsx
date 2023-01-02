import React from 'react'
import { Box, Typography } from "@mui/material"
import AppDevNycBgImg from "../../assets/images/Locations/AppDevNYCBg.png"
import AppDevNycMobImg from "../../assets/images/Locations/AppDevNycMobImg.png"
import { Link } from 'react-router-dom'
const AppDevelopmentNyc = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={4}
            sx={{ backgroundImage: `url(${AppDevNycBgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}

        >
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ width: { md: "90%", xl: "65%" } }}>
            
            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} sx={{ color: "white" }}>
                <Typography variant='h4'>iPhone App Development Company in New York City</Typography>
                <Typography variant='subtitle1' mt={3}>We have powerful in-house teams of iOS app developers, designers, and App Store strategists in our NYC app development facility, who believe in continuous innovation and incorporate top technologies to build a meaningful digital product.</Typography>
                <Typography variant='subtitle1' mt={3}> We create value and strive for digital transformation driven by our innovative and creative approach, integrated solutions, and agile process. From planning to execution, we ensure our work meet the deadlines. We also ensure keeping room in our projects in-order to afford an optimum level of flexibility so that we can cater to your feedback before going to the next stage.</Typography>
                <Typography variant='subtitle1' mt={3}> For every iPhone app, our app developers in NYC ensure rigorous compliance with Apples development standards and practices. One of our recent iOS apps include iRemembered, featured in App Store with 100% ratings. It takes messaging to the next level with exciting features that provide convenience, and engagement for users like never before!</Typography>
                <Link to={"#"} style = {{color: "white"}}>
                    <Typography variant='h6' mt={2} > Talk to our app development experts </Typography> </Link>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <img src={AppDevNycMobImg} alt="" />
            </Box>
            </Box>
        </Box>
    )
}

export default AppDevelopmentNyc