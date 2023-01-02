import React from 'react'
import { Box, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
const EcommerceAppDev = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${'https://www.tekrevol.com/assets/images-new/solution/ecommerce/banner01.jpg'})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                py: 4
            }}
        >
            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} p={4}>
                <Typography color={"orangered"}>
                    BEST ECOMMERCE APPS
                </Typography>
                <Box
                    mb={4}
                    // marginLeft={isxs ? "10px" : "0px"}
                    sx={{
                        "&::after": {
                            bgcolor: "orangered",
                            content: '""',
                            height: "2px",
                            position: "absolute",
                            marginTop: "10px",
                            width: { xs: "60px", xl: "70px" },
                            // marginLeft: { xs: "10px", xl: "0px" }
                        },
                    }}
                ></Box>
                <Box width={700} color={"white"}>
                    <Typography variant='h5' color={"white"} my={3}>Custom E-commerce App Design & Development</Typography>
                    <Typography variant='subtitle1' my={3}>At Tekrevol, our team of highly experienced Ecommerce app developers can build all kinds of custom Ecommerce apps for your business needs. Over the years, we have developed top rated Ecommerce apps for our clients that has brought them raging success.</Typography>
                    <Typography variant='subtitle1' my={3}>Our Ecommerce application development services are highly renowned in the market for their simplicity, ingenuity, feature integration and success driven model, so if you want your Ecommerce application development done us, we will provide you with the perfect Ecommerce app that suits your business needs perfectly.</Typography>
                    <Link to={"#"} style={{ textDecoration: "none" }}>
                        <Typography variant='h6' color={"orangered"} my={3}>SCHEDULED A CONSULTATION</Typography>
                    </Link>
                </Box>
            </Box>
        </Box >
    )
}

export default EcommerceAppDev

/* https://www.tekrevol.com/assets/images-new/solution/ecommerce/banner01.jpg */