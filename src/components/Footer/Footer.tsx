/* eslint-disable react/jsx-key */
import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Bottom from "./Bottom";
import Contact from "./Contact";
import Estimate from "./Estimate";
import InTouch from "./InTouch";

const menu = [
  {
    name: "Program Guides",
    links: [
      { title: "Rough Around The Edges", url: "www.openfit.com" },
      { title: "Xtend Barre", url: "www.openfit.com" },
      { title: "600 Seconds", url: "www.openfit.com" },
      { title: "Yoga52", url: "www.openfit.com" },
    ],
  },
  {
    name: "About Us",
    links: [
      { title: "About Openfit", url: "www.openfit.com" },
      { title: "Help and Feedback", url: "www.openfit.com" },
      { title: "Terms and Condition", url: "www.openfit.com" },
      { title: "Privacy Policy", url: "www.openfit.com" },
      { title: "FAQ", url: "www.openfit.com" },
    ],
  },
];

// const SocialList = () => (
//   <>
//     <Twitter />
//     <Facebook />
//     <Instagram />
//   </>
// );

function FooterApp() {
  const theme = useTheme()
  const ismd = useMediaQuery(theme.breakpoints.only("lg"))
  const isxs = useMediaQuery(theme.breakpoints.only("xs"))
  return (
    <Box position={"relative"}>
      <Grid container padding={1} justifyContent="center" >
        <Grid item xs={12} sm={12} md={3.5} padding={1} paddingLeft={4} sx={isxs ? { borderBottom: "1px solid gray" } : { borderRight: "1px solid gray" }} >
          <Contact />
        </Grid>
        <Grid item xs={12} sm={12} md={3.5} padding={1} paddingLeft={4} sx={isxs ? { borderBottom: "1px solid gray" } : { borderRight: "1px solid gray" }}>
          <InTouch />
        </Grid>
        <Grid item xs={12} sm={12} md={3.5} padding={1} sx={{ height: "100%", width: "33%", marginX: 2, marginY: 5 }}>
          <Estimate />
        </Grid>
      </Grid>
      <Box
        sx={{
          bottom: 0,
          backgroundColor: "white",
          height: 50,
          position: "absolute",
          width: "100%",
          // borderTop: "1px solid gray",
        }}
      >
        <Bottom />
      </Box>
    </Box>
  );
}
export default FooterApp;
