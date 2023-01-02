import React from 'react'
import { Box, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const EcommerenceApps = () => {

    const listArr = [
        "Consumer To Consumer",
        "E-Marketplace",
        "Business to Business",
        "Business To Consumer",
        "Second Hand Goods Marketplace"
    ]

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"auto"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} sx={{ px: 10, pl: { md: 10, xl: 45 } }}>
                <Typography color={"orangered"}>
                    ECOMMERCE APPS
                </Typography>
                <Box
                    // marginLeft={isxs ? "10px" : "0px"}
                    sx={{
                        "&::after": {
                            bgcolor: "#ee3824",
                            content: '""',
                            height: "2px",
                            position: "absolute",
                            marginTop: "10px",
                            width: { xs: "60px", xl: "70px" },
                            // marginLeft: { xs: "10px", xl: "0px" }
                        },
                    }}
                ></Box>
                <Typography variant='h5' my={3}>
                    How Many Types of Ecommerce Apps Can We Develop?
                </Typography>
                <Typography variant='body1' my={1}>
                    Ecommerce apps are not just useful for B2C businesses. They are now being used and developed to suit all kinds of digital consumer interactions. Whatever you sell, you can do it through an Ecommerce app.
                </Typography>
                <Typography variant='body1' my={1}>
                    At Tekrevol, we can offer the following kinds of Ecommerce application development solutions for you:
                </Typography>
                {
                    listArr.map((str, index) => (

                        <Box display={"flex"} justifyContent={"center"} alignItems={"flex-start"} key={index} my={1}>
                            <RadioButtonCheckedIcon sx={{ color: "orangered", fontSize: "20px", mx: 2 }} />
                            <Typography>{str}</Typography>

                        </Box>

                    ))
                }
                <Link to={"#"} style={{ textDecoration: "none", marginTop: "10px" }}>
                    <Typography variant='h6' sx={{ color: "orangered" }}>
                        GET INFO ABOUT ECOMMERENCE APPS
                    </Typography>
                </Link>
            </Box>

            <Box sx={{ width: { md: 600, xl: "auto" }, height: { md: 400, xl: "auto" } }}>
                <img src="https://www.tekrevol.com/assets/images-new/solution/ecommerce/img01.jpg" alt="" />
            </Box>
        </Box>
    )
}

export default EcommerenceApps