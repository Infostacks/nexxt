import React from 'react'
import { Box, styled, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import appDevTeamBg from "../../assets/images/Locations/appDevTeamBg.jpg"
import appDevTeamImg from "../../assets/images/Locations/appDevTeamImg.png"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EastIcon from '@mui/icons-material/East';

const AppDevTeam = () => {

    const listItemsArray = [
        "Account Managers, to guide you throughout the development process",
        "Brand Strategists, to plan and implement the strategy",
        "Creative Designers, who form the aesthetics of the app",
        "App Developers, who make the designs operational",
        "Quality Assurance leads, to make sure only the best go through",
        "Digital Marketers, who ensure your app reaches the right user base"
    ]

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ backgroundImage: `url(${appDevTeamBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} py={4}
        >
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{width: {md: "85%", xl: "65%"}}}>
                <Box>
                    <img src={appDevTeamImg} alt="" />
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDirection={"column"} sx={{ color: "white" }} mx={2}>
                    <Typography variant='h4'>What a Complete App Development Team Looks Like</Typography>
                    <Typography variant='subtitle1' my={2}>While talking about adding human elements in the modern business, Abeer Raza, co-founder of Tekrevol, said: When people see that your brand is standing with them and cares about the same problems, it creates a human link between them and your business.</Typography>
                    <Typography variant='subtitle1' my={2}>At Tekrevol we follow the same approach for all our critical business arms including app development teams. For every project, our team partners with the client and listens extensively to their expectations in order to develop an app that fits the bill perfectly.</Typography>
                    <Typography variant='subtitle1' my={2}>But our main reason for achieving success in the app development domain is something else. We know and understand that each project has different needs, so we create distinct development teams for each project. We pick these app development teams from the following pool of highly professional individuals available at our NYC app development facility:</Typography>

                    <Box>
                        <List>
                            {listItemsArray.map((str, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon sx={{ fontSize: "20px", color: "orangered" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={str}
                                    />
                                </ListItem>
                            )

                            )}
                        </List>
                    </Box>

                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Link to={"#"} style={{ color: "orangered", textDecoration: "none" }}>
                            <Typography variant='h6'>Let’s discuss your project </Typography>
                        </Link>
                        <EastIcon sx={{ mx: 2, color: "orangered" }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AppDevTeam