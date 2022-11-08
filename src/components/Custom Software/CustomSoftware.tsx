import { Box, Grid } from "@mui/material";
import React from "react";
import ConsultForm from "../Global Components/ConsultForm";
import IntroBanner from "../iphone-app-development/IntroBanner";

const CustomSoftware = () => {
  return (
    <Grid
      container
      sx={{
        pt: "100px",
        pb: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f8f8fb",
      }}
    >
      <Grid md={5} pr="15px">
        <IntroBanner heading1="Custom Software Development Services
for" heading2="Businesses of All Sizes" subtitle1="We create custom, high-impact software solutions that empower businesses and enable them to lead with automation." subtitle2="Our custom software development services provide our partners and clients with the freedom to grow and scale at unprecedented rates. We help startups, medium-sized businesses, and enterprise-grade organizations to build performance-oriented systems." />
      </Grid>
      <Grid md={4}>
        <Box mx="67.5px" sx={{
          borderLeft: { md: "70px solid #f8f8fb" },
        }}>
          <ConsultForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;



