import React from 'react'
import { Grid, Box, Typography, Stack, Chip } from "@mui/material"
import bgBooking from "../../assets/images/portfolio/BgBooking.com.png"
import bokingImg from "../../assets/images/portfolio/BookingMockUp.png"
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
export interface PortfolioProjectsProps {
    portfoliosprops: portfolios[]
}

interface portfolios {
    projectTitle: string,
    projectDescription: string,
    projectLink: string,
    projectBgImgLink: string
    projectMockupImg: string
}

const PortfolioProjects = ({ portfoliosprops }: PortfolioProjectsProps) => {
    const catList = ["Android", "IOS", "Web"]
    return (
        <>
            {portfoliosprops.map((portfolioObj, index) => (
                <Grid container sx={{ backgroundImage: `url(${portfolioObj.projectBgImgLink})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} height={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} key={index} my={2} spacing={1}>

                    <Grid item md={5} xl={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box color={"white"}>
                            <Typography color={"white"} variant="h4">{portfolioObj.projectTitle}</Typography>
                            <Typography variant='subtitle1' mt={2}>
                                {portfolioObj.projectDescription}
                            </Typography>
                            <Link to={portfolioObj.projectLink} style={{ textDecoration: "none", color: "white" }}>
                                <Box display={"flex"} justifyContent={"start"} alignItems={"start"}>
                                    <Typography variant='h6' mt={5}>
                                        View Full Casestudy
                                    </Typography>
                                    <EastIcon sx={{ m: 1, mt: 5.5, height: "25px" }} />
                                </Box>
                            </Link>
                            <Stack direction="row" spacing={1} my={"30px"}>
                                {catList.map(cat => <Chip key={cat} label={cat} sx={{ color: "white", backgroundColor: "gray", px: 1 }} />)}
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item md={4} xl={3.5} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box height={"350px"}>
                            <img src={portfolioObj.projectMockupImg} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}

export default PortfolioProjects