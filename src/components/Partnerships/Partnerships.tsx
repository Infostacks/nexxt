import React from "react";
import "../../index.css";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Partnerships = () => {
  const theme = useTheme()
  console.log("theme", theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
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
        display: "flex",
        backgroundColor: "#f5f7fa",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0 0 0",
        height: "auto",
        flexDirection: "column",
        // width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f7fa",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // width: "100%",
        }}
      >
        <Box sx={{ width: { xs: 400, md: 600, xl: 600 } }}>
          <Typography variant="h4" >
            Changing The World With Emerging Technology Alliances
          </Typography>
        </Box>
        <Box sx={{ width: { xs: 350, md: 700, xl: 600 }, marginTop: 5 }}>
          <Typography variant="body1">
            In support of these collaborative initiatives, we provide our expertise. collaborating with leaders in the sector. We provide top-notch technological options to suit your company requirements.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "250px",
          // marginLeft: { md: "120px", xl: "180px" },
          color: "black",
          // border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          width: { xs: "100vw", xl: "70vw", md: "90vw" },

        }}
      >
        <Swiper
          slidesPerView={isMatch ? 1 : 3}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
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
                  <Typography variant="h3" fontSize="20px" sx={{ fontFamily: "Gilroy-Bold", fontWeight: "bold" }} >
                    {carouselObj.heading1}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" >
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
