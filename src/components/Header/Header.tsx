import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuIcon,
  Menu,
  MenuLink,
  MenuLinkBtn,
  MenuItem,
  MenuItemBtn,
} from "./Header.styles";
import LogoRed from "../../assets/images/logo/nexxt-white.png";
import LogoBlack from "../../assets/images/logo/nexxt-black.png";
import { Box, Button } from "@mui/material";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

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
          backgroundColor: navbar ? "#282526" : "",
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
        <NavbarContainer >
          <NavLogo to="/">
            <img
              style={{ height: "50px" }}
              src={navbar ? LogoRed : LogoBlack}
              alt="Workflow"
            />
          </NavLogo>
          <MenuIcon onClick={handleClick}></MenuIcon>
          <Menu onClick={handleClick}>
            <MenuItem>
              <MenuLink to="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/services">Services</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/portfolio">Portfolio</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/blogs">Blogs</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/gallery">Gallery</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/careers">Careers</MenuLink>
            </MenuItem>
            <MenuItemBtn>
              <MenuLinkBtn to="/get-quote">
                <Button
                  sx={{
                    fontWeight: "bold",
                    borderRadius: "10px",
                    color: "white",
                    padding: "10px 30px 10px 30px",
                    background:
                      "linear-gradient(-90deg, #ffa20a 0, #fd4b0f 100%)",
                  }}
                >
                  Get a Quote
                </Button>
              </MenuLinkBtn>
            </MenuItemBtn>
          </Menu>
        </NavbarContainer>
      </Box>
    </>
  );
};

export default Header;
