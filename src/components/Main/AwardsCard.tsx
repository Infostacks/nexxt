import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

import {
  descriptions,
  imagesLinks,
  titles,
} from "../../assets/Strings/AwardsStrings";

const AwardsCard = () => {
  return (
    <Box bgcolor="white" py="50px">
      <Box width="98%" px="15px">
        <Box ml="15%">
          <Box
            sx={{
              "&::after": {
                bgcolor: "#ee3824",
                content: '""',
                height: "2px",
                position: "absolute",
                mt: "10px",
                width: "70px",
              },
            }}
          ></Box>
          <Typography ml="90px">Awards</Typography>

          <Typography variant="h4" pt="20px" mb="40px">
            Awards & Recognitions
          </Typography>
        </Box>

        <Swiper
          // slidesPerView={6}
          // spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          speed={2100}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            1280: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
        >
          {descriptions.map((description, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  bgcolor: { xs: "red", md: "white" },
                  p: "40px 20px",
                  m: "20px",
                  borderRadius: "15px",
                  boxShadow: "2",
                  ":hover": {
                    transition: "ease-in",
                    transitionDuration: ".09s",
                    boxShadow: "4",
                    scale: "1.05",
                    background:
                      "linear-gradient(-138deg, #f37a20 0, #ef5123 55%, #ee3824 100%)",
                    color: "white",
                  },
                  width: "251px",
                }}
              >
                <Box
                  component="img"
                  src={imagesLinks[index]}
                  mx="12px"
                  height="150px"
                  width="227px"
                ></Box>

                <Box mt="20px">
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    textAlign="center"
                    mb="8px"
                    fontSize="16px"
                    sx={{
                      letterSpacing: 2,
                    }}
                  >
                    {titles[index]}
                  </Typography>
                  <Typography textAlign="center" mb="16px" fontSize="13px">
                    {description}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default AwardsCard;
