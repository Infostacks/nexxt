import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface SlideProps {
  heading: string;
  description: string;
  btnText: string;
  image: string;
}

const Slide = ({ heading, description, btnText, image }: SlideProps) => {
  return (
    <Box
      sx={{
        // height: "850px",
        display: "flex",
        color: "white",
        paddingX: {
          xs: "20px",
          md: "0px",
          lg: "0px",
          xl: "0px",
        },
        justifyContent: {
          xs: "block",
          md: "space-between",
          lg: "space-around",
          xl: "space-around",
        },
      }}
    >
      <Box
        sx={{
          marginTop: { xs: 15, md: 30, xl: 30 },
          marginLeft: { md: 20, xl: 40 },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "350px",
              md: "400px",
              lg: "500px",
              xl: "600px",
            },
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bolder", fontSize: 35 }}>
            {heading}
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "start",
            width: {
              xs: "350px",
              md: "400px",
              lg: "500px",
              xl: "600px",
            },
            marginY: 2,
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: { xs: "center", md: "start", xl: "start" },

            width: 300,
            marginY: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "10px 30px 10px 30px",
              letterSpacing: 3,
              background: "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
            }}
          >
            {btnText}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          marginRight: { md: 20, xl: 40, sm: 15 },
          marginTop: { md: 12, xl: 12 },
          visibility: { xs: "hidden", md: "visible", xl: "visible" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            float: "right",
            justifyContent: "flex-end",
            flexShrink: 1,
          }}
        >
          <img style={{ height: "600px", width: "525px" }} src={image} />
        </Box>
      </Box>
    </Box>
  );
};

export default Slide;
