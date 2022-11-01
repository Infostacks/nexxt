import React from "react";
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
