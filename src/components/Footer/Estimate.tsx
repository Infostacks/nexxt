import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomButton from "../Global Components/CustomButton";
const Estimate = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Estimate Your Project’s Cost
        </Typography>
      </Box>
      <Box sx={{ marginTop: 5, width: {xs: "80vw", md: "25vw"} }}>
        <Typography textAlign={"justify"}>
          Use our project cost estimator to get a cost estimate for your project
          based on start agency pricing and compare with our pricing to measure
          your savings.
        </Typography>
      </Box>

      <Box sx={{ marginTop: 5, display: "flex", justifyContent: "center" }}>
       <CustomButton text="GET FREE PRICING" buttonSize="10px 30px"/>
      </Box>
    </Box>
  );
};

export default Estimate;
