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
  const btnArr = [
    {
      buttonTitle: "SERVICES",
      menuItemDetails: [
        {
          title: "CUSTOM APPLICATION DEVELOPMENT",
          linkTo: "/custom_software",
        },
        {
          title: "CROSS PLATFORM APP DEVELOPMENT",
          linkTo: "/crossplatform",
        },
        {
          title: "START UP APP DEVELOPMENT",
          linkTo: "/startup_app_development",
        },

        {
          title: "FULL STACK WEB DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        {
          title: "REACT APP DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        {
          title: "FLUTTERS APP DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        {
          title: "DEVOPS SERVICES",
          linkTo: "/startup_app_development",
        },
        {
          title: "DESKTOP APP DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        {
          title: "CUSTOM SOFTWARE DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        {
          title: "MOBILE APP DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        {
          title: "BLOCKCHAIN DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        {
          title: "AI APP DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        {
          title: "FINTECH DEVELOPMENT",
          linkTo: "/startup_app_development",
        },
        
      ],
    },
    {
      buttonTitle: "SOLUTIONS",
      menuItemDetails: [
        {
          title: "E-CCOMMERCE",
          linkTo: "/ecommerence",
        },
        {
          title: "HEALTHCARE TECHNOLOGY",
          linkTo: "/services",
        },
        {
          title: "AI RECRUITMENT",
          linkTo: "/ecommerence",
        },
        {
          title: "FINTECH",
          linkTo: "/services",
        },
        {
          title: "BLOCKCHAIN",
          linkTo: "/ecommerence",
        },
        {
          title: "DASHBOARDS",
          linkTo: "/services",
        },
        {
          title: "ADVANCE AI",
          linkTo: "/ecommerence",
        },
        {
          title: "SOCIAL MEDIA ENGINES",
          linkTo: "/services",
        },
        {
          title: "LMS/B2B/B2C/B2E",
          linkTo: "/ecommerence",
        },
        {
          title: "MOBILE APPS",
          linkTo: "/services",
        },
        {
          title: "WEARABLE TECHNOLOGY",
          linkTo: "/ecommerence",
        },
        {
          title: "ERP DEVELOPMENT",
          linkTo: "/services",
        },
      ],
    },
    {
      buttonTitle: "STARTUPS",
      menuItemDetails: [
        {
          title: "DISCOVERY PHASE",
          linkTo: "/newyorkcity",
        },
        {
          title: "MVP DEVELOPMENT",
          linkTo: "/newyorkcity",
        },
        {
          title: "CTO AS A SERVICE",
          linkTo: "/newyorkcity",
        },
        {
          title: "DEV-TEAM AS A SERVICE",
          linkTo: "/newyorkcity",
        },
        {
          title: "AI MARKETING",
          linkTo: "/newyorkcity",
        },
      ],
    },
    {
      buttonTitle: "LOCATIONS",
      menuItemDetails: [
        {
          title: "NEW YORK, USA",
          linkTo: "/newyorkcity",
        },
        {
          title: "ATLANTA, USA",
          linkTo: "/newyorkcity",
        },
        {
          title: "LONDON, UK",
          linkTo: "/newyorkcity",
        },
        {
          title: "ONTARIO, CA",
          linkTo: "/newyorkcity",
        },
        {
          title: "DUBAI, UAE",
          linkTo: "/newyorkcity",
        },
      ],
    },
    {
      buttonTitle: "INSIGHTS",
      menuItemDetails: [
        {
          title: "NEXXT APP",
          linkTo: "/services",
        },
        {
          title: "LAUNCHES",
          linkTo: "/",
        },
        {
          title: "EVENTS",
          linkTo: "/services",
        },
        {
          title: "TESTIMONIALS",
          linkTo: "/services",
        },
        {
          title: "PROGRESS",
          linkTo: "/",
        },
        {
          title: "BLOGS",
          linkTo: "/",
        },
        {
          title: "NEWS",
          linkTo: "/services",
        },
        {
          title: "ABOUT",
          linkTo: "/",
        },
      ],
    },
  ];
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
            height: "60px",
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
              <Link to={"/portfolio"} style={{ textDecoration: "none" }}>

                <Box sx={{ "&:hover": { borderBottom: 2, borderBottomColor: "orangeRed" }, marginTop: "10px", }}>
                  <Button className='font-medium' sx={{ color: window.location.pathname !== "/" ? "black" : "white", fontSize: "12px" }}>PORTFOLIO</Button>
                </Box>
              </Link>
              <Link to="/get-quote" style={{ textDecoration: "none", marginLeft: "15px", fontWeight: "normal", marginTop: "5px", height: "50px" }}>
                <CustomButton text={"Get a Quote"} buttonSize={"7px 30px 7px 30px"} background={`${theme.palette.background.default}`} />
              </Link>
              <Link to="/get-quote" style={{ textDecoration: "none", marginLeft: "15px", fontWeight: "normal", marginTop: "5px", height: "50px" }}>
                <CustomButton text={"SignIn/Register"} buttonSize={"7px 30px 7px 30px"} background={`${theme.palette.background.default}`} />
              </Link>
            </Box>
          </Box>
        </Box>
      )}

    </>
  );
};

export default Header;
