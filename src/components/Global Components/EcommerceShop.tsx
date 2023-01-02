import React from 'react'
import { Box, Typography } from "@mui/material"
import ecomShopImg from "../../assets/images/ecomShopImg.png"
const EcommerceShop = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} py={5}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} px={4}>
                <Typography variant='h6' color={"orangered"}>
                    ECOMMERCE CUSTOM INTEGRATIONS
                </Typography>
                <Box
                    // marginLeft={isxs ? "10px" : "0px"}
                    mb={5}
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
                <Typography variant='h5'>Ecommerce App Shopify/Dropshipping Integration</Typography>
                <Typography variant='subtitle1' my={4}>Tekrevol understands the growing needs of the digital market and offers solutions to meet them all. So no matter whether you are running a large Ecommerce business or a standalone dropshipping professional, you can get your Ecommerce application development done from us and get custom Shopify or Dropshipping based features laced in your app.</Typography>

            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <img src={ecomShopImg} alt="" height={600} width={600} />
            </Box>
        </Box>
    )
}

export default EcommerceShop