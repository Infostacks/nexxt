import React from 'react'
import { Box, Typography } from "@mui/material"
import CustomButton from '../Global Components/CustomButton'

export interface CustomDevIndustriesBannerProps {
    heading1: string;
    heading2: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    btntitle: string
}
const CustomDevIndustriesBanner = ({ heading1, heading2, subtitle1, subtitle2, subtitle3, btntitle } : CustomDevIndustriesBannerProps ) => {
    return (
        <Box display={"flex"} justifyContent={"start"} alignItems={"start"} flexDirection={"column"} textAlign={"justify"} sx={{ width: { xs: "370px", md: "500px", xl: "500px" }, paddingX: { xs: 2 } }}>

            <Typography variant='body1' sx={{ fontSize: "20px", color: "#7a7a7a" }}>
                {heading1}
            </Typography>

            <Typography variant='h4'>
                {heading2}
            </Typography>

            <Typography variant='body1' sx={{mt: "10px" }}>
                {subtitle1}
            </Typography>

            <Typography variant='body1' sx={{mt: "10px" }}>
                {subtitle2}
            </Typography>

            <Typography variant='body1' sx={{mt: "10px" }}>
                {subtitle3}
            </Typography>

            <Box mt={"20px"}>

                <CustomButton
                    text={btntitle}
                    buttonSize={"6px 35px"}
                ></CustomButton>
            </Box>
        </Box>
    )
}

export default CustomDevIndustriesBanner