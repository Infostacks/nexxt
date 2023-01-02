import React from 'react'
import { Box, Typography, Grid } from "@mui/material"
import processImg1 from "../../assets/images/Locations/AppDevelopmentProcess/1.png"
import processImg2 from "../../assets/images/Locations/AppDevelopmentProcess/2.png"
import processImg3 from "../../assets/images/Locations/AppDevelopmentProcess/3.png"
import processImg4 from "../../assets/images/Locations/AppDevelopmentProcess/4.png"
import processImg5 from "../../assets/images/Locations/AppDevelopmentProcess/5.png"
import processImg6 from "../../assets/images/Locations/AppDevelopmentProcess/6.png"
import processImg7 from "../../assets/images/Locations/AppDevelopmentProcess/7.png"
const AppDevelopmentProcess = () => {
    const detailsStringsOne = [
        "At Tekrevol, we are passionate about development and have ensured that our process always reflect the supreme level of commitment.",
        "If you want to understand our process for app development, here it is explained with the help of an example.",
        "Let’s say, you own a restaurant business in Brooklyn, NYC and the business is booming. However, when your bludgeoning customer base wants to know about the latest discounts, deals or any other news regarding your business, it has nowhere to go. So to fill this gap, you decide to get an app developed by Tekrevol in NYC.",

    ]

    const detailsStringsTwo = [
        "First up, we’ll listen to your idea and prepare a design brief along with expected project estimations and deadlines. Upon your approval, we move on to the next phase: prototyping. In this critical phase, we develop a working framework of what your app will look, feel, and function like, giving you a fair idea of what the final product is going to look like.",
        "This helps incredibly in facilitating businesses to change course once they feel that their brief isn’t turning out the way they thought it would. It also helps in saving costs, because if you skip this phase, you cannot go back to the drawing board once the app is fully developed.",
        "After prototypes have been approved, we move on to building the architecture and start our work on the design and development aspects of the app as well.",
        "This leads us to the final stages, where we take our ready app and put it up for testing through various research-based strategies like A/B testing allowing us to ensure that all the app’s aspects like UI/UX design and features etc. are well aligned with your needs.",
        "Finally, we deliver the app to you, but wait, we are not finished yet! We are there to put the app live on Google Play Store or App Store and monitor the initial responses to the app’s release.",
        "Furthermore, we also offer App Store optimization, so if you want to give your app a marketing boost, we are there to assist you!",
        "Now, you will be ready to launch your app in NYC and give your restaurant business in Brooklyn the boost it deserves, thereby driving significant business success and increasing revenues."
    ]
    const processImages = [
        processImg1,
        processImg2,
        processImg3,
        processImg4,
        processImg5,
        processImg6,
        processImg7
    ]
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} my={3}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} sx={{ width: { md: "85%", xl: "65%" } }}>

                <Typography variant='h4' alignSelf={"start"} mt={5}>
                    Our App Development Process
                </Typography>
                {detailsStringsOne.map((str, index) => (
                    <Typography variant='subtitle1' key={index} mt={3}>
                        {str}
                    </Typography>

                ))}
                <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} >

                    {processImages.map((img, index) => (
                        <Grid item md={1} xl={1.1} key={index} m={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <img src={img} alt="" style={{ margin: "2px" }} />
                        </Grid>
                    ))}
                </Grid>

                {detailsStringsTwo.map((str, index) => (
                    <Typography variant='subtitle1' key={index} mt={3}>
                        {str}
                    </Typography>

                ))}
            </Box>
        </Box >
    )
}

export default AppDevelopmentProcess