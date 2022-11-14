import React from 'react'
import { Stack } from '@mui/system';
import { Box, Typography, Grid } from "@mui/material"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const BusinessCustomCard = () => {
    const BCardobj = [
        {
            icon: <SportsEsportsIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
            heading: "Gaming",
            description: "The gaming industry is among the most profitable industries around the globe, but not everyone can build a perfect game. At TekRevol, our expert team of software engineers and developers create games following industry standards: cross-platform to cloud functionality, stunning graphics, and fluid player experience. Our games, gaming platforms, and solutions are turnkey products with high monetization potential."
        },
        {
            icon: <MonitorHeartIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
            heading: "Healthcare",
            description: "The gaming industry is among the most profitable industries around the globe, but not everyone can build a perfect game. At TekRevol, our expert team of software engineers and developers create games following industry standards: cross-platform to cloud functionality, stunning graphics, and fluid player experience. Our games, gaming platforms, and solutions are turnkey products with high monetization potential."
        },
        {
            icon: <HomeIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
            heading: "Real Estate",
            description: "The gaming industry is among the most profitable industries around the globe, but not everyone can build a perfect game. At TekRevol, our expert team of software engineers and developers create games following industry standards: cross-platform to cloud functionality, stunning graphics, and fluid player experience. Our games, gaming platforms, and solutions are turnkey products with high monetization potential."
        },
        {
            icon: <AutoStoriesIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
            heading: "Education",
            description: "The gaming industry is among the most profitable industries around the globe, but not everyone can build a perfect game. At TekRevol, our expert team of software engineers and developers create games following industry standards: cross-platform to cloud functionality, stunning graphics, and fluid player experience. Our games, gaming platforms, and solutions are turnkey products with high monetization potential."
        },
        {
            icon: <HeadphonesIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
            heading: "Music",
            description: "The gaming industry is among the most profitable industries around the globe, but not everyone can build a perfect game. At TekRevol, our expert team of software engineers and developers create games following industry standards: cross-platform to cloud functionality, stunning graphics, and fluid player experience. Our games, gaming platforms, and solutions are turnkey products with high monetization potential."
        },
        {
            icon: <ShoppingCartIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
            heading: "Lifestyle",
            description: "The gaming industry is among the most profitable industries around the globe, but not everyone can build a perfect game. At TekRevol, our expert team of software engineers and developers create games following industry standards: cross-platform to cloud functionality, stunning graphics, and fluid player experience. Our games, gaming platforms, and solutions are turnkey products with high monetization potential."
        },
        {
            icon: <SportsBasketballIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
            heading: "Entertainment",
            description: "The gaming industry is among the most profitable industries around the globe, but not everyone can build a perfect game. At TekRevol, our expert team of software engineers and developers create games following industry standards: cross-platform to cloud functionality, stunning graphics, and fluid player experience. Our games, gaming platforms, and solutions are turnkey products with high monetization potential."
        },
        {
            icon: <SportsEsportsIcon sx={{ height: "50px", width: "50px", color: "#F57328" }} />,
            heading: "Gaming",
            description: "The gaming industry is among the most profitable industries around the globe, but not everyone can build a perfect game. At TekRevol, our expert team of software engineers and developers create games following industry standards: cross-platform to cloud functionality, stunning graphics, and fluid player experience. Our games, gaming platforms, and solutions are turnkey products with high monetization potential."
        },
    ]
    return (
        <Grid container sx={{ justifyContent: "center", alignItems: "center", backgroundColor: "#F8F8FB", }}>
            {BCardobj.map((obj, index) => (
                <>
                    <Grid item sx={{ justifyContent: "center", marginY: 2, marginRight: 2, padding: 1 }} key={index}>
                        <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "start" }}>
                            {obj.icon}
                            <Typography sx={{ fontSize: 30, marginX: 1 }}>{obj.heading}</Typography>
                        </Box>
                        <Box sx={{ width: "380px", marginY: 1 }}>
                            <Typography variant='subtitle1'>

                                {obj.description}
                            </Typography>
                        </Box>

                    </Grid>
                </>
            ))}

        </Grid>
    )
}

export default BusinessCustomCard