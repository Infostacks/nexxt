import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
} from "@mui/material";
import CustomButton from "../CustomButton";


const IntroBanner = () => {
  return (
    <>
      <Box my="30px" px="15px" height="auto" width="auto" sx={{px: {sm: "15px", mx: {sm: "0px", md: "30px"}}}}>
        <Typography mb="20px" variant="h3">
          iOS App Development Company That Builds
          <Link to="#">
            <Typography
              variant="h3"
              sx={{ color: "#f37a20", textDecoration: "underline" }}
            >
              Disruptive Apps
            </Typography>
          </Link>
        </Typography>

        <Typography mb="20px">
          Tekrevol develops next-gen iOS apps for businesses that ensure market
          disruption, growth, and scalability.
        </Typography>
        <Typography mb="20px">
          Building enterprise-grade iOS apps since 2014, our app developers are
          well-versed in standardized technology stacks, and offer end-to-end
          iOS app development solutions that ensure leading-edge performance,
          features, and experiences.
        </Typography>

        <CustomButton
          text={"BUILD MY IOS App!"}
          buttonSize={"6px 35px"}
        ></CustomButton>
      </Box>
    </>
  );
};

export default IntroBanner;

