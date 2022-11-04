import React from 'react'
import { Grid, Typography } from "@mui/material"
import { borderRadius, Box } from '@mui/system'
const WorkNumbers = () => {
    return (
        <Grid container sx={{ marginTop: 10, marginBottom: 5 }}>
            <Grid item md={6} sx={{ justifyContent: "start" }}>
                <Typography variant='h3' sx={{ fontWeight: "bold", marginLeft: 5 }}>
                    Our Work in Numbers
                </Typography>
            </Grid>
            <Grid item md={8}>
                <Typography variant='subtitle1' sx={{ marginTop: 3, marginLeft: 5 }}>
                    We are more than a software services company designing and developing apps. To name a few software specialties, we love building SaaS programs, CRMs and lead generation tools, entrepreneurial apps and automation solutions, Enterprise Resource Programs, inventory management systems, financial management solutions, and database portals. In simplest words, TekRevol aims to engineer quality and code innovation.
                </Typography>
            </Grid>
            <Grid container justifyContent="space-evenly" sx={{ marginTop: 5, marginLeft: 4, padding: 1 }}>
                <Grid item md={3} sx={{
                    display:
                        "flex", justifyContent: "center", padding:4, borderRadius: 3, backgroundColor: "#F8F8FB", margin: 2
                }}>

                    <Typography variant='h2' component="h2" sx={{ fontWeight: "bold" }}>55+</Typography>
                    <Typography variant='body1' sx={{ marginLeft: 1, marginTop: 3 }}>Applications Delivered</Typography>
                </Grid>

                <Grid md={3} sx={{
                    display:
                        "flex", justifyContent: "center", padding:3, borderRadius: 3, backgroundColor: "#F8F8FB", margin: 2
                }}>

                    <Typography variant='h2' component="h2" sx={{ fontWeight: "bold" }}>34+</Typography>
                    <Typography variant='body1' sx={{ marginLeft: 1, marginTop: 3 }}>Businesses Transformed</Typography>
                </Grid>
                <Grid md={3} sx={{
                    display:
                        "flex", justifyContent: "center", padding:4, borderRadius: 3, backgroundColor: "#F8F8FB", margin: 2
                }}>

                    <Typography variant='h2' component="h2" sx={{ fontWeight: "bold" }}>11+</Typography>
                    <Typography variant='body1' sx={{ marginLeft: 1, marginTop: 3 }}>Industries Served</Typography>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default WorkNumbers