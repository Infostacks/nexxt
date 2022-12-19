import React from 'react'
import { Box, Typography, Grid } from "@mui/material"
import CustomButton from './CustomButton'

export interface StartupChallengesComponentsProps {
    heading: string,
    startupChallengesArray: startupChallengesArray[],
    btnTitle: string
}
interface startupChallengesArray {
    title: string,
    subtitle1: string,
    subtitle2: string, 
    relatedIcon: any
}
const StartupChallengesComponents = ({ heading, startupChallengesArray, btnTitle }: StartupChallengesComponentsProps) => {
    // const startupChallengesArray = [
    //     {
    //         title: "The Tough Competition",
    //         subtitle1: "Establishing yourself in the crowded market of today can be a challenge. According to research, in August 2020, 111 thousand mobile apps were launched on Google Play Store, and 31.8 thousand apps were launched on Apple Store.",
    //         subtitle2: "Through these stats, you can quickly develop an idea of the competitive market your startup app would face. Plus, intriguing your audience to keep using your app is also a challenge."
    //     },
    //     {
    //         title: "Financing Your Startup App",
    //         subtitle1: "Apps can cost your startup brand a lot. And while you are primarily focusing on developing an engaging product or ensuring an innovative service, keeping the finances/investment in check is crucial.",
    //         subtitle2: "Getting your app financial in line will enable you to ensure a hassle-free app development process. Also, if you're looking for an investor for your app, read our blog,"
    //     },
    //     {
    //         title: "It Takes Time",
    //         subtitle1: "Depending on the app's complexity, structure, and functionality, it can take a significant amount of time to get it out to the masses.",
    //         subtitle2: "Moreover, outsourcing your app development will surely be a better option because, firstly, you'll have a team of professionals working on your app. Secondly, you'll have all the resources required to launch your app on time."
    //     },
    // ]
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} marginTop={5} >
            <Box width={"70vw"}>
                <Box my={5} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ ml: { xs: 0, md: 5, xl: 5 } }}>
                    <Typography variant='h4'>
                        {heading}
                    </Typography>
                </Box>
                {/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"} height={"60vh"} width={"40vw"}>
                {startupChallengesArray.map((obj, index) => (
                    <Box key={index} width={"40vw"}>
                        <Typography fontSize={"1.5vw"} className='font-bold'>
                            {obj.title}
                        </Typography>
                        <Typography>
                            {obj.subtitle1}
                        </Typography>
                        <Typography>
                            {obj.subtitle2}
                        </Typography>
                    </Box>
                ))}

            </Box> */}

                <Grid container display={"flex"} justifyContent={"start"} alignItems={"center"} >
                    {startupChallengesArray.map((obj, index) => (
                        <Grid item key={index} md={5} m={2} xs={12} sx={{ ml: { xs: 0, md: 5, xl: 5 } }}>


                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"}>
                                <Typography variant='h5'>
                                    {obj.title} {obj.relatedIcon}
                                </Typography>
                                
                            </Box>

                            <Typography variant='body1'>
                                {obj.subtitle1}
                            </Typography>
                            <Typography variant='body1'>
                                {obj.subtitle2}
                            </Typography>


                        </Grid>
                    ))}
                </Grid>
                <Box ml={5}>
                    <CustomButton text={btnTitle} buttonSize='8px 30px' />
                </Box>
            </Box>
        </Box>
    )
}

export default StartupChallengesComponents