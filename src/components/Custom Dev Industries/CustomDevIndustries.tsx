import { Box, Grid } from "@mui/material";
import React from "react";
import CustomDevCard from "../Card/CustomDevCard";
import IntroBanner from "../Global Components/IntroBanner";
import { introBannerProps } from "../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment";
import { IntroProps } from "../Global Components/IntroBanner";

export interface CustomDevIndustriesProps {
  devCardTitles: string[];
  devCardDetails: string[];
  introBannerProps: IntroProps;
}

const CustomDevIndustries = ({devCardTitles, devCardDetails, introBannerProps}: CustomDevIndustriesProps) => {
  return (
    <Grid
      container
      sx={{
        py: "95px",
        display: "flex",
        justifyContent: "space-evenly",
        //   alignItems: "center",
        //   bgcolor: "#f8f8fb"
      }}
    >
      <Grid item md={5} lg={5} sx={{pl:{md:"100px"}}}>
        <Box style={{ position: "sticky", top: 80 }}>
        <IntroBanner {...introBannerProps}/>
        </Box>
      </Grid>
      <Grid item md={5} lg={5}>
        <CustomDevCard
          devCardTitles={devCardTitles}
          devCardDetails={devCardDetails}
        ></CustomDevCard>
      </Grid>
    </Grid>
  );
};

export default CustomDevIndustries;





