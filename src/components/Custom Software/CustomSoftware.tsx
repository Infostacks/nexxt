import { Box, Grid } from "@mui/material";
import React from "react";
import { introBannerProps } from "../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment";
import ConsultForm from "../Global Components/ConsultForm";
import IntroBanner from "../Global Components/IntroBanner";
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
        // bgcolor: "#f8f8fb",
      }}
    >
      <Grid item md={6} lg={5} pr="15px">
        <IntroBanner {...introBannerProps} />
      </Grid>
      <Grid item md={6} lg={4} pr="100px">
        {/* <Box  sx={{
          // borderLeft: { md: "70px solid #f8f8fb" },
        }}> */}
          <ConsultForm />
        {/* </Box> */}
      </Grid>

    </Grid>
  );
};
export default CustomSoftware;