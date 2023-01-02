import React from 'react'
import { Box, Typography } from "@mui/material"
import ecomTransactionPic from "../../assets/images/ecomTransactionPic.png"

const EcommerceTransaction = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"column"}></Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <img src={ecomTransactionPic} alt="" />
            </Box>
        </Box>
    )
}

export default EcommerceTransaction