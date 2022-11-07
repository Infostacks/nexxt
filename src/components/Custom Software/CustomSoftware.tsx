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
        bgcolor: "#f8f8fb"
      }}
    >
      <Grid md={5} pr="15px">
        <IntroBanner />
      </Grid>
      <Grid md={4}>
          <Box mx="67.5px"> 
            <ConsultForm />
          </Box>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
