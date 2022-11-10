import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
} from "@mui/material";
import CustomButton from "../CustomButton";

export interface IntroProps {
  heading1: string;
  heading2: string;
  subtitle1: string;
  subtitle2: string
}

const IntroBanner = ({ heading1, heading2, subtitle1, subtitle2 }: IntroProps) => {
  return (
    <>
      <Box my="30px" px="15px" height="auto" width="auto" sx={{ px: { sm: "15px", mx: { sm: "0px", md: "30px" } } }}>
        <Typography mb="20px" variant="h3">

          {heading1}
          <Link to="#">
            <Typography
              variant="h3"
              sx={{ color: "#f37a20", textDecoration: "underline" }}
            >

              {heading2}
            </Typography>
          </Link>
        </Typography>

        <Typography mb="20px">

          {subtitle1}
        </Typography>
        <Typography mb="20px">

          {subtitle2}
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

