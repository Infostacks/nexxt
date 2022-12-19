import React from "react";

import Services from "../Services/Services";
import Partnerships from "../Partnerships/Partnerships";
import CarouselComponent from "./CarouselComponent";
import { Box } from "@mui/material";
import {
  descriptions,
  color,
  imagesLinks,
  catList,
  logoLink,
} from "../../assets/Strings/Projects";
import CustomButton from "../CustomButton";
import AwardsCard from "../Card/AwardsCard";
import Header from "../Header/Header";
import logoImg from "../../assets/images/logo/NX white A.png";
import SideBanner from "../Global Components/SideBanner";
import Projects from "../Projects";
import Clients from "../Clients";
const Main = () => {
  return (
    <Box sx={{ height: "auto" }}>
      <Header logourl={logoImg} />
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
      <SideBanner />

    </Box>
  );
};

export default Main;                         
