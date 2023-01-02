import React, { useState } from "react";
import imgA from "../../assets/images/CarouselImages/imgFF.png";
import imgB from "../../assets/images/CarouselImages/imgX.png";
import imgC from "../../assets/images/CarouselImages/imgZ.png"
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import CarouselBottomDiv from "./CarouselBottomDiv";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from 'react-material-ui-carousel'
import CustomButton from "../Global Components/CustomButton";
// import companyProfile from "../../assets/Company Profile File/Nexxt Company Profile.pdf"

const CarouselComponent = () => {

  const theme = useTheme()
  // console.log("theme", theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  const carouselData = [
    {
      heading: "Custom Software Development Corporation",
      description:
        "We’re providing the best consumer-oriented software solutions to our clients in order to improve and transform customers’ business processes, reduce costs within their organization.",
      image: imgA,
      btnText: "GET STARTED",
    },
    {
      heading: "Globally Flourishing",
      description:
        "We are persistently developing and maturing digital solutions for global businesses.",
      image: imgB,
      btnText: "INITIATE YOUR PORJECT",
    },
    {
      heading: "Leading towards Future",
      description:
        "We use cutting-edge technologies, wearables like smartwatches or fitness trackers, and artificial intelligence, to set industry standards and alter lives.",
      image: imgC,
      btnText: "GET PROFESSIONAL HELP",
    },

  ];

  return (

    <Box height="auto" position="relative">
      <Carousel autoPlay={true} animation="slide" indicators={isMatch ? false : true}
        navButtonsAlwaysInvisible={true}
        cycleNavigation={true}
        stopAutoPlayOnHover={false}
        duration={500}
        changeOnFirstRender={true}
        interval={4000}
        fullHeightHover={true}
        sx={{ height: { xs: "500px", md: "780px", xl: "780px" } }}
        indicatorIconButtonProps={{
          style: {
            cursor: "pointer",
            margin: "4px",
            padding: "4px",
            color: 'white',
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            border: "2px solid white",
          }
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "50px",
            textAlign: "left",
            position: "absolute",
            top: "37%",
            display: "flex",
            flexDirection: "column",
            width: "99px",
            height: "99px",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1",

          }
        }}
      >
        {carouselData.map((carouselObj, index) => (
          <Box
            // border={2}
            key={index}
            sx={{
              height: { xs: "500px", xl: "780px" },
              display: "flex",
              width: { xs: "100%", xl: "80%" },

              justifyContent: { xs: "block", md: "space-between", lg: "space-around", xl: "space-between" },
            }}
          >
            <Box
              // border={2}
              sx={{
                marginTop: { xs: 10, md: 30, xl: 30 },
                marginLeft: { xs: 0, md: 20, xl: 40 },
              }}
            >
              <Box
                sx={{

                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "start",
                    xl: "start",
                  },
                  alignItems: {
                    xs: "center",
                  },
                  textAlign: { xs: "start", md: "start", xl: "start" },
                  width: { xs: "100%", md: 500, xl: 500 },
                  // border: "2px solid black",
                  margin: 2,

                }}
              >
                <Typography

                  variant="h4"
                  // border={2}
                  className="font-bold"
                  sx={{ color: "white" }}
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
                  alignItems: {
                    xs: "center",

                  },
                  textAlign: { xs: "start", md: "start", xl: "start" },
                  width: { xs: "100%", md: 600, xl: 600 },
                  margin: 2,
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "18px", color: "white" }} className="font-regular" textAlign={"justify"}>
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

                  width: { xs: 300, xl: 600 },
                  margin: 2,
                }}
              >
                {/* <Button
                  variant="contained"
                  className="font-medium"
                  sx={{
                    // fontWeight: "bold",
                    fontSize: "14px",
                    borderRadius: "10px",
                    color: "white",
                    padding: "10px 30px 10px 30px",
                    background:
                      "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
                  }}
                >
                  {carouselObj.btnText}
                </Button> */}
                <CustomButton text="GET A QUOTE" buttonSize="10px 30px" background={`${theme.palette.background.default}`} />
              </Box>
            </Box>

            <Box
              sx={{
                marginRight: { md: 20, xl: 40 },
                visibility: { xs: "hidden", sm: "hidden", md: "visible", xl: "visible" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: 500,
                  float: "right",
                  // border: "2px solid black",
                  // flexShrink: 1,
                  marginLeft: { xl: "100px" }

                }}
              >
                <img
                  style={{ height: "auto", width: "auto" }}
                  src={carouselObj.image}
                />
              </Box>
            </Box>


          </Box>
        ))}
      </Carousel>
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
          right: { md: 60, xl: 340 },
          visibility: { xs: "hidden", md: "visible", xl: "visible" },
        }}
      >
        <Box display="inline" zIndex="1">
          <CarouselBottomDiv
            heading1="OUR PROJECTS"
            heading2="Here's What we did in 2022"
            buttonTitle="Download Now"
            color="#ee3824"
            fileLink={"Nexxt Company Profile.pdf"}
          />
        </Box>

        <Box zIndex="1">
          <CarouselBottomDiv
            heading1="COMPANY PROFILE"
            heading2="Learn more about our company"
            buttonTitle="Download Now"
            color="#3C4048"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselComponent;
