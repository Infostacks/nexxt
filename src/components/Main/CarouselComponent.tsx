import React from "react";
import img1 from "../../assets/images/images/1.png";
import img6 from "../../assets/images/images/6.png";
import img3 from "../../assets/images/images/3.png";
import img5 from "../../assets/images/images/5.png";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, A11y, Zoom, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import UpdatesSection from "./UpdatesSection";
import Slide from "./Slide";

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
        modules={[EffectFade, Zoom, Autoplay, A11y]}
        slidesPerView={1}
        spaceBetween={30}
        zoom={{
          maxRatio: 10,
        }}
        loop={true}
        speed={2100}
        autoplay={{
          delay: 2000,
        }}
        navigation
      >
        {carouselData.map((carouselObj, index) => (
          <SwiperSlide key={index}>
            <Slide
              heading={carouselObj.heading}
              description={carouselObj.description}
              btnText={carouselObj.btnText}
              image={carouselObj.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <UpdatesSection />
    </Box>
  );
};

export default CarouselComponent;
