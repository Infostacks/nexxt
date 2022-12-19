import React from 'react'
import { Box, Typography, useMediaQuery } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useTheme } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
    descriptions,
    names,
    imagesLinks,
    titles,
} from "../../assets/Strings/Clients";

const ClientsTestimonials = () => {
    return (
        <Box height="max" bgcolor="white">
            <Box sx={{ marginLeft: { md: "120px", xl: "180px" } }}>
                <Box
                    sx={{
                        "&::after": {
                            bgcolor: "#ee3824",
                            content: '""',
                            height: "2px",
                            position: "absolute",
                            marginTop: "60px",
                            width: "70px",
                        },
                    }}
                ></Box>
                <Typography sx={{ marginLeft: { md: "120px", xl: "180px" } }} pt="50px">TESTIMONIALS</Typography>

                <Typography variant="h4" pt="20px" mb="40px">
                    Our Clients Love Our Work!
                </Typography>
            </Box>
            <Box width="80vw" height="max" sx={{ marginLeft: { md: "120px", xl: "180px" } }} border={2}>
                <Carousel autoPlay={true} stopAutoPlayOnHover={false} animation="slide">
                    {descriptions.map((description : string, index: number) => (
                        <Box display="flex" justifyContent="space-evenly" alignItems="center" key={index}>
                            <Box

                                position="relative"
                                sx={{
                                    width: "350px",
                                    height: "365px",

                                }}
                                border={2}
                            >
                                <Box
                                    sx={{
                                        width: "310px",
                                        height: "365px",

                                    }}
                                    src={imagesLinks[index]}
                                    component="img"
                                ></Box>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        color: "white",
                                        bottom: "0px",
                                        p: "15px",
                                        display: "flex",
                                        width: "275px",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box>
                                        <Typography variant="h5" sx={{ mb: "5px" }}>
                                            {names[index]}
                                        </Typography>
                                        <Typography>{titles[index]}</Typography>
                                    </Box>

                                    <PlayCircleOutlineIcon
                                        sx={{ height: "54px", width: "54px" }}
                                    />
                                </Box>

                                <Typography
                                    sx={{
                                        m: "10px 0px",
                                        p: "0px 5px",
                                        textAlign: "justify",
                                        width: "310px",

                                    }}
                                >
                                    &quot;{description}&quot;
                                </Typography>
                            </Box>

                            <Box
                                key={index}
                                position="relative"
                                sx={{
                                    width: "350px",
                                    height: "365px",

                                }}
                                border={2}
                            >
                                <Box
                                    sx={{
                                        width: "310px",
                                        height: "365px",

                                    }}
                                    src={imagesLinks[index]}
                                    component="img"
                                ></Box>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        color: "white",
                                        bottom: "0px",
                                        p: "15px",
                                        display: "flex",
                                        width: "275px",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box>
                                        <Typography variant="h5" sx={{ mb: "5px" }}>
                                            {names[index]}
                                        </Typography>
                                        <Typography>{titles[index]}</Typography>
                                    </Box>

                                    <PlayCircleOutlineIcon
                                        sx={{ height: "54px", width: "54px" }}
                                    />
                                </Box>

                                <Typography
                                    sx={{
                                        m: "10px 0px",
                                        p: "0px 5px",
                                        textAlign: "justify",
                                        width: "310px",

                                    }}
                                >
                                    &quot;{description}&quot;
                                </Typography>
                            </Box>

                            <Box
                                key={index}
                                position="relative"
                                sx={{
                                    width: "350px",
                                    height: "365px",

                                }}
                                border={2}
                            >
                                <Box
                                    sx={{
                                        width: "310px",
                                        height: "365px",

                                    }}
                                    src={imagesLinks[index]}
                                    component="img"
                                ></Box>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        color: "white",
                                        bottom: "0px",
                                        p: "15px",
                                        display: "flex",
                                        width: "275px",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box>
                                        <Typography variant="h5" sx={{ mb: "5px" }}>
                                            {names[index]}
                                        </Typography>
                                        <Typography>{titles[index]}</Typography>
                                    </Box>

                                    <PlayCircleOutlineIcon
                                        sx={{ height: "54px", width: "54px" }}
                                    />
                                </Box>

                                <Typography
                                    sx={{
                                        m: "10px 0px",
                                        p: "0px 5px",
                                        textAlign: "justify",
                                        width: "310px",

                                    }}
                                >
                                    &quot;{description}&quot;
                                </Typography>
                            </Box>

                        </Box>


                    ))}
                </Carousel>
            </Box>
        </Box>
    )
}

export default ClientsTestimonials