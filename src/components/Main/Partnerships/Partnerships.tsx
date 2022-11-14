import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Carousel } from "react-responsive-carousel";

const Partnerships = () => {
  const corouselData = [
    {
      heading1: "AWS Certified ",
      heading2: "System Architects",
      image:
        "https://www.tekrevol.com/assets/images-new/badges/aws-solutions-architect.png",
    },
    {
      heading1: "IBM Blockchain",
      heading2: "Essentials V2",
      image:
        "https://www.tekrevol.com/assets/images-new/badges/ibm-blockchain.png",
    },
    {
      heading1: "Microsoft Certified",
      heading2: "Consulting Partner",
      image:
        "https://www.tekrevol.com/assets/images-new/home-mobile/microsoft-certifie-partner@1x.png",
    },
    {
      heading1: "Adobe Solution",
      heading2: "Partner Program",
      image:
        "https://www.tekrevol.com/assets/images-new/home-mobile/abode-logos@1x.png",
    },
    {
      heading1: "Google Developer",
      heading2: "Certified Agency",
      image:
        "https://www.tekrevol.com/assets/images-new/home-mobile/google-certifie-agency@1x.png",
    },
    {
      heading1: "AWS Advanced",
      heading2: "Consulting Partner",
      image:
        "https://www.tekrevol.com/assets/images-new/badges/aws-cloud-practitioner.png",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f5f7fa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 5,
        padding: "100px 0 100px 0",
        height: "auto",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f7fa",
          justifyContent: "start",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: 600 }}>
          <Typography variant="h2" fontWeight="bold" fontSize="30px">
            Making A Difference Through Strategic Technology Partnerships
          </Typography>
        </Box>
        <Box sx={{ width: 700, marginTop: 5 }}>
          <Typography>
            We contribute to these partnership programs, supported by global
            technology experts. Partnering with industry leaders, we offer
            quality technology solutions that meet your business needs.
          </Typography>
        </Box>
      </Box>

      <Box
        style={{
          height: "250px",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          // slidesPerView={8}
          // spaceBetween={15}
          navigation={true}
          loop={true}
          speed={2100}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            1280: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {corouselData.map((carouselObj, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  width="250px"
                  height="auto"
                  src={carouselObj.image}
                  component="img"
                ></Box>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    {carouselObj.heading1}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ width: "fit-content" }}>
                    {carouselObj.heading2}
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

export default Partnerships;
