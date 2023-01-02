import React, { useEffect } from "react";
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
} from "../assets/Strings/Clients";

// {description, names, imagesLinks, titles}: ProjectsProps

const Clients = () => {
  const theme = useTheme()
  const ismd = useMediaQuery(theme.breakpoints.only("lg"))
  const issm = useMediaQuery(theme.breakpoints.only("sm"))
  const isxs = useMediaQuery(theme.breakpoints.only("xs"))


  // console.log("match", isMatch)



  return (

    <Box bgcolor="white" position="sticky" >
      <Box sx={{ marginLeft: { md: "120px", xl: "180px" } }}>
        <Box
        marginLeft={isxs ? "10px" : "0px"}
          sx={{
            "&::after": {
              bgcolor: "#ee3824",
              content: '""',
              height: "2px",
              position: "absolute",
              marginTop: "60px",
              width: { xs: "60px", xl: "70px" },
              marginLeft: { xs: "10px", xl: "0px" }
            },
          }}
        ></Box>
        <Typography sx={{ marginLeft: "90px" }} pt="50px" marginLeft={isxs ? "15px" : "0px"}>TESTIMONIALS</Typography>

        <Typography variant="h4" pt="20px" mb="40px" marginLeft={isxs ? "15px" : "0px"}>
          Our Clients Love Our Work!
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginLeft: { xs: "10px", md: "120px", xl: "180px" }, width: { xs: "100vw", md: "80vw", xl: "80vw" } }} >
        <Swiper
          slidesPerView={isxs ? 1 : issm ? 1.75 : ismd ? 3.3 : 4.3}

          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={true}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {descriptions.map((description, index) => (

            <SwiperSlide key={index} >
              <Box
                position="relative"
                marginLeft={isxs ? "35px" : "0px"}
                sx={{
                  width: "290px",
                  height: "325px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}

              >
                <Box
                  borderRadius="25px"
                  sx={{
                    width: "290px",
                    height: "290px",
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
                  <Box sx={{ mb: "15px" }}>
                    <Typography variant="h5" >
                      {names[index]}
                    </Typography>
                    <Typography >{titles[index]}</Typography>
                  </Box>

                  {/* <PlayCircleOutlineIcon
                    sx={{ height: "54px", width: "54px" }}
                  /> */}
                </Box>
              </Box>
              <Box marginLeft={isxs ? "35px" : "0px"}>
                <Typography
                  variant="body1"
                  sx={{
                    m: "10px 0px",
                    p: "0px 5px",
                    textAlign: "justify",
                    width: "280px",

                  }}
                >
                  &quot;{description}&quot;
                </Typography>
              </Box>
            </SwiperSlide>

          ))}
        </Swiper>
      </Box>
    </Box >

    // <Box height="max" bgcolor="white">
    //   <Box sx={{ marginLeft: { md: "120px", xl: "180px" } }}>
    //     <Box
    //       sx={{
    //         "&::after": {
    //           bgcolor: "#ee3824",
    //           content: '""',
    //           height: "2px",
    //           position: "absolute",
    //           marginTop: "60px",
    //           width: "70px",
    //         },
    //       }}
    //     ></Box>
    //     <Typography sx={{ marginLeft: { md: "120px", xl: "180px" } }} pt="50px">TESTIMONIALS</Typography>

    //     <Typography variant="h4" pt="20px" mb="40px">
    //       Our Clients Love Our Work!
    //     </Typography>
    //   </Box>
    //   <Box width="80vw" height="max" sx={{ marginLeft: { md: "120px", xl: "180px" } }} border={2}>
    //     <Carousel autoPlay={true} stopAutoPlayOnHover={false} animation="slide">
    //       {descriptions.map((description, index) => (
    //         <Box display="flex" justifyContent="space-evenly" alignItems="center" key={index}>
    //           <Box

    //             position="relative"
    //             sx={{
    //               width: "350px",
    //               height: "365px",

    //             }}
    //             border={2}
    //           >
    //             <Box
    //               sx={{
    //                 width: "310px",
    //                 height: "365px",

    //               }}
    //               src={imagesLinks[index]}
    //               component="img"
    //             ></Box>
    //             <Box
    //               sx={{
    //                 position: "absolute",
    //                 color: "white",
    //                 bottom: "0px",
    //                 p: "15px",
    //                 display: "flex",
    //                 width: "275px",
    //                 justifyContent: "space-between",
    //               }}
    //             >
    //               <Box>
    //                 <Typography variant="h5" sx={{ mb: "5px" }}>
    //                   {names[index]}
    //                 </Typography>
    //                 <Typography>{titles[index]}</Typography>
    //               </Box>

    //               <PlayCircleOutlineIcon
    //                 sx={{ height: "54px", width: "54px" }}
    //               />
    //             </Box>

    //             <Typography
    //               sx={{
    //                 m: "10px 0px",
    //                 p: "0px 5px",
    //                 textAlign: "justify",
    //                 width: "310px",

    //               }}
    //             >
    //               &quot;{description}&quot;
    //             </Typography>
    //           </Box>

    //           <Box
    //             key={index}
    //             position="relative"
    //             sx={{
    //               width: "350px",
    //               height: "365px",

    //             }}
    //             border={2}
    //           >
    //             <Box
    //               sx={{
    //                 width: "310px",
    //                 height: "365px",

    //               }}
    //               src={imagesLinks[index]}
    //               component="img"
    //             ></Box>
    //             <Box
    //               sx={{
    //                 position: "absolute",
    //                 color: "white",
    //                 bottom: "0px",
    //                 p: "15px",
    //                 display: "flex",
    //                 width: "275px",
    //                 justifyContent: "space-between",
    //               }}
    //             >
    //               <Box>
    //                 <Typography variant="h5" sx={{ mb: "5px" }}>
    //                   {names[index]}
    //                 </Typography>
    //                 <Typography>{titles[index]}</Typography>
    //               </Box>

    //               <PlayCircleOutlineIcon
    //                 sx={{ height: "54px", width: "54px" }}
    //               />
    //             </Box>

    //             <Typography
    //               sx={{
    //                 m: "10px 0px",
    //                 p: "0px 5px",
    //                 textAlign: "justify",
    //                 width: "310px",

    //               }}
    //             >
    //               &quot;{description}&quot;
    //             </Typography>
    //           </Box>

    //           <Box
    //             key={index}
    //             position="relative"
    //             sx={{
    //               width: "350px",
    //               height: "365px",

    //             }}
    //             border={2}
    //           >
    //             <Box
    //               sx={{
    //                 width: "310px",
    //                 height: "365px",

    //               }}
    //               src={imagesLinks[index]}
    //               component="img"
    //             ></Box>
    //             <Box
    //               sx={{
    //                 position: "absolute",
    //                 color: "white",
    //                 bottom: "0px",
    //                 p: "15px",
    //                 display: "flex",
    //                 width: "275px",
    //                 justifyContent: "space-between",
    //               }}
    //             >
    //               <Box>
    //                 <Typography variant="h5" sx={{ mb: "5px" }}>
    //                   {names[index]}
    //                 </Typography>
    //                 <Typography>{titles[index]}</Typography>
    //               </Box>

    //               <PlayCircleOutlineIcon
    //                 sx={{ height: "54px", width: "54px" }}
    //               />
    //             </Box>

    //             <Typography
    //               sx={{
    //                 m: "10px 0px",
    //                 p: "0px 5px",
    //                 textAlign: "justify",
    //                 width: "310px",

    //               }}
    //             >
    //               &quot;{description}&quot;
    //             </Typography>
    //           </Box>

    //         </Box>


    //       ))}
    //     </Carousel>
    //   </Box>
    // </Box>
  );
};

export default Clients;
