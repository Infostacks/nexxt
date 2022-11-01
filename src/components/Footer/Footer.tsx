/* eslint-disable react/jsx-key */
import Box from "@mui/material/Box";
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
  return (
    <Box sx={{ backgroundColor: "white", height: 400, position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          
        }}
      >
        <Box sx={{ borderRight: "1px solid gray", height: "100%",width: "33%", marginX: 2, marginY: 5, padding: 2 }}>
          <Contact />
        </Box>
        <Box sx={{ borderRight: "1px solid gray", height: "100%", width: "33%", marginX: 2, marginY: 5  }}>
          <InTouch />
        </Box>
        <Box sx={{ height: "100%", width: "33%", marginX: 2, marginY: 5  }}>
          <Estimate />
        </Box>
      </Box>
      <Box
        sx={{
          bottom: 0,
          backgroundColor: "white",
          height: 50,
          position: "absolute",
          width: "100%",
          borderTop: "1px solid gray",
        }}
      >
        <Bottom />
      </Box>
    </Box>
  );
}
export default FooterApp;
