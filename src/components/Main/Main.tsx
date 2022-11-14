import React from "react";
import Projects from "./Projects";
import Clients from "./Clients";
import Services from "./Services/Services";
import Partnerships from "./Partnerships/Partnerships";
import CarouselComponent from "./CarouselComponent";

import { Parallax } from "react-scroll-parallax";

import {
  descriptions,
  color,
  imagesLinks,
  catList,
  logoLink,
} from "../../assets/Strings/Projects";
import AwardsCard from "./AwardsCard";

const Main = () => {
  return (
    <>
      <CarouselComponent />
      <Services />
      <Partnerships />

      {descriptions.map((description, index) => (
        <Parallax translateY={[-20, 10]} key={description}>
          <Projects
            description={description}
            color={color[index]}
            imagesLinks={imagesLinks[index]}
            catList={catList[index]}
            logoLink={logoLink[index]}
          />
        </Parallax>
      ))}

      <Clients />
      <AwardsCard />
    </>
  );
};

export default Main;
