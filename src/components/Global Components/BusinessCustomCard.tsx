import React from 'react'
import { Stack } from '@mui/system';
import { Box, Typography, Grid } from "@mui/material"


export interface BusinessCustomCardProps {
   businessCardProps : businessCardProps[]
}

interface businessCardProps {
    businessIcon: any,
    title: string,
    description: string
}

const BusinessCustomCard = ({businessCardProps} : BusinessCustomCardProps ) => {
    return (
        <Grid container sx={{ justifyContent: "start", alignItems: "center", backgroundColor: "#F8F8FB", paddingX: { md: "50px", xl: "320px" } }} >
            {businessCardProps.map((obj, index) => (
                <>
                    <Grid item sx={{ justifyContent: "center", marginX: 2, padding: 1 }} key={index}>
                        <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "start", alignItems: "center", padding: 1 }}>
                            <Box>{obj.businessIcon}</Box>
                            <Typography variant='h6' sx={{ marginX: "2px" }}>{obj.title}</Typography>
                        </Box>
                        <Box sx={{ width: { md: "310px", xl: "360px" }, padding: 1 }}>
                            <Typography variant='subtitle1' textAlign={"justify"} className="font-regular">

                                {obj.description}
                            </Typography>
                        </Box>

                    </Grid>
                </>
            ))}

        </Grid>


        // <Box border={2}>
        //     {BCardobj.map((obj, index) => (
        //         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F8F8FB" }} key={index}>
        //             <Box sx={{ marginY: 2, marginRight: 2, padding: 1 }}  border={2}>
        //                 <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "start" }}>
        //                     {obj.icon}
        //                     <Typography sx={{ fontSize: 30, marginX: 1 }}>{obj.heading}</Typography>
        //                 </Box>
        //                 <Box sx={{ width: "380px", marginY: 1 }}>
        //                     <Typography variant='subtitle1'>

        //                         {obj.description}
        //                     </Typography>
        //                 </Box>

        //             </Box>
        //         </Box>
        //     ))}

        // </Box>
    )
}

export default BusinessCustomCard