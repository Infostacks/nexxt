import { Box, Grid } from "@mui/material";
import React from "react";
import { introBannerProps } from "../../assets/Strings/Services/customSoftwareDevelopment/customSoftwareDevelopment";
import ConsultForm from "../Global Components/ConsultForm";
import IntroBanner from "../Global Components/IntroBanner";
const CustomSoftware = () => {
  return (
    <Box
      // border={2}
      sx={{
        pt: {xs: "0px", md: "100px", xl: "100px"},
        pb: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor: "#f8f8fb",
        backgroundColor: "#f8f8fb",
        flexDirection: {xs: "column", md: "row", xl: "row"}
      }}
    >

      <IntroBanner {...introBannerProps} />
      <ConsultForm />

    </Box>
  );
};
export default CustomSoftware;