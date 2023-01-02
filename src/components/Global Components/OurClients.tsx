import React from 'react'
import { Box, Typography, Grid } from "@mui/material"
import ourClientsImg from "../../assets/images/Locations/bg-gray.jpg"
import awardsImg1 from "../../assets/images/Awards/goodfirms.png"
import awardsImg2 from "../../assets/images/Awards/4thvdthp_400x400.png"
import awardsImg3 from "../../assets/images/Awards/752fc5b7f6feecde6f1e5e9a5393b345.png"
import awardsImg4 from "../../assets/images/Awards/clutch-ecommerce-developers.webp"
import awardsImg6 from "../../assets/images/Awards/download.png"
import awardsImg5 from "../../assets/images/Awards/wadline.png"
const OurClients = () => {
    const awardsImages = [
        awardsImg1,
        awardsImg2,
        awardsImg3,
        awardsImg4,
        awardsImg5,
        awardsImg6
    ]
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} sx={{ backgroundImage: `url(${ourClientsImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Box display={"flex"} alignItems={"center"} flexDirection={"column"}  >
                <Typography variant='h4' mt={5}>
                    Our Clients
                </Typography>
                <Typography variant='h6' mt={2}>
                    Meet Some of Nexxt Satisfied Clients
                </Typography>
            </Box>
            <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} height={"500px"} sx={{width: {md: "80%", xl: "40%"}}}>
                {awardsImages.map((img, index) => (

                    <Grid item md={4} xl={4} key={index} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <img src={img} alt="" style={{ borderRadius: "5px" }} height={"170px"} width={"190px"} />
                    </Grid>
                ))}
            </Grid>


        </Box>
    )
}

export default OurClients