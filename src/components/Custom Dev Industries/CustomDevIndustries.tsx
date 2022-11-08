import { Box, Grid } from "@mui/material";
import React from "react";
import {
  devCardDetails,
  devCardTitles,
} from "../../assets/Strings/Services/iphone-app-development/IphoneAppDevelopment";
import CustomDevCard from "../Card/CustomDevCard";
import IntroBanner from "../iphone-app-development/IntroBanner";

const CustomDevIndustries = () => {
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
      <Grid item md={4}>
        <Box style={{ position: "sticky", top: 80 }}>
        <IntroBanner heading1="Custom Software Development Services
for" heading2="Businesses of All Sizes" subtitle1="We create custom, high-impact software solutions that empower businesses and enable them to lead with automation." subtitle2="Our custom software development services provide our partners and clients with the freedom to grow and scale at unprecedented rates. We help startups, medium-sized businesses, and enterprise-grade organizations to build performance-oriented systems." />
        </Box>
      </Grid>

      <Grid item md={5}>
        <CustomDevCard
          devCardTitles={devCardTitles}
          devCardDetails={devCardDetails}
        ></CustomDevCard>
      </Grid>
    </Grid>
  );
};

export default CustomDevIndustries;
