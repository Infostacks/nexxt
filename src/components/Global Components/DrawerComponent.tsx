import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import CustomButton from './CustomButton';

import LogoWhite from "../../assets/images/logo/NX white A.png"
import LogoBlack from "../../assets/images/logo/NX black A.png"
import { Link } from 'react-router-dom';
import NavButton from './NavButton';

const DrawerComponent = () => {

    const [navbar, setNavbar] = useState(false);
    const changeNavBG = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const [openDrawer, setOpenDrawer] = useState(false)
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
        },]

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
    return (
        <Box sx={{
            backgroundColor: window.location.pathname === "/" && navbar ? "#282526" : !navbar ? "" : "white",
            width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 1,
            top: "5vh",
            // left: "0",
            zIndex: "999",

        }}>
            <Box sx={{ marginTop: { xs: "5px" } }}>
                <Link to="/">
                    <img
                        style={{ height: "30px" }}
                        src={window.location.pathname == "/" ? LogoWhite : LogoBlack}
                        alt="Workflow"
                    />
                </Link>
            </Box>
            <Box>
                <Drawer open={openDrawer} onClose={() => { setOpenDrawer(false) }} anchor="right" sx={{}}>
                    <List sx={{ backgroundColor: window.location.pathname === "/" ? "black" : "white", height: "100%" }}>
                        {btnArr.map((obj, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon  >
                                    <ListItemText sx={{ color: window.location.pathname == "/" ? "black" : "white" }}>
                                        <NavButton title={obj.buttonTitle} menuObj={obj.menuItemDetails} />
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))}
                        <ListItemButton >
                            <ListItemIcon  >
                                <ListItemText sx={{ color: "white" }}>
                                    <CustomButton text='Get a quote' buttonSize='5px 5px' />
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                </Drawer>
                <IconButton onClick={() => (setOpenDrawer(!openDrawer))}>
                    <MenuIcon />
                </IconButton>
            </Box>


        </Box>
    );
}

// {
//     btnArr.map((obj, index) => (
//         <Box style={{ marginRight: "15px" }} key={index}></Box>
//     ))
// }

export default DrawerComponent