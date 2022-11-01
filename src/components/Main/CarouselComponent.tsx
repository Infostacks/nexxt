import React from "react";
import img1 from "../../assets/images/images/1.png";
import img6 from "../../assets/images/images/6.png";
import img3 from "../../assets/images/images/3.png";
import img5 from "../../assets/images/images/5.png";
import { Box, Button, Typography } from "@mui/material";
import CarouselBottomDiv from "./CarouselBottomDiv";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarouselComponent = () => {
  const carouselData = [
    {
      heading: "Custom Software Development Company",
      description:
        "Helping our partners and enterprises dsirupt within their organizations and industries through user-centric software solutions",
      image: img5,
      btnText: "LET'S BUILD",
    },
    {
      heading: "A Growing Global",
      description:
        "We’re constantly evolving and creating digital solutions for businesses across the globe",
      image: img6,
      btnText: "START YOUR PORJECT",
    },
    {
      heading: "Primed For The Future",
      description:
        "From AI to wearable devices, we leverage emerging technologies to transform lives and redefine industry standards.",
      image: img1,
      btnText: "TALK TO AN EXPERT",
    },
    {
      heading: "Custom Software Development Company",
      description:
        "Helping our partners and enterprises disrupt within their organizations and industries through user-centric software solutions",
      image: img3,
      btnText: "LET'S BUILD",
    },
  ];

  return (
    <Box sx={{ height: { xs: "auto", md: "auto", lg: "850px", xl: "850px" } }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
      >
        {carouselData.map((carouselObj, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "850px",
                display: "flex",
                justifyContent: { xs: "block", md: "space-between", lg: "space-around", xl: "space-around" },
              }}
            >
              <Box
                sx={{
                  marginTop: { xs: 40, md: 30, xl: 30 },
                  marginLeft: { md: 20, xl: 40 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      xl: "center",
                    },
                    textAlign: { xs: "center", md: "start", xl: "start" },
                    width: 400,
                    // border: "2px solid black",
                    margin: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bolder", fontSize: 35 }}
                  >
                    {carouselObj.heading}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    // border: "2px solid black",
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      xl: "center",
                    },
                    textAlign: { xs: "center", md: "start", xl: "start" },
                    width: 600,
                    margin: 2,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                    {carouselObj.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    // border: "2px solid black",
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      xl: "center",
                    },
                    textAlign: { xs: "center", md: "start", xl: "start" },

                    width: 300,
                    margin: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "bold",
                      borderRadius: "10px",
                      color: "white",
                      padding: "10px 30px 10px 30px",
                      background:
                        "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
                    }}
                  >
                    {carouselObj.btnText}
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  marginRight: { md: 20, xl: 40 },
                  visibility: { xs: "hidden", md: "visible", xl: "visible" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: 500,
                    float: "right",
                    // border: "2px solid black",
                    flexShrink: 1,
                  }}
                >
                  <img
                    style={{ height: "700px", width: "400px" }}
                    src={carouselObj.image}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: {
                    xs: "center",
                    md: "center",
                    xl: "center",
                  },
                  position: "absolute",
                  bottom: 0,
                  right: 100,
                  visibility: { xs: "hidden", md: "visible", xl: "visible" },
                }}
              >
                <Box display="inline">
                  <CarouselBottomDiv
                    heading1="LATEST PROJECTS"
                    heading2="AMJ Workplace Wellness | Driven by results"
                    buttonTitle="Download Now"
                    color="#ee3824"
                  />
                </Box>

                <Box>
                  <CarouselBottomDiv
                    heading1="COMPANY PROFILE"
                    heading2="Here's What We Do in the GCC"
                    buttonTitle="Download Now"
                    color="#3C4048"
                  />
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarouselComponent;
