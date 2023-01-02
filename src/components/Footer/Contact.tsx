import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Contact Us
      </Typography>

      <Box sx={{ marginTop: 3 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}
          display="inline"
        >
          Tel: (800) 362-9239
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", margin: 2 }}
          display="inline"
        >
          Email: contactnexxtai@gmail.com
        </Typography>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1" display="inline">
          39899 Balentine Drive, Newark, CA 94560, United States
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <a href='https://www.facebook.com/nexxtai'> <FacebookIcon sx={{ color: "black", height: 40, width: 40, '&:hover': { color: "#3135e8" } }} /> </a>
        <a href="https://twitter.com/nexxt_ai">
          <TwitterIcon sx={{ color: "black", height: 40, width: 40, '&:hover': { color: "#00d4ff" } }} /> </a>
        <InstagramIcon sx={{ height: 40, width: 40, '&:hover': { color: "#cc3fb6" } }} />
        <a href="https://www.linkedin.com/company/next-horizon-inc/" target="_blank" rel="noreferrer">
          <LinkedInIcon sx={{ color: "black", height: 40, width: 40, '&:hover': { color: "#3135e8" } }} /> </a>
        <PinterestIcon sx={{ height: 40, width: 40, '&:hover': { color: "#eb2309" } }} />
        <YouTubeIcon sx={{ height: 40, width: 40, '&:hover': { color: "#da2912" } }} />
      </Box>
    </Box>
  );
};

export default Contact;
