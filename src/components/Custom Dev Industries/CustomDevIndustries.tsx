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
          <IntroBanner />
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
