import React from 'react'
import { Box, Typography } from "@mui/material"
import bgHowDevWorks from "../../assets/images/Locations/black-bg.jpg"
import CustomButton from './CustomButton'
const HowDevelopmentWorks = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            height={"300px"}

            sx={{ backgroundImage: `url(${bgHowDevWorks})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white" }}
        >
            <Typography variant='h4' mt={3}>How Mobile App Development Works?</Typography>
            <Typography variant='subtitle1' mt={5} sx={{ width: { md: "90%", xl: "65%" } }}>
                Nexxt delivers customized digital solutions for all businesses irrespective of their industry and scale of operations. Our diversely experienced teams and tech-centric approach are the backbone of our winning app development strategy that drives us to provide value and cater to each project according to their unique digital ecosystem and attention to every minute detail.
            </Typography>
            <CustomButton text='CONNECT WITH US' buttonSize='8px 20px' margin='25px' />
        </Box>
    )
}

export default HowDevelopmentWorks