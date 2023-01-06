import React, { useState } from "react";
import imgA from "../../assets/images/CarouselImages/imgFF.png";
import imgB from "../../assets/images/CarouselImages/imgX.png";
import imgC from "../../assets/images/CarouselImages/imgZ.png"
import imgD from "../../assets/images/CarouselImages/imgD.png"
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
      heading: "An AI-First Web & Mobile Development Company",
      description:
        "You need an AI-First company with a team of dedicated AI engineers. We have been working on Full Spectrum AI solutions for over a decade pushing the technology race forward.",
      image: imgA,
      btnText: "Explore",
    },
    {
      heading: "Building Tools For The Future In Perfection ",
      description:
        "We've built Nexxt AI to push the envelope further than anyone else has using latest cutting edge technologies. check out our tech stack or leave your email to get more info about our mission.",
      image: imgB,
      btnText: "SEE OUR WORK",
    },
    {
      heading: "Cross Platform, Cross Functional",
      description:
        "We offer full stack development services which means we can give you everything from content to code. Hire us as your full stack developers, and we will work with you to build the perfect, cross platform solution that takes your project from concept to completion.",
      image: imgC,
      btnText: "GET A QUOTE",
    },
    {
      heading: "Nexxt App, The Future Recruitment App",
      description:
        "We have Built Nexxt App- An AI app helps you find the engineering talent that is right for your needs. We help businesses hire and manage software developers by using an AI system not found anywhere else today.",
      image: imgD,
      btnText: "GET A DEMO",
    },
    {
      heading: "Industries We Are Thriving By Our Solutions",
      description:
        "We Are Thriving In Socail Media Apps, E-commerce B2B Applications, Booking Engines, Financial Technology, Crew Management Portals, Customers Dashboards, Vehicle Sharing Apps, Artifical Intelligence Applications, BlockChain and Many more .",
      image: imgB,
      btnText: "CHECK OUR STACK",
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
                <CustomButton text={carouselObj.btnText} buttonSize="10px 30px" background={`${theme.palette.background.default}`} />
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
            heading2="We did outstanding advancements and unbelievable expansion in 2022"
            buttonTitle="Checkout Our Wins"
            color="#ee3824"
            fileLink={"Nexxt Company Profile.pdf"}
          />
        </Box>

        <Box zIndex="1">
          <CarouselBottomDiv
            heading1="COMPANY PROFILE"
            heading2="We are not just a company, we are a story to be amazed with"
            buttonTitle="Download Our Story"
            color="#3C4048"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselComponent;
