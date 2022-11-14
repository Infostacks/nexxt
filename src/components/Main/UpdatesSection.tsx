import { Box } from "@mui/material";
import React from "react";
import CarouselBottomDiv from "./CarouselBottomDiv";

const UpdatesSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row", xl: "row" },
        justifyContent: {
          xs: "center",
          md: "center",
          xl: "center",
        },
        position: "absolute",
        bottom: 0,
        right: 100,
        zIndex: 100,
        visibility: { xs: "hidden", md: "visible", xl: "visible" },
      }}
    >
      <Box display="inline">
        <CarouselBottomDiv
          heading1="LATEST PROJECTS"
          heading2="AMJ Workplace Wellness | Driven by results"
          buttonTitle="Download Now"
          color="#ee3824"
        />
      </Box>

      <Box>
        <CarouselBottomDiv
          heading1="COMPANY PROFILE"
          heading2="Here's What We Do in the GCC"
          buttonTitle="Download Now"
          color="#3C4048"
        />
      </Box>
    </Box>
  );
};

export default UpdatesSection;
