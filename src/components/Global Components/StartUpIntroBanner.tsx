import React from 'react'
import { Box, Typography } from "@mui/material"
import CustomButton from './CustomButton'
import startupBannerBackground from "../../assets/images/startupIntroBackground.png"
export interface StartUpIntroBannerProps {
    heading1: string,
    heading2: string,
    btnTitle: string,
}

const StartUpIntroBanner = ({ heading1, heading2, btnTitle }: StartUpIntroBannerProps) => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} sx={{ height: { md: "350px", xl: "500px" }, backgroundColor: "#009EFF", zIndex: "0", marginTop: { xs: 2, md: 9 }, paddingY: { xs: 3 }, backgroundImage: `url(${startupBannerBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Box width={"50vw"} textAlign={"center"}>
                <Typography variant='h4' sx={{ color: "white" }} >{heading1}</Typography>
            </Box>
            <Box width={"65vw"} textAlign={"center"} mt={2}>
                <Typography variant='body1' sx={{ color: "white" }} >{heading2}</Typography>
            </Box>
            <Box mt={2}>
                <CustomButton text={btnTitle} buttonSize='8px 25px' />
            </Box>
        </Box>
    )
}

export default StartUpIntroBanner