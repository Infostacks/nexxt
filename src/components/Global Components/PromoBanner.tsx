import React from 'react'
import { Link } from "react-router-dom"
import { Box, Typography } from "@mui/material"
const PromoBanner = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ backgroundColor: "black", }} position={"relative"} top={"0"} py={2}>
            <Link to={"/contact"} style={{ textDecoration: "none" }} onClick={() => { console.log("Link Click"); }}>
                <Typography sx={{ color: "white", }} className="font-bold"> Get Free Consultancy</Typography>
            </Link>
        </Box>
    )
}

export default PromoBanner
