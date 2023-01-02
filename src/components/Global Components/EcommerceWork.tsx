import React from 'react'
import { Box, Typography } from "@mui/material"
const EcommerceWork = () => {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={5}>
            <Box mx={3}>
                <img src="https://www.tekrevol.com/assets/images-new/solution/real-estats/img01m.jpg" alt="" style={{ height: "500px" }} />
            </Box>


            <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"}>
                <Typography color={"orangered"}>
                    BEST ECOMMERCE APPS
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
                    Launch The Ultimate Ecommerce App
                </Typography>
                <Typography variant='body1' my={1}>
                    The world is currently witnessing an Ecommerce boom and do you know what’s actually driving this boom? Ecommerce Apps!
                </Typography>
                <Typography variant='body1' my={1}>
                    Ecommerce apps help drive maximum conversions to your business by becoming a single point where customers can view all of your products, their related information and process easier payments.
                </Typography>
                <Typography variant='body1' my={1}>
                    Tekrevol has been a partner in many leading Ecommerce mobile app solutions till now, allowing businesses to gain an impressive increase in conversions and engagement.
                </Typography>
                <Typography variant='body1' my={1}>
                    We have an in-house team of Ecommerce app developers who know how exactly to structure these type of apps to drive home a stellar experience to users.
                </Typography>


            </Box>
        </Box>
    )
}

export default EcommerceWork