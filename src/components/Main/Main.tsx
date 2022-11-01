import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../assets/images/images/4.png";
import img2 from "../../assets/images/images/7.png";
import img3 from "../../assets/images/images/3.png";
import FooterApp from "../Footer/Footer";
import AndroidIcon from "@mui/icons-material/Android";
import TerminalIcon from "@mui/icons-material/Terminal";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RecipeReviewCard from "../Card/Card";
import { Box, Button, Typography } from "@mui/material";
import Projects from "../Projects";
import Clients from "../Clients";
import Services from "../Services/Services";
import Partnerships from "../Partnerships/Partnerships";
import CarouselComponent from "./CarouselComponent";

import {
  descriptions,
  color,
  imagesLinks,
  catList,
  logoLink,
} from "../../assets/Strings/Projects";
import CustomButton from "../CustomButton";
import AwardsCard from "../Card/AwardsCard";

const Main = () => {
  return (
    <>
      <CarouselComponent />
      <Services />
      <Partnerships />

      {descriptions.map((description, index) => (
        <Projects
          key={description}
          description={description}
          color={color[index]}
          imagesLinks={imagesLinks[index]}
          catList={catList[index]}
          logoLink={logoLink[index]}
        />
      ))}
      <Clients />
      <AwardsCard />
    </>
  );
};

export default Main;
