import React, { useEffect, useState } from "react";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import CustomButton from "../Global Components/CustomButton";
import { Link, NavLink } from "react-router-dom";
import NavButton from "../Global Components/NavButton";
import DrawerComponent from "../Global Components/DrawerComponent";

interface headerprops {
  logourl: string
}
const Header = ({ logourl }: headerprops) => {
  const theme = useTheme()
  // console.log("theme", theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  const btnArr = [{
    buttonTitle: "SERVICES",
    menuItemDetails: [{
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      linkTo: "/custom_software"
    },
    {
      title: "CROSS PLATFORM APP DEVELOPMENT",
      linkTo: "/crossplatform"
    },
    {
      title: "START APP DEVELOPMENT",
      linkTo: "/startup_app_development"
    }]

  }, {
    buttonTitle: "SOLUTIONS",
    menuItemDetails: [{
      title: "AUTOMATIVE APP DEVELOPMENT",
      linkTo: "/"
    },
    {
      title: "HEALTHCARE APP DEVELOPMENT",
      linkTo: "/services"
    },]

  }, {
    buttonTitle: "LOCATIONS",
    menuItemDetails: [{
      title: "USA",
      linkTo: "/services"
    },
    {
      title: "CANADA",
      linkTo: "/"
    },]

  }, {
    buttonTitle: "INSIGHTS",
    menuItemDetails: [{
      title: "ABOUT",
      linkTo: "/services"
    },
    {
      title: "BLOGS",
      linkTo: "/"
    },]

  }, {
    buttonTitle: "PORTFOLIO",
    menuItemDetails: []

  }

  ]
  const [navbar, setNavbar] = useState(false);
  const changeNavBG = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBG);
  // console.log(window.location.pathname === "/")
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);




  return (
    <>
      {isMatch ? (
        <DrawerComponent />
      ) : (
        <Box
          // border={2}
          sx={{
            backgroundColor: window.location.pathname === "/" && navbar ? "#282526" : !navbar ? "" : "white",
            fontSize: "18px",
            position: "fixed",
            top: "0",
            // left: "0",
            zIndex: "999",
            width: "100vw",
            height: "70px",
            paddingY: navbar ? 0 : 8,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box display="flex" justifyContent="space-between" sx={{ width: { md: "90%", xl: "66%" } }}>
            <Link to="/">
              <Box >
                <img
                  style={{ height: "30px", marginTop: "15px" }}
                  src={logourl}
                  alt="Workflow"
                />
              </Box>
            </Link>

            <Box sx={{ display: "flex" }}>

              {btnArr.map((obj, index) => (
                <Box sx={{ marginRight: "15px", "&:hover": { borderBottom: 2, borderBottomColor: "orangeRed" }, marginTop: "10px", height: "45px" }} key={index}><NavButton title={obj.buttonTitle} menuObj={obj.menuItemDetails} navbar={navbar} /></Box>
              ))}

              <Link to="/get-quote" style={{ textDecoration: "none", marginLeft: "15px", fontWeight: "normal", marginTop: "5px", height: "50px" }}>
                <CustomButton text={"Get a Quote"} buttonSize={"7px 30px 7px 30px"} />
              </Link>
              <Link to="/get-quote" style={{ textDecoration: "none", marginLeft: "15px", fontWeight: "normal", marginTop: "5px", height: "50px" }}>
                <CustomButton text={"SignIn/Register"} buttonSize={"7px 30px 7px 30px"} />
              </Link>
            </Box>
          </Box>
        </Box>
      )}

    </>
  );
};

export default Header;
