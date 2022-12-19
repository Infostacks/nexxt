import React from 'react'
import { Typography, Grid, Box } from "@mui/material"

export interface EmergingTechnologiesProps {
    heading1: string,
    heading2: string,
    subtitle1: string
    images: string[];
}

const EmergingTechnologies = ({ heading1, heading2, subtitle1, images }: EmergingTechnologiesProps) => {

    return (
        <Grid container justifyContent="center" sx={{ marginTop: 2, paddingX: { md: "50px", xl: "270px" } }} textAlign={"justify"}>
            <Grid item xs={12} md={6} xl={5} justifyContent="center" sx={{ padding: 1 }}>
                <Typography variant='h5' color="#B2B2B2" sx={{ marginTop: 5 }} className="font-regular">{heading1} </Typography>
                <Typography variant='h4' sx={{ fontWeight: "bold" }}>{heading2}</Typography>

                <Typography variant='body1' sx={{ marginTop: 5 }}>
                    {subtitle1}
                </Typography>
            </Grid>
            <Grid container md={6} xl={6} justifyContent="center" alignItems="center" sx={{ paddingLeft: { md: 1, xl: 15 } }}>
                {images.map((img, index) => (
                    <Grid item xs={4} md={2} justifyContent="center" alignItems="center" sx={{ margin: "20px", backgroundColor: "#EDEDED", borderRadius: 2, }} key={index}>

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={img} alt="" style={{ margin: 10, color: "#EDEDED" }} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default EmergingTechnologies