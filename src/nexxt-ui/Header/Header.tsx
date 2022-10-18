import React, { useState } from "react";
import { Button } from "../Globalstyles";
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
      <Nav
        style={{
          backgroundColor: navbar ? "rgb(194 65 12)" : "",
          opacity: 0.9,
        }}
      >
        <NavbarContainer>
          <NavLogo to="/">
            <img
              style={{ height: "50px" }}
              src={navbar ? LogoBlack : LogoRed}
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
                <Button>Get a Quote</Button>
              </MenuLinkBtn>
            </MenuItemBtn>
          </Menu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
