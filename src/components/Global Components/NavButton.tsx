import React, { useState } from 'react';
import { Menu, MenuItem, Button, Box } from "@mui/material"
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface navButtonProps {
    title: string;
    menuObj: menuItemDetailsprop[];
    navbar?: boolean;
}

interface menuItemDetailsprop {
    title: string;
    linkTo: string;
}

const NavButton = ({ title, menuObj }: navButtonProps) => {

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
            <Button className='font-medium' sx={{ color: window.location.pathname !== "/" ? "black" : "white", fontSize: "12px" }} onClick={handleClick} >{title} {menuObj.length >= 1 ? <ArrowDropDownIcon fontSize='small' /> : <

                ></>}</Button>
            <Box width={100} sx={{ "& .MuiPaper-root": { minWidth: "0px" } }}>
                <Menu anchorEl={anchorElm} open={open} onClose={handleClose} sx={{ "& .MuiList-root": { padding: "0px 0px", "&:hover": { backgroundColor: "#282526" } }, "& .MuiPopover-root": { paddingRight: 0 } }} >
                    <Box onMouseLeave={handleClose} >
                        {menuObj.map((obj, index) => (
                            <Link to={obj.linkTo} key={index} style={{ textDecoration: "none" }} >
                                <MenuItem sx={{ borderBottom: "1px solid gray", backgroundColor: "#282526", color: "white", fontWeight: "900", fontSize: "10px", "&:hover": { color: "#F47A1F", transition: "linear 0.3s", }, }} className="font-bold">{obj.title} </MenuItem>
                            </Link>
                        ))}
                    </Box>
                </Menu>
            </Box>
        </>
    )
}

export default NavButton
