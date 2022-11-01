import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Carousel } from "react-responsive-carousel";
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
        // display: "flex",
        backgroundColor: "#f5f7fa",
        justifyContent: "center",
        padding: "100px 0 0 0",
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
          // border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
        >
          {corouselData.map((carouselObj, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                sx={{
                  // border: "2px solid black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Box
                  width="auto"
                  height="120px"
                  src={carouselObj.image}
                  component="img"
                ></Box>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {carouselObj.heading1}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {carouselObj.heading2}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        ;
        {/* <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={1000}
          width={500}
          showArrows={false}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20vw",
              border: "2px solid black",
              height: "200px",
            }}
          >
            <Box sx={{border: "2px solid black",}}>this is slide 1</Box>
          </Box>
          <Box style={{ height: "300px", border: "2px solid black" }}>
            this is slide 2
          </Box>
          <Box style={{ height: "300px", border: "2px solid black" }}>
            this is slide 3
          </Box>
        </Carousel> */}
      </Box>
    </Box>
  );
};

export default Partnerships;
