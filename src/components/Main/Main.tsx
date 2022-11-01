import React from "react";

import Services from "../Services/Services";
import Partnerships from "../Partnerships/Partnerships";
import CarouselComponent from "./CarouselComponent";

const Main = () => {
  return (
    <>
      <CarouselComponent />
      <Services />
      <Partnerships />
    </>
  );
};

export default Main;
