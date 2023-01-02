import React from 'react'
import { Box, Typography } from "@mui/material"
import mapBgImg from "../../assets/images/Locations/bg.jpg"
import locLogo from "../../assets/images/Locations/locLogoA.png"
const LocationOnMap = () => {
    return (
        <Box display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ backgroundImage: `url(${mapBgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            height={"500px"}

        >
            <Box sx={{ backgroundColor: "#252626", borderRadius: 2, p: 5, mr: "50px" }}>
                <Typography variant='h4' color={"orangered"}> Meet Our Experts One-On-One </Typography>
                <Box display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"} >
                    <Typography variant='h5' color={"white"} width={"75%"}> 510 5th Ave 3rd Floor, New York,
                        NY 10036</Typography>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "rgb(243 122 32 / 20%)", borderRadius: "150px", m: 2 }}>
                <Box display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"} height={"280px"} width={"280px"} className="bounce-3" sx={{
                        animationDuration: "2s",
                        animationIterationCount: "infinite",
                        transformOrigin: "bottom"
                    }}>
                    <img src={locLogo} alt="" />
                </Box>
            </Box>
        </Box>
    )
}

export default LocationOnMap