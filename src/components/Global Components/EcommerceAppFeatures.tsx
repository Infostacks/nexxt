import React from 'react'
import { Box, Typography } from "@mui/material"
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Link } from 'react-router-dom';

const EcommerceAppFeatures = () => {
    const listA = [
        "Available on iTunes & Google Play Store",
        "Shop For Multiple Products",
        "Admob",
        "Sign up & Sign in"
    ]

    const listB = [
        "User Profile",
        "My Wishlist Option",
        "Product/Category Segregation",
        "Product Details ",
        "Sliders/Carousel",
        "Search Bar/Option",
        "Email/Push",
        "Notifications",
        "Codes And Coupons",
        "Cart Multilingual",
        "Rate/Review Options",
        "Multiple Payment Options",
        "Social Login",
        "User Shopping History ",
        "Product Review/ Rating",
        "Streamlined",
        "Checkout",
        "Support"
    ]
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ backgroundColor: "orangered" }} py={4} color={"white"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} mx={15}>

                <Typography >
                    BEST ECOMMERCE APPS
                </Typography>
                <Box
                    // marginLeft={isxs ? "10px" : "0px"}
                    sx={{
                        "&::after": {
                            bgcolor: "#fff",
                            content: '""',
                            height: "2px",
                            position: "absolute",
                            marginTop: "10px",
                            width: { xs: "60px", xl: "70px" },
                            // marginLeft: { xs: "10px", xl: "0px" }
                        },
                    }}
                ></Box>
                <Typography variant='h5' my={4}>In-App Features For Ecommerce Apps</Typography>
                <Typography variant='subtitle1' width={400}>
                    If there is one thing that matters in Ecommerce apps, it’s offering a top of the line user experience that offers end to end solutions to users. This is to effectively ensure that users have the maximum kind of facilities in whatever way they want to interact with the Ecommerce app.
                </Typography>
                <Typography variant='subtitle1' width={400}>
                    Ecommerce application development at Tekrevol is primed to deliver the same and that’s exactly why we have this exhaustive list of features that you can get included in our Ecommerce app to make it a winner on all app stores:
                </Typography>
                {
                    listA.map((str, index) => (

                        <Box display={"flex"} justifyContent={"start"} alignItems={"flex-start"} key={index} my={1}>
                            <RadioButtonCheckedIcon sx={{ color: "white", fontSize: "20px", mx: 2 }} />
                            <Typography>{str}</Typography>

                        </Box>

                    ))
                }

            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} mx={10}>
                {
                    listB.map((str, index) => (

                        <Box display={"flex"} justifyContent={"center"} alignItems={"flex-start"} key={index} my={1}>
                            <RadioButtonCheckedIcon sx={{ color: "white", fontSize: "20px", mx: 2 }} />
                            <Typography>{str}</Typography>

                        </Box>

                    ))
                }
                <Link to={"#"} style={{ textDecoration: "none" }}>
                    <Typography color={"white"} variant='h6'>
                        GET A FREE QUOTE NOW
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default EcommerceAppFeatures