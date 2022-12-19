import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import CustomButton from './CustomButton'
import percentageImages from "../../assets/images/percentImageA.png"
import percentImagemd from "../../assets/images/percentimgmd.png"
const StartupStacksComponent = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} sx={{ backgroundColor: "#4C81BE" }}>
            <Box marginTop={5}>
                <Typography variant='h4' sx={{ color: "white" }}>
                    Apps Account for Over 80% of Mobile Time
                </Typography>
            </Box>


            <Box my={2} sx={{ backgroundImage: `url(${ isMatch ? percentImagemd : percentageImages})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: { xs: "300px", md: "681px" }, width: { xs: "300px", md: "864px" } }}>

            </Box>
        </Box>
    )
}

export default StartupStacksComponent