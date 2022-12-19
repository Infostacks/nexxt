import React from 'react'
import { Box, Typography } from "@mui/material"
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import crewmamaLogo from "../../assets/images/Startups/logos/crewmama.png"
import bookingLogo from "../../assets/images/Startups/logos/Booking.png"
import kanopyLogo from "../../assets/images/Startups/logos/kanopy.png"

const StartupClientsServed = () => {
    const servedStartups = [
        {
            imgLink: crewmamaLogo,
            title: "Crewmama.com"
        },
        {
            imgLink: bookingLogo,
            title: "Booking.com"
        },
        {
            imgLink: kanopyLogo,
            title: "Kanopy.com"
        },
    ]
    
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} py={5} sx={{ backgroundColor: "#f7f7f7" }}>
            <Box my={2}>
                <Typography variant='h4'>
                    Startup App Clients We have Served
                </Typography>
            </Box>
            <Box width={"50vw"} textAlign={"center"} mb={4}>
                <Typography variant='body1'>
                    Over the years, we have paved the way for several startup brands with our app development.
                </Typography>
            </Box>

            <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} width={"50vw"} sx={{ flexDirection: { xs: "column", md: "row", xl: "row" } }}>
                {servedStartups.map((obj, index) => (
                    <Box key={index} mx={5} textAlign={"center"}>
                        <img src={obj.imgLink} alt="" style={{ height: "144px", width: "144px" }} />
                        <Typography mt={2} className="font-bold" fontSize={"1.5vw"}>{obj.title}</Typography>
                        <Link to="#" style={{ textDecoration: "none" }}>
                            <Typography color={"red"} variant="subtitle1">Read Case Study</Typography>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default StartupClientsServed