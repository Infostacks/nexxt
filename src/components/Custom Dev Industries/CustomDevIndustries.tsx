import { Box, Grid } from "@mui/material";
import React from "react";
import CustomDevCard from "../Card/CustomDevCard";
import IntroBanner from "../Global Components/IntroBanner";
import { introBannerProps } from "../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment";
import { IntroProps } from "../Global Components/IntroBanner";
import CustomDevIndustriesBanner from "./CustomDevIndustriesBanner";
import { CustomDevIndustriesBannerProps } from "./CustomDevIndustriesBanner";
export interface CustomDevIndustriesProps {
  devCardTitles: string[];
  devCardDetails: string[];
  CustomDevIndustriesBannerstrings: CustomDevIndustriesBannerProps;

}

const CustomDevIndustries = ({ devCardTitles, devCardDetails, CustomDevIndustriesBannerstrings }: CustomDevIndustriesProps) => {
  return (
    <Box

      sx={{
        py: "95px",
        display: "flex",
        justifyContent: "space-evenly",
        // alignItems: "center",
        //   bgcolor: "#f8f8fb"
        paddingX: {xl: "230px"},
        flexDirection: {xs: "column", md: "row", xl: 'row'}
      }}
    >
      <Box sx={{}}>
        <Box style={{ position: "sticky", top: 80 }}>
          <CustomDevIndustriesBanner {...CustomDevIndustriesBannerstrings}/>
        </Box>
      </Box>
      <Box >
        <CustomDevCard
          devCardTitles={devCardTitles}
          devCardDetails={devCardDetails}
        ></CustomDevCard>
      </Box>
    </Box>
  );
};

export default CustomDevIndustries;





