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
  subtitle2: string;
  btnTitle: string
}

const IntroBanner = ({ heading1, heading2, subtitle1, subtitle2, btnTitle }: IntroProps) => {
  return (
    <>
      <Box  mr="20px" height="auto" width="auto" sx={{ px: { xs: "15px", mx: { xs: "0px", md: "10px" } }, my: {xs: "15px", md: "30px", xl: "30px"} }} alignItems={"start"} >
        <Box sx={{ width: { xs: "350px", md: "750px", xl: "800px"} }}>
          <Typography mb="20px" variant="h3" sx={{ lineHeight: {xs: "50px", md: "75px", xl: "75px"}}}>

            {heading1}
            <Link to="#">
              <Typography
                variant="h3"
                sx={{ color: "#f37a20", textDecoration: "underline", lineHeight: {xs: "50px", md: "75px", xl: "75px"}}}
                className="font-extrabold" 
              >

                {heading2}
              </Typography>
            </Link>
          </Typography>
        </Box>
        <Box sx={{ width: {xs: "350px", md: "750px", xl: "600px"} }}>
          <Typography variant="subtitle1" mb="20px" >

            {subtitle1}
          </Typography>
        </Box>
        <Box sx={{ width: {xs: "350px", md: "750px", xl: "600px"} }}>
          <Typography variant="subtitle1" mb="20px" >

            {subtitle2}
          </Typography>
        </Box>
        <Box sx={{ width: "350px" }}>
          <CustomButton
            text={btnTitle}
            buttonSize={"6px 35px"}
          ></CustomButton>
        </Box>
      </Box>
    </>
  );
};

export default IntroBanner;

