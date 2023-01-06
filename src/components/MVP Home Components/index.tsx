import React from "react";
import PreviewSection from "./HomeComponents/PreviewSection";
import PromotionSection from "./HomeComponents/PromotionSection";
import FeaturedSection from "./HomeComponents/FeaturedSection";
import ProudProjects from "./HomeComponents/ProudProjects./ProudProjects";
import Companies from "./HomeComponents/Companies";

const MvpHomeIndex = () => {
  return (
    <div className="flex flex-col items-center mx-auto w-full overflow-x-hidden scroll-hidden  bg-bgColor text-txtColor">
      <div className="w-full">
        <PreviewSection />
      </div>
      <div className="w-full ">
        <PromotionSection />
      </div>
      <div className="w-full">
        <FeaturedSection />
      </div>
      <div className="w-full h-full">
        <ProudProjects />
      </div>
      <div className="w-full h-full">
        <Companies />
      </div>
    </div>
  );
};

export default MvpHomeIndex;
