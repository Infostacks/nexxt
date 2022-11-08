import React, { useEffect, useState } from "react";
import LogoRed from "../../assets/images/logo/nexxt-white.png";
import LogoBlack from "../../assets/images/logo/nexxt-black.png";
import { Box, Button, Grid } from "@mui/material";
import CustomButton from "../CustomButton";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
          backgroundColor: window.location.pathname === "/" && navbar ? "#282526" : !navbar ? "" : window.location.pathname === "/services" ? "white": "",
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
          margin: "0 auto",
          padding: "0 50px",
          maxWidth: "1300px",
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

          <Box >
            <NavLink to="/" style={({ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black", textDecoration: "none", marginRight: "15px" })}>Home</NavLink>
            <Link to="/services" style={{ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black", textDecoration: "none", marginRight: "15px" }}>Services</Link>
            <Link to="/portfolio" style={{ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black", textDecoration: "none", marginRight: "15px" }}>Portfolio</Link>
            <Link to="/blogs" style={{ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black", textDecoration: "none", marginRight: "15px" }}>Blogs</Link>
            <Link to="/gallery" style={{ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black", textDecoration: "none", marginRight: "15px" }}>Gallery</Link>
            <Link to="/careers" style={{ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black", textDecoration: "none", marginRight: "15px" }}>Careers</Link>
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