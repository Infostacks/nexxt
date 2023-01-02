import React from 'react'
import { Grid, Box, Typography } from "@mui/material"
const PortfolioIntroBanner = () => {
    const btnArray = ["ALL", "MOBILE APP", "WEB APP", "SOFTWARE"]
    return (
        <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} spacing={1} paddingTop={"100px"}>
            <Grid item md={7} xl={5} display={"flex"} justifyContent={"start"} alignItems={"start"} flexDirection={"column"}>
                <Box>
                    <Typography variant='h6' color={"orangered"}>Recent Projects</Typography>
                </Box>
                <Box

                    sx={{
                        "&::after": {
                            bgcolor: "orangered",
                            content: '""',
                            height: "2px",
                            position: "absolute",
                            marginTop: "10px",
                            width: { xs: "20px", xl: "20px" },
                            // marginLeft: { xs: "10px", xl: "0px" }
                        },
                    }}
                ></Box>
                <Box mt={2}>
                    <Typography variant='h2'> Made with passion</Typography>
                </Box>
                <Box mt={2}>
                    <Typography variant='body1'> Nexxt is an extension of your marketing team – bringing strategy, expertise, and execution to the areas that you need it most.</Typography>
                </Box>

                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
                    {btnArray.map((title, index) => (

                        <Box sx={{ "& :hover": { background: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)", color: "white" }}} key={index} m={2} border={"1px solid lightgray"} borderRadius={"5px"}>
                            <Typography paddingY={1} paddingX={5} variant="body1" fontWeight={"bold"}>{title}</Typography>
                        </Box>
                    ))}

                </Box>
            </Grid>
            <Grid item md={4} xl={2.5}>
                <video width={"400px"} height={"400px"} autoPlay loop muted>
                    <source src="https://www.tekrevol.com/assets/images-new/case-studies/projects/bottom_scroll.mp4" type='video/mp4' />
                </video>
            </Grid>
        </Grid>
    )
}

export default PortfolioIntroBanner