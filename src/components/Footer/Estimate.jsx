import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Estimate = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Estimate Your Project’s Cost
        </Typography>
      </Box>
      <Box sx={{ marginTop: 5 }}>
        <Typography>
          Use our project cost estimator to get a cost estimate for your project
          based on start agency pricing and compare with our pricing to measure
          your savings.
        </Typography>
      </Box>

      <Box sx={{ marginTop: 5, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            borderRadius: "10px",
            color: "white",
            padding: "10px 30px 10px 30px",
            letterSpacing: 2,
            background: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
          }}
        >
          GET FREE PRICING
        </Button>
      </Box>
    </Box>
  );
};

export default Estimate;
