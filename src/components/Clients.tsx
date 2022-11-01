import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

// interface ProjectsProps {
//   imagesLinks: string;
//   description:string;
//   names: string;
//   titles: string;
// }

import {
  descriptions,
  names,
  imagesLinks,
  titles,
} from "../assets/Strings/Clients";

// {description, names, imagesLinks, titles}: ProjectsProps

const Clients = () => {
  return (
    <Box bgcolor="white" display="flex" justifyContent="center" py="90px">
      <Box width="70%" px="15px">
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
        >
        </Box>
        <Typography ml="90px">TESTIMONIALS</Typography>

        <Typography variant="h4" pt="20px" mb="40px">
          Our Clients Love Our Work!
        </Typography>

        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {descriptions.map((description, index) => (
            <SwiperSlide key={index}>
              <Box
                position="relative"
                sx={{
                  width: "350px",
                  height: "365px",
                }}
              >
                <Box
                  sx={{
                    width: "350px",
                    height: "365px",
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
                    width: "320px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ mb: "5px" }}>
                      {names[index]}
                    </Typography>
                    <Typography>{titles[index]}</Typography>
                  </Box>

                  <PlayCircleOutlineIcon
                    sx={{ height: "54px", width: "54px" }}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  m: "10px 0px",
                  p: "0px 5px",
                  textAlign: "justify",
                  width: "330px",
                }}
              >
                &quot;{description}&quot;
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Clients;
