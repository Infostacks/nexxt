import React from 'react'
import { Typography, Grid } from "@mui/material"
const EmergingTechnologies = () => {
    const images = ["https://www.tekrevol.com/assets/images-new/services/custom-software/2.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/4.png", "https://www.tekrevol.com/assets/images-new/services/ios/tech_icon3.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/6.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/8.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/10.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/12.png", "https://www.tekrevol.com/assets/images-new/services/custom-software/13.png"]
    return (
        <Grid container justifyContent="center" sx={{ marginTop: 2, }}>
            <Grid item md={5} justifyContent="center" sx={{ marginTop: 2, marginLeft: 5 }}>
                <Typography variant='subtitle1' color="#B2B2B2" sx={{ marginTop: 5, fontSize: 25 }}>Powering Your Solutions With </Typography>
                <Typography variant='h4' sx={{ fontWeight: "bold" }}>Emerging Technologies</Typography>

                <Typography sx={{ marginTop: 5 }}>
                    Our custom software development solutions are powered by some of the disruptive, emerging technologies. These programming languages and technologies help us build revolutionary software solutions with a forward-thinking approach.
                </Typography>
            </Grid>
            <Grid container md={6} justifyContent="center" sx={{ marginTop: 2, paddingTop: 2 }}>
                {images.map((img, index) => (
                    <Grid item md={2.5} height="120px" sx={{ margin: 1, padding: 4, backgroundColor: "#EDEDED", borderRadius: 2, justifyContent: "center", alignItems: "center" }} key={index}>
                        <img src={img} alt="" style={{ height: "50px", marginTop: 10, color: "#EDEDED" }} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default EmergingTechnologies