import React from 'react'
import { Box, Typography } from "@mui/material"
import CustomButton from './CustomButton'
import StartupImgA from "../../assets/images/Startups/StartupOne.png"
import StartupImgB from "../../assets/images/Startups/StartupTwo.png"
import StartupImgC from "../../assets/images/Startups/StartupThree.png"

export interface GetStartUpAppComponentProps {
    heading1: string,
    subtitle1: string,
    subtitle2: string,
    heading2: string,
    subtitle3: string,
    subtitle4: string,
    subtitle5: string,
    btnTitle: string,
}
const GetStartUpAppComponent = ({ heading1, subtitle1, subtitle2, heading2, subtitle3, subtitle4, subtitle5, btnTitle }: GetStartUpAppComponentProps) => {
    const startupLinks = [
        "https://www.tekrevol.com/assets/images-new/landing/landing_page/pokemon_app.png",
        "https://www.tekrevol.com/assets/images-new/landing/landing_page/snapchat_app.png",
        "https://www.tekrevol.com/assets/images-new/landing/landing_page/uber_app.png"
    ]

    const mobileViewImgLinks = [
       StartupImgA,
       StartupImgB,
       StartupImgC
    ]
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} sx={{ marginTop: { xs: 2, md: 10 } }}>
            <Box width={"50vw"} textAlign={"center"} marginY={3}>
                <Typography variant='h4'>
                    {heading1}
                </Typography>
            </Box>
            <Box width={"40vw"} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
                {startupLinks.map((imgLink, index) => (
                    <Box key={index} margin={"5px"}>
                        <img src={imgLink} alt="img" style={{ height: "120px", width: "120px" }} />
                    </Box>
                ))}
            </Box>
            <Box width={"60vw"} textAlign={"center"} marginY={2}>
                <Typography variant='subtitle1'>
                    {subtitle1}
                </Typography>
            </Box>

            <Box width={"60vw"} textAlign={"center"} mb={2}>
                <Typography variant='subtitle1'>
                    {subtitle2}
                </Typography>
            </Box>

            <Box width={"50vw"} textAlign={"center"}>
                <Typography variant='h4'>
                    {heading2}
                </Typography>
            </Box>

            <Box width={"60vw"} textAlign={"center"} marginY={2}>
                <Typography variant='subtitle1'>
                    {subtitle3}
                </Typography>
            </Box>
            <Box width={"60vw"} textAlign={"center"} marginBottom={2}>
                <Typography variant='subtitle1'>
                    {subtitle4}
                </Typography>
            </Box>
            <Box width={"60vw"} textAlign={"center"} marginBottom={2}>
                <Typography variant='subtitle1'>
                    {subtitle5}
                </Typography>
            </Box>
            <Box>
                <CustomButton text={btnTitle} buttonSize='6px 25px' />
            </Box>

            <Box width={"80vw"} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} marginY={8} sx={{ flexDirection: { xs: "column", md: "row", xl: "row" } }}>
                {mobileViewImgLinks.map((imgLink, index) => (
                    <Box key={index} margin={"5px"}>
                        <img src={imgLink} alt="img" style={{ height: "368px", width: "180px" }} />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default GetStartUpAppComponent