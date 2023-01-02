import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Bottom = () => {
  const footerBottom = [
    "TERMS AND CONDITIONS",
    "PRIVACY POLICY",
    "CONTACT US",
    "SITEMAP",
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", marginX: "10px", flexDirection: {xs: "column", md: "row"}}}>
      
      <Box sx={{ display: "flex", marginY: "15px" }}>
        {footerBottom.map((str, index) => (
          <Typography variant="caption" sx={{ marginX: "10px" }} key={index}>
            {str}
          </Typography>
        ))}
      </Box>
      <Box sx={{ marginY: "15px" }}>
        <Typography variant="caption">
          COPYRIGHT 2023 NEXXT ALL RIGHTS RESERVED.
        </Typography>
      </Box>
    </Box>
  );
};

export default Bottom;
