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
        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
            <Grid item md={5} justifyContent="center" sx={{ paddingLeft: 1 }}>
                <Typography variant='subtitle1' color="#B2B2B2" sx={{ marginTop: 5, fontSize: 25 }}>{heading1} </Typography>
                <Typography variant='h4' sx={{ fontWeight: "bold" }}>{heading2}</Typography>

                <Typography sx={{ marginTop: 5 }}>
                    {subtitle1}
                </Typography>
            </Grid>
            <Grid container md={6} xl={6} justifyContent="center" alignItems="center" sx={{ paddingLeft: 1 }}>
                {images.map((img, index) => (
                    <Grid item md={2} justifyContent="center" alignItems="center" sx={{ margin: 2, backgroundColor: "#EDEDED", borderRadius: 2, }} key={index}>

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