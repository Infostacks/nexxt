import React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Contact = () => {
  return (
    <Grid container>
      <Grid item md={12} lg={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
      </Grid>
      <Grid sx={{ marginTop: 5 }}>
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
          Email: info@tekrevol.com
        </Typography>
      </Grid>

      <Grid sx={{ marginTop: 2 }}>
        <Typography variant="body1" display="inline">
          39899 Balentine Drive, Newark, CA 94560, United States
        </Typography>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <FacebookIcon sx={{ height: 40, width: 40, '&:hover': { color: "#3135e8" } }} />
        <TwitterIcon sx={{ height: 40, width: 40, '&:hover': { color: "#00d4ff" } }} />
        <InstagramIcon sx={{ height: 40, width: 40, '&:hover': { color: "#cc3fb6" } }} />
        <LinkedInIcon sx={{ height: 40, width: 40, '&:hover': { color: "#3135e8" } }} />
        <PinterestIcon sx={{ height: 40, width: 40, '&:hover': { color: "#eb2309" } }} />
        <YouTubeIcon sx={{ height: 40, width: 40, '&:hover': { color: "#da2912" } }} />
      </Grid>
    </Grid>
  );
};

export default Contact;
