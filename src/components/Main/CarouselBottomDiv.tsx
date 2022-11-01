import React from "react";
import { Box, Button, Typography } from "@mui/material";
const CarouselBottomDiv = (props: any) => {
  return (
    <Box sx={{ backgroundColor: props.color, height: 150, width: 320, padding: 1, fontSize: "10px", paddingX: 2}}>
      <Typography sx={{ marginTop: 3, color: "#B2B2B2" }}>
        {props.heading1}{" "}
      </Typography>
      <Typography sx={{ marginY: 2, color: "#FFFFFF" }}>
        {props.heading2}
      </Typography>
      <Button sx={{ backgroundColor: "#FFFFFF", fontWeight: "bold" ,color: "#F15412", "&:hover": {backgroundColor: "#FFFFFF"}}}>
        {props.buttonTitle}
      </Button>
    </Box>
  );
};

export default CarouselBottomDiv;
