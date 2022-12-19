import React, { useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
const SideBanner = () => {
    const [sideBanner, setSideBanner] = useState(false)

    const changeSideBar = () => {
        if (window.scrollY >= 500) {
            setSideBanner(true);
        } else {
            setSideBanner(false);
        }
    };

    window.addEventListener("scroll", changeSideBar);

    return (
        <Box height="100px" position="fixed" right="0px" zIndex="999" visibility={sideBanner ? "visible" : "hidden"} sx={{ top: { xl: 250, md: 150 }, transition: "0.5s", width: { md: "40px", xl: "45px" } }}>
            <Box bgcolor="#f37a20" borderRadius="10px 0px 0px 10px" display="flex" justifyContent="center" alignItems="center" p="4px" boxShadow="0 0 10px rgba(0, 0, 0, 0.5)" >
                <CallIcon sx={{ color: "white", height: "45px", fontSize: "35px", }} />
            </Box>
            <Box bgcolor="#f37a20" borderRadius="10px 0px 0px 10px" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" py="20px" marginTop="15px" position="relative" sx={{
                height: { md: "290px", xl: "410px" },
            }}>
                <Typography sx={{
                    color: "white", position: "absolute", top: { xl: 35, md: 20 }, fontSize: { md: "1.1rem", xl: "1.5rem" }, fontWeight: "bold", writingMode: "vertical-lr", transform: "rotate(-180deg)", textAlign: "center"

                }} className="font-bold">Get Free Consultation & Apps</Typography>
            </Box>
        </Box>
    )
}

export default SideBanner