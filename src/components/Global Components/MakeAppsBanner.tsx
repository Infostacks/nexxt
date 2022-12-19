import React from 'react'
import { Box, Typography } from "@mui/material"
import CustomButton from './CustomButton'
const MakeAppsBanner = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} sx={{ backgroundColor: "#f7f7f7" }} py={5}>
            <Box>
                <Typography variant='h4'>
                    Nexxt Just Happens To Make Great Apps
                </Typography>
            </Box>
            <Box my={2}>
                <CustomButton text='WANT ONE FOR YOUR BRAND' buttonSize='8px 25px'/>
            </Box>
        </Box>
    )
}

export default MakeAppsBanner