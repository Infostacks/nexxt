import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import {
  descriptions,
  imagesLinks,
  titles,
  marginB
} from "../../assets/Strings/AwardsStrings";

const AwardsCard = () => {

  const theme = useTheme()
  const ismd = useMediaQuery(theme.breakpoints.only("lg"))
  const issm = useMediaQuery(theme.breakpoints.only("sm"))
  const isxs = useMediaQuery(theme.breakpoints.only("xs"))

  return (

    <Box bgcolor="white" py="50px" position="sticky" >
      <Box sx={{ marginLeft: { md: "120px", xl: "180px" } }}>
        <Box
          sx={{
            
            "&::after": {
              bgcolor: "#ee3824",
              content: '""',
              height: "2px",
              position: "absolute",
              mt: "10px",
              width: "70px",
              marginLeft: { xs: "15px", xl: "0px" }
            },
          }}
        ></Box>
        <Typography ml="90px" >Awards</Typography>

        <Typography variant="h4" pt="20px" mb="40px" marginLeft={isxs ? "15px" : "0px"}>
          Awards & Recognitions
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginLeft: { md: "120px", xl: "180px" }, width: { xs: "100vw", md: "80vw" ,xl: "80vw" } }} height="430px" >

        <Swiper
          slidesPerView={isxs ? 1 : issm ? 2.2 : ismd ? 3.5 : 5.3}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {descriptions.map((description, index) => (
            <SwiperSlide key={index}>
              <Box
                mt={marginB[index]}
                marginLeft={isxs ? "65px" : "0px"}
                sx={{
                  bgcolor: "white",
                  p: "15px 15px",
                  marginBottom: "2px",
                  borderRadius: "15px",
                  boxShadow: 2,
                  width: "251px",
                  height: "340px",
                  "&:hover": {
                    boxShadow: 5,
                    // paddingBottom: 5
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",

                }}
              >
                <Box
                  component="img"
                  src={imagesLinks[index]}

                  height="160px"
                  width="180px"
                ></Box>

                <Box mt="20px">
                  <Typography
                    variant="h5"
                    textAlign="center"
                    mb="8px"
                    fontSize="16px"
                  >
                    {titles[index]}
                  </Typography>
                  <Typography textAlign="center" mb="8px" fontSize="13px">
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
