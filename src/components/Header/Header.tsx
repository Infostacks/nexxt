import React, { useEffect, useState } from "react";
import LogoRed from "../../assets/images/logo/nexxt-white.png";
import LogoBlack from "../../assets/images/logo/nexxt-black.png";
import { Box, Button, Grid } from "@mui/material";
import CustomButton from "../CustomButton";
import { Link, NavLink } from "react-router-dom";
import NavButton from "../Global Components/NavButton";

const Header = () => {
  const btnArr = [{
    buttonTitle: "SERVICES",
    menuItemDetails: [{
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      linkTo: "/custom_software"
    },
    {
      title: " IPHONE APP DEVELOPMENT",
      linkTo: "/iphone"
    },
    {
      title: " ANDROID APP DEVELOPMENT",
      linkTo: "/"
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

  },]
  const [navbar, setNavbar] = useState(false);
  const linkColor = "white"
  console.log(window.location.pathname === "/")
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  const changeNavBG = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBG);

  return (

    <>
      <Box
        sx={{
          backgroundColor: window.location.pathname === "/" && navbar ? "#282526" : !navbar ? "" : window.location.pathname === "/services" ? "white" : "",
          fontSize: "18px",
          position: "fixed",
          top: "0",
          zIndex: "999",
          width: "100%",
          height: "70px",
          transition: "linear 0.3s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{
          backgroundColor: window.location.pathname === "/" && navbar ? "#282526" : !navbar ? "" : "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
          margin: "0 auto",
          padding: "0 50px",
          width: "100%",
        }}>
          <Link to="/">
            <Box >
              <img
                style={{ height: "50px" }}
                src={navbar ? LogoRed : LogoBlack}
                alt="Workflow"
              />
            </Box>
          </Link>

          <Box style={{ display: "flex" }}>
            <NavLink to="/" style={({ marginRight: "15px", textDecoration: "none" })}><Button onClick={handleClick} sx={{ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black" }}>Home </Button></NavLink>
            {btnArr.map((obj, index) => (
              <Box style={{ marginRight: "15px" }} key={index}><NavButton title={obj.buttonTitle} menuObj={obj.menuItemDetails} /></Box>
            ))}
            <NavLink to="/" style={({ marginRight: "15px", textDecoration: "none" })}><Button onClick={handleClick} sx={{ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black" }}>Portfolio </Button></NavLink>
            <Link to="/get-quote" style={{ textDecoration: "none", marginLeft: "15px" }}>
              <CustomButton text={"Get a Quote"} buttonSize={"10px 30px 10px 30px"} />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;