import React from 'react'
import {Box, Typography} from "@mui/material"
const PromoBanner = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{backgroundColor: "black", height: { xs: "2vh", md: "4vh", xl: "4vh"}}} position={"relative"} top={"0"} zIndex={"999"} py={2}> 
            <Typography sx={{color: "white"}} className="font-bold"> Get Free Consultancy</Typography>
        </Box>
    )
}

export default PromoBanner