import React from 'react'
import { Box, Typography } from "@mui/material"
import AndroidAppDevNycBg from "../../assets/images/Locations/AndroidAppDevNycBg.jpg"
import AndroidAppDevNycImg from "../../assets/images/Locations/AndroidAppDevNycImg.png"
import { Link } from 'react-router-dom'
const AndroidAppDevNyc = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={4}
            sx={{ backgroundImage: `url(${AndroidAppDevNycBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ width: { md: "90%", xl: "65%" } }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} m={1}>
                    <img src={AndroidAppDevNycImg} alt="" />
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} m={1}>
                    <Typography variant='h4'>Android App Development Company in New York City</Typography>
                    <Typography variant='subtitle1' my={2}>With about 2.8 million apps currently available for download, Android is another platform to feature engaging and revolutionary apps. From January of 2018 to January of 2019, Android dominated the app market with a share of 74.45%, compared to iOS, whose share was just 22.85%. Our NYC office houses a specialized Android app development team consisting of developers, creative designers, and app marketing experts who will help you build apps that cater to the vast customer base present on Google Play.</Typography>
                    <Typography variant='subtitle1' my={2}>Our agile processes and tech expertise are primed to cater to the specific requirements and needs of building an Android mobile app.</Typography>
                    <Typography variant='subtitle1' my={2}>For New York City, our app team can even deliver localized app development projects that are structured to work effectively for location specific audiences.</Typography>
                    <Typography variant='h5'>Android version has achieved over 8000 downloads.</Typography>
                    <Typography variant='subtitle1' my={2}>Picture Pick has garnered around 124 user reviews on Google Play, most of which are overwhelmingly positive!</Typography>
                    <Link to={"#"} style={{ color: "black" }}>
                        <Typography variant='h5'>Want to build your app? </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default AndroidAppDevNyc
