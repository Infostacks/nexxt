import React, { useState } from 'react';
import { Menu, MenuItem, Button, Box } from "@mui/material"
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface navButtonProps {
    title: string;
    menuObj: menuItemDetailsprop[]
}

interface menuItemDetailsprop {
    title: string;
    linkTo: string
}
const NavButton = ({ title, menuObj }: navButtonProps) => {
    const arr = [{
        title: "Custom Software",
        linkTo: "/services"
    },
    {
        title: "Home",
        linkTo: "/"
    }
    ]
    const [open, setOpen] = useState(false)
    const [anchorElm, setAnchorElm] = useState(null)

    const handleClose = () => {
        setAnchorElm(null)
        setOpen(false)
    }

    const handleClick = (e: any) => {
        setAnchorElm(e.currentTarget);
        setOpen(true)
    }
    return (
        <>
            <Button onClick={handleClick} sx={{ fontWeight: "bold", color: window.location.pathname === "/" ? "white" : "black" }}>{title} <ArrowDropDownIcon /></Button>

            <Menu anchorEl={anchorElm} open={open} onClose={handleClose} sx={{ "& .MuiList-root": { padding: "0px 0px", "&:hover": { backgroundColor: "#282526" } } }}>
                <Box>
                    {menuObj.map((obj, index) => (

                        <Link to={obj.linkTo} key={index} style={{ textDecoration: "none" }}>
                            <MenuItem onClick={handleClose} sx={{ borderBottom: "1px solid gray", backgroundColor: "#282526", color: "white", fontWeight: "bold", fontSize: "10px", "& .MuiList-root": { padding: "0px 0px" }, "&:hover": { color: "#F77E21" } }}>{obj.title}</MenuItem>
                        </Link>

                    ))}
                </Box>
            </Menu>

        </>
    )
}

export default NavButton
