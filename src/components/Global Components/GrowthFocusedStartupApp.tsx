import React from 'react'
import { Box, Typography } from "@mui/material"
import ratingImg from "../../assets/images/ratingImg.png"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export interface GrowthFocusedStartupAppProps {
    heading: string,
    subtitle: string
}
const GrowthFocusedStartupApp = ({ heading, subtitle }: GrowthFocusedStartupAppProps) => {
    const reviews = [
        {
            comment: "They works professionally. They works professionally.",
            name: "Jhon Cena"
        },
        {
            comment: "They works professionally",
            name: "Jhon Cena"
        },
        {
            comment: "They works professionally",
            name: "Jhon Cena"
        },
        {
            comment: "They works professionally",
            name: "Jhon Cena"
        },
        {
            comment: "They works professionally",
            name: "Jhon Cena"
        },
    ]
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} py={5} sx={{flexDirection: {xs: "column", md: "row", xl: "row"}}}>
            <Box width={"25vw"} mx={3} sx={{width: {xs: "100%", md: "25vw", xl: "25vw"}}}>
                <Typography variant='h4'>
                    {heading}
                </Typography>
                <Typography variant='body1'>
                    {subtitle}
                </Typography>
            </Box>

            <Box border={"1px solid gray"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} mx={2} sx={{width: {md: "290px", xl: "300px"}, height: {md: "260px", xl: "300px"}}}>
                <Box sx={{ backgroundColor: "#06283D" }} height={"100%"} width={"100%"} textAlign={"center"} alignItems={"center"}>
                    <Typography variant='h6' color="white">Clutch</Typography>
                </Box>

                <Box height={"100%"} width={"100%"} textAlign={"center"}>
                    <Typography variant='h6' >Nexxt.ai</Typography>
                </Box>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderBottom={1}>
                    <Box borderRight={1} px={2}>
                        <img src={ratingImg} alt="" style={{ height: "16px", width: "80px" }} />
                    </Box>
                    <Box px={3}>
                        <Typography variant='body1' color={"red"}>59 reviews</Typography>
                    </Box>
                </Box>

                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} m={5} sx={{width: {xs: "100px", md: "290px", xl: "300px"}, height: {md: "280px", xl: "320px"}}}>
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loopFillGroupWithBlank={true}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {reviews.map((obj, index) => (

                            <SwiperSlide key={index} >
                                <Box height={"100%"} width={"100%"} textAlign={"center"}>
                                    <Typography className='font-regular'>
                                        {obj.comment}
                                    </Typography>
                                    <Typography className='font-semibold'>
                                        {obj.name}
                                    </Typography>
                                </Box>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </Box>
            </Box>
        </Box>
    )
}

export default GrowthFocusedStartupApp