import React from 'react'
import { Box, Typography } from "@mui/material"
import CustomButton from './CustomButton'
export interface HelpStartupsComponentsProps {
    heading: string,
    subtitle1: string,
    subtitle2: string,
    subtitle3: string,
    btnTitle: string
}
const HelpStartupsComponents = ({ heading, subtitle1, subtitle2, subtitle3, btnTitle }: HelpStartupsComponentsProps) => {
    const startupStepsLinks = [
        "https://www.tekrevol.com/assets/images-new/landing/landing_page/blueprint_step_1.png",
        "https://www.tekrevol.com/assets/images-new/landing/landing_page/blueprint_step_2.png",
        "https://www.tekrevol.com/assets/images-new/landing/landing_page/blueprint_step_3.png"
    ]
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} sx={{ backgroundColor: "#4C81BE" }}>
            <Box marginTop={5}>
                <Typography color={"white"} variant="h4">{heading}</Typography>
            </Box>
            <Box width={"50vw"} textAlign={"center"} mt={2}>
                <Typography color={"white"} variant="body1">{subtitle1}</Typography>
            </Box>
            <Box width={"50vw"} textAlign={"center"} my={2}>
                <Typography color={"white"} variant="body1">{subtitle2}</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} width={"50vw"} sx={{flexDirection: {xs: "column", md: "row", xl: "row"}}}>
                {startupStepsLinks.map((imgLink, index) => (
                    <Box key={index} m={1}>
                        <img src={imgLink} alt="" style={{
                            height: "198px", width:
                                "180"
                        }} />
                    </Box>
                ))}
            </Box>
            <Box width={"50vw"} textAlign={"center"} my={2}>
                <Typography color={"white"} variant="body1">
                    {subtitle3}
                </Typography>
            </Box>

            <Box my={4}>
                <CustomButton text={btnTitle} buttonSize='8px 25px' />
            </Box>
        </Box>
    )
}

export default HelpStartupsComponents