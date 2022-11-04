import React from 'react'
import { Box, Typography, Grid, List, ListItem, ListItemText } from "@mui/material"
import CustomButton from './CustomButton'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
const BuildAndVisualize = () => {
    return (
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item md={5} xl={3} sx={{ margin: 1, marginTop: 10, backgroundColor: "#EDEDED", borderRadius: 2 }}>
                <Grid item sx={{ margin: 2, marginTop: 10, marginLeft: 5 }}>
                    <Typography sx={{ fontWeight: "bolder", fontSize: 25 }}>What you can visualize,</Typography>
                    <Typography sx={{ fontWeight: "bolder", fontSize: 25 }}>we can build</Typography>
                    <Typography variant='subtitle1' sx={{ marginY: 2 }}> TekRevol has a record of bringing world-changing ideas to digital reality. And our technical solid partnerships and affiliations give us an edge in creating digital breakthroughs. Partnering with us guarantees you a specialized talent pool for your project – in addition, you get access to a contemporary technology stack for development success.</Typography>
                    <Typography variant='subtitle1' sx={{ marginBottom: 3 }}> Our technology stack has hundreds of emerging tools and technologies to power up your product and reduce development time and effort. To count a few, our typical day involves working with Blockchain strings, AR and VR frameworks, IoT embedded smart systems, and cloud infrastructure.</Typography>
                    <CustomButton text='SCHEDULE A MEETING' buttonSize='10px 30px' />
                </Grid>
            </Grid>
            <Grid item md={5} xl={3} sx={{ margin: 1, marginTop: 10, marginLeft: 5, backgroundColor: "#EDEDED", borderRadius: 2 }}>
                <Grid item sx={{ margin: 2, marginTop: 10, marginLeft: 5 }}>
                    <Typography sx={{ fontWeight: "bolder", fontSize: 25 }}>Result-driven Software Solutions</Typography>
                    <Typography variant='subtitle1' sx={{ marginY: 2 }}> To keep pace with intelligent automation and digital transformation, your business has two practical options: be the first mover or follow the existing models at scale for disruption.</Typography>
                    <Typography variant='subtitle1'>And both of these approaches need vital programs, backend systems, analysis tools, and applications.</Typography>
                    <Typography variant='subtitle1' sx={{ marginY: 2 }}>Our software programs assist our partner clients in:</Typography>
                    <List>
                        <ListItem>
                            <RadioButtonCheckedIcon color='warning' sx={{ marginRight: 2 }} />
                            <ListItemText primary="Accelerating Their Business Processes" />
                        </ListItem>
                        <ListItem>
                            <RadioButtonCheckedIcon color='warning' sx={{ marginRight: 2 }} />
                            <ListItemText primary="Acquiring And Retaining Consumers" />
                        </ListItem>
                        <ListItem>
                            <RadioButtonCheckedIcon color='warning' sx={{ marginRight: 2 }} />
                            <ListItemText primary="Boosting Customer Engagement" />


                        </ListItem>
                        <ListItem>
                            <RadioButtonCheckedIcon color='warning' sx={{ marginRight: 2 }} />
                            <ListItemText primary="Increasing Their Revenue" />
                        </ListItem>
                        <ListItem>
                            <RadioButtonCheckedIcon color='warning' sx={{ marginRight: 2 }} />
                            <ListItemText primary="Maximizing Their Impact" />
                        </ListItem>
                        <ListItem>
                            <RadioButtonCheckedIcon color='warning' sx={{ marginRight: 2 }} />
                            <ListItemText primary="And Setting Industry Standards." />
                        </ListItem>
                    </List>
                    <Typography variant='subtitle1' sx={{ marginY: 2 }}>What else can you achieve with a digital product tailor-made for your business?</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BuildAndVisualize