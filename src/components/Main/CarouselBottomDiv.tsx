import React from "react";
import { Box, Button, Typography } from "@mui/material";

const CarouselBottomDiv = (props: any) => {
  return (
    <Box
      sx={{
        backgroundColor: props.color,
        height: 150,
        width: 320,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        paddingX: 5,
        paddingY: 7,
        fontSize: "10px",
      }}
    >
      <Typography sx={{ color: "#FFFFFF", fontWeight: "bolder" }}>
        {props.heading1}{" "}
      </Typography>
      <Typography sx={{ color: "#FFFFFF" }}>{props.heading2}</Typography>
      <Button
        sx={{
          backgroundColor: "#FFFFFF",
          fontWeight: "bold",
          width: "fit-content",
          letterSpacing: 3,
          paddingX: 3,
          color: "#F15412",
          "&:hover": { backgroundColor: "#FFFFFF" },
        }}
      >
        {props.buttonTitle}
      </Button>
    </Box>
  );
};

export default CarouselBottomDiv;
