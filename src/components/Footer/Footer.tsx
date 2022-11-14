/* eslint-disable react/jsx-key */
import { Box, Grid } from "@mui/material";
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


//   <>
//     <Twitter />
//     <Facebook />
//     <Instagram />
//   </>
// );

function FooterApp() {
  return (
    <>
      <Grid container padding={1} justifyContent="center">
        <Grid item xs={12} sm={12} md={4} padding={2} paddingLeft={6} sx={{ borderRight: "1px solid gray" }} >
          <Contact />
        </Grid>
        <Grid item xs={12} sm={12} md={4} padding={2} paddingLeft={6} sx={{ borderRight: "1px solid gray" }}>
          <InTouch />
        </Grid>
        <Grid item xs={12} sm={12} md={4} padding={2} paddingLeft={6}>
          <Estimate />
        </Grid>
      </Grid>

      <Grid>
        <Bottom />
      </Grid>
    </>
  );
}
export default FooterApp;
