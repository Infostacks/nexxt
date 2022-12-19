import React from "react";
import { Box, Button, Typography } from "@mui/material";
const CarouselBottomDiv = (props: any) => {
  return (
    <Box sx={{ backgroundColor: props.color, height: 160, width: { md: 370, xl: 400 }, paddingY: 1, paddingX: 2 }}>
      <Typography variant="body1" sx={{ marginTop: 3, color: "#B2B2B2", letterSpacing: "1px" }} >
        {props.heading1}{" "}
      </Typography>
      <Typography variant="body1" sx={{ marginY: 2, color: "#FFFFFF" }} className="font-medium">
        {props.heading2}
      </Typography>
      <a href={props.fileLink} download="Nexxt Company Profile.pdf" style={{textDecoration: "none"}}>
        <Button sx={{ backgroundColor: "#FFFFFF", fontWeight: "700", color: "#F15412", "&:hover": { backgroundColor: "#FFFFFF" }, fontSize: "12px" }} className="font-regular">
          {props.buttonTitle}
        </Button>
      </a>
    </Box>
  );
};

export default CarouselBottomDiv;
