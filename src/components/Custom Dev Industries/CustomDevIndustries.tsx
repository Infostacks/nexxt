import { Box, Grid } from "@mui/material";
import React from "react";
import {
  devCardDetails,
  devCardTitles,
} from "../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment"; 
import CustomDevCard from "../Card/CustomDevCard";
import IntroBanner from "../Global Components/IntroBanner";
import { introBannerProps } from "../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment";

export interface devCardProps {
  devCardDetails: string[];
  devCardTitles: string[];
}

const CustomDevIndustries = () => {
  return (
    <Grid
      container
      sx={{
        py: "95px",
        // display: "flex",
        justifyContent: "center",
        //   alignItems: "center",
        //   bgcolor: "#f8f8fb"
      }}
    >
      <Grid item md={5}>
        <Box style={{ position: "sticky", top: 80 }}>
        <IntroBanner {...introBannerProps}/>
        </Box>
      </Grid>
      <Grid md={1}></Grid>
      <Grid item md={6}>
        <CustomDevCard
          devCardTitles={devCardTitles}
          devCardDetails={devCardDetails}
        ></CustomDevCard>
      </Grid>
    </Grid>
  );
};

export default CustomDevIndustries;
